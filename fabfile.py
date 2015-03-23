# fabricfile to deploy build
#
# depends on installation of fabric - pip install fabric
#
# example invocation
# $ fab -H jenkins@uf04.seedscientific.com deploy
# $ fab -H ubuntu@52.0.138.67 deploy

from fabric.api import local, run, cd, put
from fabvenv import virtualenv, make_virtualenv

## global variables
##
local_venv_path = '/tmp/venv'
# remote_venv_path = '/tmp/venv'

# /var/www/clients.seedscientific.com/uf/UF04
remote_work_path = '~/deploy/polio-work'
remote_backend_path = '/var/www/polio/'
remote_frontend_path = '/var/www/polio/static/'

# test build
#
# test-machine dependencies - python, pip, postgres
#
def test():
    local("echo TODO: do tests here")

# deploy build
#
# build-machine dependencies - node, gulp, bower, sass, compass, ruby, virtualenv, fabric-virtualenv
def deploy():
    ###
    ### on build machine...
    ###

    # set up dependencies
    print ("TODO: confirm build machine has dependencies. i.e. node, gulp.")
    # e.g.
    # sudo gem install sass
    # sudo gem install compass

    # make virtual env
    make_virtualenv(local_venv_path)

    # enter virtual environment
    with virtualenv(local_venv_path):
        local ("pip install -r requirements.txt")

        # make dist
        local("./node_modules/.bin/bower install")
        local("./node_modules/.bin/gulp dist")

    ###
    ### on target machine...
    ###

    # make folder if it doesn't exist
    run ("mkdir -p %s" % remote_work_path)

    # push to remote server
    put ('dist/uf04-frontend.zip', remote_work_path)
    put ('dist/uf04-backend.zip', remote_work_path)

    # unzip stuff
    with cd(remote_work_path):
        run("unzip -o uf04-frontend.zip -d %s" % remote_frontend_path) # -o is overwrite
        run("unzip -o uf04-backend.zip -d %s" % remote_backend_path)

    # in front-end path
    with cd(remote_backend_path):
        run("chgrp -R www-data .")

    # in server path -
    with cd(remote_backend_path):
        run("pip install -r requirements.txt")

        # echo "== SYNCDB / MIGRATE =="
        run("python manage.py syncdb --noinput --settings=polio.prod_settings")
        run("python manage.py migrate --noinput --settings=polio.prod_settings")

        # echo "== BUILDING DATABASE =="
        run("bash bin/build_db.sh")

    # bounce apache??
    # customize any other configuration?
    #
    # echo "== BUILDING DOCUMENTATION ==" # maybe...
    # make clean -C docs
    # make html -C docs
    #
    # echo "== RUNNING TESTS =="
    # python manage.py test datapoints.tests.test_cache --settings=polio.settings_test

# def prepare_deploy():
    # local("pip install -r requirements.txt")

    # from shell script
    # git pull origin development
    # pip install -r requirements.txt
    # python manage.py syncdb --settings=polio.prod_settings
    # python manage.py migrate --settings=polio.prod_settings
    # bash bin/build_db.sh
