
var _     	= require('lodash');
var React		= require('react');
var api 		= require('data/api.js')
var TitleMenu  	= require('component/TitleMenu.jsx');
var MenuItem    = require('component/MenuItem.jsx');
var FileInput = require('react-file-input');
var Dropzone = require('react-dropzone');

var DocForm = React.createClass({
// see here: https://fitacular.com/blog/react/2014/06/23/react-file-upload-base64/

  // since we are starting off without any data, there is no initial value
  getInitialState: function() {
    return {
      data_uri: null,
      config_options: [],
      uq_id_column: null,
      region_column: null,
      campaign_column: null,
      created_doc_id: null,
      doc_detail_meta: null,
      doc_is_refreshed: false,
      new_doc_title: null,
    };
  },

  onDrop: function (files) {
    console.log('Received files: ', files);
    this.handleFile(files[0])
  },

  // prevent form from submitting; we are going to capture the file contents
  handleSubmit: function(e) {
    e.preventDefault();
  },

  // when a file is passed to the input field, retrieve the contents as a
  // base64-encoded data URI and save it to the component's state
  handleFile: function(file) {
    var self = this;

    var reader = new FileReader();

    reader.onload = function(upload) {
      self.setState({
        data_uri: upload.target.result,
      });

      api.uploadPost({
          docfile:upload.target.result,
          doc_title:file.name,
        }).then(function (response) {

        var new_doc_obj = response.objects[0]
        self.setState({
          config_options: new_doc_obj.file_header.replace('"','').split(','),
          created_doc_id: new_doc_obj.id,
          new_doc_title: response.doc_title,
        });
      })

      api.docDetailType().then(function (response) {
        var doc_detail_types = _.indexBy(response.objects, 'name');
        self.setState({doc_detail_meta:doc_detail_types})
      })
    }
    reader.readAsDataURL(file);
  },

  setDocConfig :function (config_type, config_val) {
    var self = this;
    var doc_detail_type_lookup = {}

    var x = 1

    var doc_detail_meta = this.state.doc_detail_meta
    var doc_detail_type = doc_detail_meta[config_type]

    console.log('=====doc_detail_type: ', doc_detail_type.id)

    api.docDetailPost({
          document_id: this.state.created_doc_id,
          doc_detail_type_id:  doc_detail_type.id,
          doc_detail_value: config_val
    }).then(function (response) {
        var stateObject = {}
        stateObject[config_type] = response.objects[0].doc_detail_value
        self.setState(stateObject)
      });
  },

  syncDocData : function (config_val) {
      var self = this;

      api.transformUpload({document_id: this.state.created_doc_id})
      .then(function (response) {
          self.setState({doc_is_refreshed: true})
      });
  },

  buildHeaderList : function (config_type){
    var state_header = this.state.config_options

    return MenuItem.fromArray(
      _.map(state_header, d => {
        return {
          title : d,
          value : d
        };
      }),
      this.setDocConfig.bind('config_type',config_type));
  },

  // return the structure to display and bind the onChange, onSubmit handlers
  render: function() {

    var uqHeaderList = this.buildHeaderList('uq_id_column')
    var rgHeaderList = this.buildHeaderList('region_column')
    var cpHeaderList = this.buildHeaderList('campaign_column')

    if (this.state.created_doc_id) {
        var uq_col = this.state.uq_id_column
        var rg_col = this.state.region_column
        var cp_col = this.state.campaign_column

        var fileConfigForm = <div>
        <ul>
          <li>
            Unique ID Column:
            <TitleMenu text={uq_col}>
              {uqHeaderList}
            </TitleMenu>
          </li>
          <li>
            Region Column:
            <TitleMenu text={rg_col}>
              {rgHeaderList}
            </TitleMenu>
          </li>
          <li>
            Campaign Column:
            <TitleMenu text={cp_col}>
              {cpHeaderList}
            </TitleMenu>
          </li>
        </ul>
      </div>
      }
      else {
        var fileConfigForm = ''
      }

      if (this.state.uq_id_column && this.state.region_column && this.state.campaign_column){
        var refreshBtn = <button onClick={this.syncDocData}> Sync Data</button>
      }
      else {
        var refreshBtn = ''
      }


    if (this.state.uq_id_column && this.state.region_column && this.state.campaign_column && this.state.doc_is_refreshed){
      var next_link = "/datapoints/source-data/Nigeria/2015/06/viewraw/" + this.state.created_doc_id;
      // FIXME ^^
      var reviewBtn = <a href={next_link}  className="button"> Review Upload</a>
    }
    else {
      var reviewBtn = ''
    }

    var divZoneStyle = {
      margin: 'auto',
      width: '50%',
      padding: '10px',
      border: '2px dashed #0087F7',
    };

    var dropZoneStyle = {
      minHeight: '100px',
      padding: '54px 54px',
      marginRight: '150px',
    };

    // since JSX is case sensitive, be sure to use 'encType'
    return (<div style={divZoneStyle}>
      <Dropzone onDrop={this.onDrop} style={dropZoneStyle}>
        <div style={{textAlign:"center"}}>Click here, or Drag a File to Upload New Data!</div>
      </Dropzone>
      {fileConfigForm}
      {refreshBtn}
      {reviewBtn}
    </div>);
  },
});


module.exports = DocForm;
