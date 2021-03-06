# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.contrib.auth.models import User

class Migration(migrations.Migration):

    dependencies = [
        ('datapoints', '0008_ingest_geojson'),
    ]

    operations = [

    migrations.RunSQL("""

    DROP TABLE IF EXISTS _tmp_indicator_map;
    CREATE TABLE _tmp_indicator_map
    AS
    SELECT 159 as indicator_id ,'number-of-avdpv2-cases' as indicator_slug UNION ALL
    SELECT 162,'number-of-ivdpv-cases' UNION ALL
    SELECT 32,'number-of-polio-communication-positions-in-place' UNION ALL
    SELECT 31,'target-number-of-polio-communication-positions' UNION ALL
    SELECT 21,'number-of-all-missed-children' UNION ALL
    SELECT 24,'number-of-children-missed-due-to-other-reasons' UNION ALL
    SELECT 25,'number-of-refusals-before-re-visit-2' UNION ALL
    SELECT 26,'number-of-refusals-after-re-visit-2' UNION ALL
    SELECT 27,'number-of-microplans-in-high-risk-district' UNION ALL
    SELECT 30,'number-of-caregivers-aware-of-polio-campaigns' UNION ALL
    SELECT 28,'number-of-microplans-in-high-risk-districts-incorporating-social-data' UNION ALL
    SELECT 35,'number-of-target-social-mobilizers' UNION ALL
    SELECT 40,'number-of-female-social-mobilizers' UNION ALL
    SELECT 45,'frr-updated-quarterly' UNION ALL
    SELECT 46,'number-of-social-mobilizers-receiving-timely-payment-for-last-campaign' UNION ALL
    SELECT 34,'number-of-high-risk-areas-with-social-mobilizers-2' UNION ALL
    SELECT 43,'amount-total-frr-funds' UNION ALL
    SELECT 38,'number-of-teams' UNION ALL
    SELECT 36,'number-of-target-social-mobilizers-in-place' UNION ALL
    SELECT 29,'number-of-caregivers' UNION ALL
    SELECT 44,'amount-frr-funds-committed' UNION ALL
    SELECT 49,'number-of-social-mobilizers-trained-on-ri-in-past-6-mo' UNION ALL
    SELECT 93,'censusnewbornsf' UNION ALL
    SELECT 112,'group-msd-chd-msd-poldiffsf' UNION ALL
    SELECT 42,'number-of-front-line-workers-with-ipc-skills' UNION ALL
    SELECT 1,'polio-cases-ytd' UNION ALL
    SELECT 53,'number-of-districts-having-no-stockouts-of-opv' UNION ALL
    SELECT 463,'number-of-social-mobilisers-participating-the-telephone-survey' UNION ALL
    SELECT 56,'number-of-sub-regional-units' UNION ALL
    SELECT 57,'number-of-sub-regional-units-where-opv-arrived-in-sufficient-time' UNION ALL
    SELECT 70,'number-of-wpv-cases' UNION ALL
    SELECT 62,'number-of-health-facilities-w-capacity' UNION ALL
    SELECT 66,'number-of-health-facilities-having-no-stock-outs-of-opv' UNION ALL
    SELECT 176,'number-of-established-lt-vaccination-transit-points-with-a-dedicated-social-mobilizer' UNION ALL
    SELECT 67,'percentage-of-statesregions-with-opv-supply-arriving-at-stateregion-level-in-sufficient-time-before-campaign' UNION ALL
    SELECT 470,'number-of-children-missed-due-to-all-access-issues' UNION ALL
    SELECT 69,'number-of-cvdpv-cases' UNION ALL
    SELECT 160,'number-of-wpv3-cases' UNION ALL
    SELECT 161,'number-of-wpv1wpv3-cases' UNION ALL
    SELECT 51,'number-of-children-vaccinated' UNION ALL
    SELECT 177,'number-of-children-vaccinated-at-transit-points-last-month' UNION ALL
    SELECT 167,'missed-children-due-to-team-did-not-visit' UNION ALL
    SELECT 165,'missed-children-due-to-other-reasons' UNION ALL
    SELECT 166,'missed-children-due-to-refusal' UNION ALL
    SELECT 164,'missed-children-due-to-child-not-available' UNION ALL
    SELECT 175,'number-of-established-lt-vaccination-transit-points' UNION ALL
    SELECT 95,'spec-grp-choice' UNION ALL
    SELECT 169,'percent-of-frr-funded-for-the-next-6-months' UNION ALL
    SELECT 192,'number-of-ri-defaulters-mobilized-by-sms-last-month' UNION ALL
    SELECT 179,'percent-of-target-social-mobilizers-and-supervisors-in-place' UNION ALL
    SELECT 172,'percent-of-high-risk-districts-which-reported-on-balance-of-sia-vaccine-stock-after-last-sia-round' UNION ALL
    SELECT 196,'hr-district-did-not-receive-polio-vaccine-supply-at-least-3-days-before-the-planned-start-date-of-campaign-1-yes-0-no' UNION ALL
    SELECT 199,'total-number-of-all-active-cold-chain-equipment-in-district' UNION ALL
    SELECT 206,'number-of-social-mobilizers-and-supervisors-in-place' UNION ALL
    SELECT 37,'number-of-teams-with-at-least-one-female' UNION ALL
    SELECT 210,'number-of-social-mobilizers-who-received-on-the-job-supervision-during-their-last-working-week' UNION ALL
    SELECT 211,'number-of-refusals-resolved' UNION ALL
    SELECT 197,'district-reported-on-balance-of-SIA-vaccine-stocks-after-last-SIA-round' UNION ALL
    SELECT 213,'number-of-absences-before-re-visit' UNION ALL
    SELECT 214,'number-of-absences-after-re-visit' UNION ALL
    SELECT 216,'number-of-ri-sessions-monitored-having-stockouts-of-any-vaccine-in-the-last-month' UNION ALL
    SELECT 217,'number-of-ri-sessions-monitored' UNION ALL
    SELECT 218,'number-of-high-risk-districts-with-locations-where-opv-is-delivered-together-with-any-other-polio-funded-services-demanded-by-community' UNION ALL
    SELECT 174,'proportion-of-access-challenged-districts-that-have-had-a-specific-access-approach-identified' UNION ALL
    SELECT 189,'percent-of-absences-resolved-during-the-previous-month-both-during-campaigns-and-between-rounds' UNION ALL
    SELECT 134,'group-spec-events-spec-mslscase' UNION ALL
    SELECT 202,'is-access-challenged-district-that-has-a-specific-access-approach-identified' UNION ALL
    SELECT 203,'is-access-challenged-district' UNION ALL
    SELECT 472,'HRD-with-90%-functional-cold-chain' UNION ALL
    SELECT 219,'percent-high-risk-districts-where-polio-vaccine-wastage-rate-in-sias-is-between-5-and-15' UNION ALL
    SELECT 193,'percent-of-hrds-with-locations-where-opv-is-delivered-together-with-any-other-polio-funded-services-demanded-by-the-community' UNION ALL
    SELECT 475,'missed-children-out-of-children-targeted' UNION ALL
    SELECT 180,'percent-of-vaccination-teams-in-which-at-least-1-member-is-from-local-community-in-high-risk-areas' UNION ALL
    SELECT 204,'total-number-of-lt-vaccination-transit-points-planned-by-the-programme' UNION ALL
    SELECT 207,'target-number-of-social-mobilizers-and-supervisors' UNION ALL
    SELECT 215,'number-of-absences-resolved' UNION ALL
    SELECT 81,'vaxnewbornsm' UNION ALL
    SELECT 82,'vaxnewbornsf' UNION ALL
    SELECT 89,'tot-vaxnewborn' UNION ALL
    SELECT 86,'tot-vax2-11mo' UNION ALL
    SELECT 88,'tot-vax12-59mo' UNION ALL
    SELECT 78,'vax2-11mom' UNION ALL
    SELECT 77,'vax2-11mof' UNION ALL
    SELECT 80,'vax12-59mof' UNION ALL
    SELECT 79,'vax12-59mom' UNION ALL
    SELECT 74,'tot-vax' UNION ALL
    SELECT 83,'tot-newborns' UNION ALL
    SELECT 136,'group-msd-chd-msd-unhappywteamm' UNION ALL
    SELECT 137,'group-msd-chd-msd-unhappywteamf' UNION ALL
    SELECT 141,'group-msd-chd-msd-toomanyroundsm' UNION ALL
    SELECT 140,'group-msd-chd-msd-toomanyroundsf' UNION ALL
    SELECT 109,'group-msd-chd-msd-soceventm' UNION ALL
    SELECT 110,'group-msd-chd-msd-soceventf' UNION ALL
    SELECT 129,'group-msd-chd-msd-sideeffectsm' UNION ALL
    SELECT 128,'group-msd-chd-msd-sideeffectsf' UNION ALL
    SELECT 107,'group-msd-chd-msd-securitym' UNION ALL
    SELECT 108,'group-msd-chd-msd-securityf' UNION ALL
    SELECT 122,'group-msd-chd-msd-relbeliefsm' UNION ALL
    SELECT 119,'group-msd-chd-msd-relbeliefsf' UNION ALL
    SELECT 142,'group-msd-chd-msd-poliouncommonm' UNION ALL
    SELECT 143,'group-msd-chd-msd-poliouncommonf' UNION ALL
    SELECT 133,'group-msd-chd-msd-poliohascurem' UNION ALL
    SELECT 132,'group-msd-chd-msd-poliohascuref' UNION ALL
    SELECT 148,'group-msd-chd-msd-otherprotectionm' UNION ALL
    SELECT 147,'group-msd-chd-msd-otherprotectionf' UNION ALL
    SELECT 105,'group-msd-chd-msd-noplusesm' UNION ALL
    SELECT 106,'group-msd-chd-msd-noplusesf' UNION ALL
    SELECT 145,'group-msd-chd-msd-nogovtservicesm' UNION ALL
    SELECT 146,'group-msd-chd-msd-nogovtservicesf' UNION ALL
    SELECT 194,'percent-of-hrds-that-did-not-receive-polio-vaccine-supply-at-least-3-days-before-the-planned-starting-date-of-the-campaign' UNION ALL
    SELECT 117,'group-msd-chd-msd-noconsentm' UNION ALL
    SELECT 118,'group-msd-chd-msd-noconsentf' UNION ALL
    SELECT 139,'group-msd-chd-msd-hhnotvisitedm' UNION ALL
    SELECT 138,'group-msd-chd-msd-hhnotvisitedf' UNION ALL
    SELECT 121,'group-msd-chd-msd-nofeltneedm' UNION ALL
    SELECT 120,'group-msd-chd-msd-nofeltneedf' UNION ALL
    SELECT 131,'group-msd-chd-msd-familymovedm' UNION ALL
    SELECT 130,'group-msd-chd-msd-familymovedf' UNION ALL
    SELECT 101,'group-msd-chd-msd-schoolm' UNION ALL
    SELECT 100,'group-msd-chd-msd-schoolf' UNION ALL
    SELECT 115,'group-msd-chd-msd-childsickm' UNION ALL
    SELECT 116,'group-msd-chd-msd-childsickf' UNION ALL
    SELECT 96,'group-msd-chd-msd-farmm' UNION ALL
    SELECT 97,'group-msd-chd-msd-farmf' UNION ALL
    SELECT 114,'group-msd-chd-msd-childdiedm' UNION ALL
    SELECT 123,'group-msd-chd-msd-playgroundm' UNION ALL
    SELECT 124,'group-msd-chd-msd-playgroundf' UNION ALL
    SELECT 98,'group-msd-chd-msd-marketm' UNION ALL
    SELECT 99,'group-msd-chd-msd-marketf' UNION ALL
    SELECT 102,'group-msd-chd-msd-agedoutm' UNION ALL
    SELECT 103,'group-msd-chd-msd-agedoutf' UNION ALL
    SELECT 113,'group-msd-chd-msd-childdiedf' UNION ALL
    SELECT 76,'tot-missed' UNION ALL
    SELECT 90,'tot-2-11months' UNION ALL
    SELECT 92,'tot-12-59months' UNION ALL
    SELECT 75,'tot-census' UNION ALL
    SELECT 127,'group-msd-chd-tot-missed-check' UNION ALL
    SELECT 84,'census2-11mom' UNION ALL
    SELECT 85,'census2-11mof' UNION ALL
    SELECT 87,'census12-59mom' UNION ALL
    SELECT 91,'census12-59mof' UNION ALL
    SELECT 94,'censusnewbornsm' UNION ALL
    SELECT 111,'group-msd-chd-msd-poldiffsm' UNION ALL
    SELECT 126,'group-spec-events-spec-afpcase' UNION ALL
    SELECT 149,'group-spec-events-spec-cmamreferral' UNION ALL
    SELECT 104,'group-spec-events-spec-fic' UNION ALL
    SELECT 125,'group-spec-events-spec-newborn' UNION ALL
    SELECT 150,'group-spec-events-spec-otherdisease' UNION ALL
    SELECT 151,'group-spec-events-spec-pregnantmother' UNION ALL
    SELECT 144,'group-spec-events-spec-rireferral' UNION ALL
    SELECT 152,'group-spec-events-spec-vcmattendedncer' UNION ALL
    SELECT 135,'group-spec-events-spec-zerodose' UNION ALL
    SELECT 274,'outside_percent-missed-children' UNION ALL
    SELECT 198,'number-of-functional-active-cold-chain-equipment' UNION ALL
    SELECT 201,'district-has-specific-access-approach-identified-1yes-0no' UNION ALL
    SELECT 208,'number-of-vaccination-teams-with-at-least-1-member-from-the-local-community' UNION ALL
    SELECT 209,'number-of-social-mobilizers-trained-or-refreshed-with-the-integrated-health-package-in-the-last-6-months' UNION ALL
    SELECT 55,'number-of-targeted-under-five-children' UNION ALL
    SELECT 220,'vaccine-wastage-rate' UNION ALL
    SELECT 33,'number-of-high-risk-areas-targeted-2' UNION ALL
    SELECT 195,'is-a-high-risk-district' UNION ALL
    SELECT 254,'endprocess_noimmreas10-fear-of-opv-side-effects' UNION ALL
    SELECT 221,'hrd-that-has-polio-vaccine-wastage-rate-in-sias-between-5-and-15' UNION ALL
    SELECT 224,'percentage-of-established-lt-vaccination-transit-points-with-a-dedicated-social-mobilizer' UNION ALL
    SELECT 222,'percentage-of-districts-with-microplans-that-passed-review' UNION ALL
    SELECT 191,'percent-of-ri-sessions-monitored-having-stockouts-of-any-vaccine-during-last-month' UNION ALL
    SELECT 178,'percent-of-hr-sub-districts-covered-by-social-mobilizers' UNION ALL
    SELECT 184,'percent-of-social-mobilizers-trained-or-refreshed-with-the-integrated-health-package-in-the-last-6-months' UNION ALL
    SELECT 250,'endprocess_noimmreas7-child-at-school' UNION ALL
    SELECT 273,'outside_total-not-marked' UNION ALL
    SELECT 272,'endprocess_percent-missed-children' UNION ALL
    SELECT 247,'endprocess_noimmreas4-child-at-social-event' UNION ALL
    SELECT 249,'endprocess_noimmreas6-child-at-farm' UNION ALL
    SELECT 242,'number-of-vaccine-doses-wasted' UNION ALL
    SELECT 243,'number-of-children-12-months-and-under' UNION ALL
    SELECT 244,'number-of-children-under-12-months-who-received-dpt3-or-penta3' UNION ALL
    SELECT 248,'endprocess_noimmreas5-child-at-market' UNION ALL
    SELECT 246,'endprocess_noimmreas3-child-at-playground' UNION ALL
    SELECT 253,'endprocess_noimmreas9-too-many-rounds' UNION ALL
    SELECT 263,'endprocess_noimmreas19-no-caregiver-consent' UNION ALL
    SELECT 251,'endprocess_reason-for-missed-children-child-absent' UNION ALL
    SELECT 252,'endprocess_noimmreas8-child-sick' UNION ALL
    SELECT 236,'pct-of-caregivers-in-hrds-who-know-number-of-times-they-need-to-visit-the-ri-site-for-routine-immunization-before-a-child-reaches-1-year-of-age' UNION ALL
    SELECT 239,'pct-of-female-social-mobilisers-among-social-mobilizers-in-place' UNION ALL
    SELECT 185,'percent-of-social-mobilizers-who-received-on-the-job-supervision-during-their-last-working-week' UNION ALL
    SELECT 226,'pct-of-social-mobilizers-who-received-timely-payment-for-last-campaignmonths-salary-among-all-social-mobilisers-involved-in-the-campaign' UNION ALL
    SELECT 228,'pct-of-vaccinators-operating-in-hrd-who-have-been-trained-on-professional-inter-personal-communication-package-provided-by-unicef-in-the-last-6-months' UNION ALL
    SELECT 230,'pct-of-vaccination-teams-in-which-at-least-one-member-is-female-in-hr-areas' UNION ALL
    SELECT 476,'tw-test-infected-people' UNION ALL
    SELECT 477,'tw-test-outbreak-infected-people' UNION ALL
    SELECT 279,'endprocess_influence5-radio' UNION ALL
    SELECT 258,'endprocess_noimmreas14-religious-belief' UNION ALL
    SELECT 288,'endprocess_percent-vaccination-influencer-is-radio' UNION ALL
    SELECT 266,'endprocess_noimmreas20-security' UNION ALL
    SELECT 269,'endprocess_number-of-children-0-to-59-marked' UNION ALL
    SELECT 270,'endprocess_number-of-children-0-to-59-unimmunized' UNION ALL
    SELECT 271,'endprocess_number-of-children-seen' UNION ALL
    SELECT 275,'outside_total-seen' UNION ALL
    SELECT 287,'endprocess_percent-vaccination-influencer-is-personal-decision' UNION ALL
    SELECT 277,'endprocess_not-aware' UNION ALL
    SELECT 285,'endprocess_influence8-vaccinator' UNION ALL
    SELECT 260,'endprocess_noimmreas16-unhappy-with-vaccination-team' UNION ALL
    SELECT 291,'endprocess_percent-vaccination-influencer-is-traditional-leader' UNION ALL
    SELECT 282,'endprocess_influence3-traditional-leader' UNION ALL
    SELECT 293,'endprocess_percent-vaccination-influencer-is-religious-leader' UNION ALL
    SELECT 284,'endprocess_influence4-religious-leader' UNION ALL
    SELECT 290,'endprocess_percent-vaccination-influencer-is-neighbour' UNION ALL
    SELECT 265,'endprocess_missed-children-all-reasons' UNION ALL
    SELECT 286,'endprocess_all-vaccination-influencers' UNION ALL
    SELECT 289,'endprocess_percent-vaccination-influencer-is-husband' UNION ALL
    SELECT 173,'percent-of-high-risk-districts-where-at-least-90-of-active-cold-chain-equipment-are-functional' UNION ALL
    SELECT 276,'percent-caregiver-awareness' UNION ALL
    SELECT 283,'endprocess_influence7-community-mobiliser' UNION ALL
    SELECT 292,'endprocess_pct-vaccination-influencer-is-community-mobiliser' UNION ALL
    SELECT 280,'endprocess_influence2-husband' UNION ALL
    SELECT 281,'endprocess_influence6-neighbour' UNION ALL
    SELECT 262,'endprocess_noimmreas18-no-felt-need' UNION ALL
    SELECT 264,'endprocess_reason-for-missed-children-non-compliance' UNION ALL
    SELECT 261,'endprocess_noimmreas17-no-pluses-given' UNION ALL
    SELECT 267,'endprocess_noimmreas1-household-not-in-microplan' UNION ALL
    SELECT 268,'endprocess_noimmreas2-household-in-microplan-but-not-visited' UNION ALL
    SELECT 278,'endprocess_influence1-personal-decision' UNION ALL
    SELECT 256,'endprocess_noimmreas12-polio-has-cure' UNION ALL
    SELECT 259,'endprocess_noimmreas15-political-differences' UNION ALL
    SELECT 307,'endprocess_percent-source-of-info-is-town-announcer' UNION ALL
    SELECT 324,'endprocess_pct-of-children-absent-due-to-child-at-social-event' UNION ALL
    SELECT 322,'endprocess_pct-missed-children-due-to-security' UNION ALL
    SELECT 296,'endprocess_source-of-info-on-ipds-radio' UNION ALL
    SELECT 303,'endprocess_source-of-info-on-ipds-relative' UNION ALL
    SELECT 306,'endprocess_all-sources-of-info-on-ipds' UNION ALL
    SELECT 309,'endprocess_percent-source-of-info-is-relative' UNION ALL
    SELECT 295,'endprocess_source-of-info-on-ipds-town-announcer' UNION ALL
    SELECT 310,'endprocess_percent-source-of-info-is-radio' UNION ALL
    SELECT 314,'endprocess_percent-source-of-info-is-poster' UNION ALL
    SELECT 323,'endprocess_pct-of-children-absent-due-to-playground' UNION ALL
    SELECT 319,'endprocess_pct-missed-children-due-to-hh-in-plan-but-not-visited' UNION ALL
    SELECT 321,'endprocess_pct-missed-children-due-to-non-compliance' UNION ALL
    SELECT 311,'endprocess_percent-source-of-info-is-newspaper' UNION ALL
    SELECT 308,'endprocess_percent-source-of-info-is-mosque-announcement' UNION ALL
    SELECT 313,'endprocess_percent-source-of-info-is-traditional-leader' UNION ALL
    SELECT 325,'endprocess_pct-of-children-absent-due-to-child-at-market' UNION ALL
    SELECT 318,'endprocess_percent-missed-children-due-to-hh-not-in-plan' UNION ALL
    SELECT 297,'endprocess_source-of-info-on-ipds-traditional-leader' UNION ALL
    SELECT 312,'endprocess_percent-source-of-info-is-health-worker' UNION ALL
    SELECT 316,'endprocess_percent-source-of-info-is-religious-leader' UNION ALL
    SELECT 315,'endprocess_percent-source-of-info-is-community-mobiliser' UNION ALL
    SELECT 298,'endprocess_source-of-info-on-ipds-religious-leader' UNION ALL
    SELECT 320,'endprocess_pct-missed-children-due-to-child-absent' UNION ALL
    SELECT 302,'endprocess_source-of-info-on-ipds-banner' UNION ALL
    SELECT 317,'endprocess_percent-source-of-info-is-banner' UNION ALL
    SELECT 305,'endprocess_source-of-info-on-ipds-community-mobiliser' UNION ALL
    SELECT 304,'endprocess_source-of-info-on-ipds-health-worker' UNION ALL
    SELECT 299,'endprocess_source-of-info-on-ipds-mosque-announcement' UNION ALL
    SELECT 300,'endprocess_source-of-info-on-ipds-newspaper' UNION ALL
    SELECT 301,'endprocess_source-of-info-on-ipds-poster' UNION ALL
    SELECT 332,'endprocess_pct-of-non-compliance-due-to-too-many-rounds' UNION ALL
    SELECT 327,'endprocess_pct-of-children-absent-due-to-child-at-school' UNION ALL
    SELECT 330,'endprocess_pct-of-non-compliance-due-to-religious-belief' UNION ALL
    SELECT 335,'endprocess_pct-of-non-compliance-due-to-fear-of-opv-side-effects' UNION ALL
    SELECT 336,'endprocess_pct-of-non-compliance-due-to-other-remedies-available' UNION ALL
    SELECT 337,'endprocess_pct-of-non-compliance-due-to-unhappy-with-team' UNION ALL
    SELECT 338,'endprocess_pct-of-non-compliance-due-to-no-caregiver-consent' UNION ALL
    SELECT 339,'endprocess_pct-of-non-compliance-due-to-no-felt-need' UNION ALL
    SELECT 334,'endprocess_pct-of-non-compliance-due-to-political-differences' UNION ALL
    SELECT 329,'endprocess_pct-of-non-compliance-due-to-polio-is-rare' UNION ALL
    SELECT 333,'endprocess_pct-of-non-compliance-due-to-polio-has-cure' UNION ALL
    SELECT 344,'redo_number-of-children-0-to-59-months-missed-in-hh-due-to-non-compliance' UNION ALL
    SELECT 348,'redo_percent-non-compliance-resolved-by-other' UNION ALL
    SELECT 331,'endprocess_pct-of-non-compliance-due-to-no-pluses-given' UNION ALL
    SELECT 349,'endprocess_aware' UNION ALL
    SELECT 350,'redo_number-of-children-0-59-months-missed-in-hh-due-to-child-absence' UNION ALL
    SELECT 351,'redo_number-of-children-0-59-months-missed-in-other-nc-places' UNION ALL
    SELECT 352,'redo_number-of-children-0-59-months-missed-in-nc-schools' UNION ALL
    SELECT 353,'redo_reasons-for-nc-child-sick' UNION ALL
    SELECT 354,'redo_no-immunised-in-households-with-community-leader-intervention-child-absent' UNION ALL
    SELECT 355,'redo_no-of-household-resolved' UNION ALL
    SELECT 356,'redo_no-immunised-in-other-nc-places-with-intervention-of-community-influencers' UNION ALL
    SELECT 345,'redo_percent-non-compliance-resolved-by-traditional-leader' UNION ALL
    SELECT 340,'redo_non-compliance-resolved-by-traditional-leader' UNION ALL
    SELECT 347,'redo_percent-non-compliance-resolved-by-religious-leader' UNION ALL
    SELECT 342,'redo_non-compliance-resolved-by-religious-leader' UNION ALL
    SELECT 346,'redo_percent-non-compliance-resolved-by-community-leader' UNION ALL
    SELECT 328,'endprocess_pct-of-non-compliance-due-to-child-sick' UNION ALL
    SELECT 341,'redo_non-compliance-resolved-by-community-leader' UNION ALL
    SELECT 343,'redo_non-compliance-resolved-by-other' UNION ALL
    SELECT 357,'redo_no-immunised-in-other-nc-places-with-intervention-of-others' UNION ALL
    SELECT 358,'redo_no-immunised-in-other-nc-places-with-intervention-of-religious-leaders' UNION ALL
    SELECT 359,'redo_no-immunised-in-other-nc-places-with-intervention-of-traditional-leaders' UNION ALL
    SELECT 360,'redo_no-immunised-in-households-with-traditonal-leader-intervention-child-absent' UNION ALL
    SELECT 361,'redo_no-immunised-in-nc-schools-with-intervention-of-community-influencer' UNION ALL
    SELECT 362,'redo_no-immunised-in-nc-schools-with-intervention-of-others' UNION ALL
    SELECT 363,'redo_no-immunised-in-nc-schools-with-intervention-of-religious-leader' UNION ALL
    SELECT 364,'redo_no-immunised-in-nc-schools-with-intervention-of-traditional-leader' UNION ALL
    SELECT 365,'redo_reasons-for-nc-no-caregiver-consent' UNION ALL
    SELECT 366,'redo_number-of-nc-households' UNION ALL
    SELECT 370,'redo_no-of-nc-children-not-immunised-not-resolved' UNION ALL
    SELECT 371,'redo_no-of-children-absent-not-immunised-not-resolved' UNION ALL
    SELECT 372,'redo_reasons-for-nc-opv-safety' UNION ALL
    SELECT 368,'redo_noneedfelt' UNION ALL
    SELECT 369,'redo_nonocother' UNION ALL
    SELECT 373,'redo_no-immunised-in-households-with-intervention-of-others-child-absent' UNION ALL
    SELECT 374,'redo_no-of-other-places-resolved' UNION ALL
    SELECT 375,'redo_reasons-for-nc-political-differences' UNION ALL
    SELECT 376,'redo_reasons-for-child-absent-playground' UNION ALL
    SELECT 377,'redo_reasons-for-child-absent-market' UNION ALL
    SELECT 378,'redo_reasons-for-child-absent-school' UNION ALL
    SELECT 379,'redo_reasons-for-child-absent-farm' UNION ALL
    SELECT 380,'redo_reasons-for-child-absent-social-event' UNION ALL
    SELECT 381,'redo_reasons-for-child-absent-other' UNION ALL
    SELECT 382,'redo_reasons-for-nc-reason-not-given' UNION ALL
    SELECT 383,'redo_reasons-for-nc-religious-belief' UNION ALL
    SELECT 384,'redo_no-immunised-in-households-with-religious-leader-intervention-child-absent' UNION ALL
    SELECT 385,'redo_no-of-schools-resolved' UNION ALL
    SELECT 386,'redo_no-of-settlements-to-revisit' UNION ALL
    SELECT 387,'redo_reasons-for-nc-too-many-rounds' UNION ALL
    SELECT 388,'redo_reasons-for-nc-unhappy-with-immunisation-personnel' UNION ALL
    SELECT 367,'redo_noncshools' UNION ALL
    SELECT 389,'redo_missedredo' UNION ALL
    SELECT 390,'redo_targetredo' UNION ALL
    SELECT 391,'number-of-settlements-visited-by-suveyor' UNION ALL
    SELECT 392,'outside_total-number-of-children-sampled-in-settlement-3' UNION ALL
    SELECT 393,'outside_total-children-not-finger-marked-not-immunized-in-settlement-3' UNION ALL
    SELECT 394,'outside_total-number-of-children-sampled-in-settlement-1' UNION ALL
    SELECT 395,'outside_total-number-of-children-sampled-in-settlement-2' UNION ALL
    SELECT 396,'outside_total-children-not-finger-marked-not-immunized-in-settlement-1' UNION ALL
    SELECT 397,'outside_total-children-not-finger-marked-not-immunized-in-settlement-2' UNION ALL
    SELECT 398,'outside_total-number-of-locations-sampled-by-suveyor' UNION ALL
    SELECT 399,'outside_unvaccinated-this-round' UNION ALL
    SELECT 400,'redo_0to9mth-seen' UNION ALL
    SELECT 5,'number-of-vaccine-doses-used' UNION ALL
    SELECT 401,'outside_0to9mth-notmarked' UNION ALL
    SELECT 404,'outside_children-24-59mth-sampled-by-suveyor' UNION ALL
    SELECT 402,'outside_0to23mth-seen' UNION ALL
    SELECT 403,'outside_0to23mth-notmarked' UNION ALL
    SELECT 405,'outside_24to59mth-notmarked' UNION ALL
    SELECT 406,'outside_total-number-of-children-sampled-calculated' UNION ALL
    SELECT 407,'outside_total-number-of-children-not-finger-marked-calculated' UNION ALL
    SELECT 408,'outside_total-number-of-children-seen-in-settlement-4' UNION ALL
    SELECT 409,'outside_total-children-not-finger-marked-not-immunized-in-settlement-4' UNION ALL
    SELECT 410,'outside_total-number-of-children-sampled-in-settlement-5' UNION ALL
    SELECT 411,'outside_total-number-of-children-sampled-in-settlement-6' UNION ALL
    SELECT 412,'outside_total-children-not-finger-marked-not-immunized-in-settlement-5' UNION ALL
    SELECT 413,'outside_total-children-not-finger-marked-not-immunized-in-settlement-6' UNION ALL
    SELECT 414,'endprocess_hhsampled' UNION ALL
    SELECT 415,'endprocess_hhvisitedteams' UNION ALL
    SELECT 416,'endprocess_zerodose' UNION ALL
    SELECT 417,'endprocess_totalyoungest' UNION ALL
    SELECT 418,'endprocess_youngstri' UNION ALL
    SELECT 419,'endprocess_rassessmrk' UNION ALL
    SELECT 420,'endprocess_rcorctcat' UNION ALL
    SELECT 421,'endprocess_rincorect' UNION ALL
    SELECT 422,'endprocess_rxassessmrk' UNION ALL
    SELECT 423,'endprocess_rxcorctcat' UNION ALL
    SELECT 424,'endprocess_rxincorect' UNION ALL
    SELECT 168,'number-of-cvdpv-and-wpv-cases' UNION ALL
    SELECT 158,'inaccessible-children-reported-in-the-district-during-the-campaign' UNION ALL
    SELECT 187,'percent-of-refusals-resolved-during-the-previous-month-both-during-campaigns-and-in-between-rounds' UNION ALL
    SELECT 434,'reason-for-inaccessible-children-perception-of-fear' UNION ALL
    SELECT 435,'reason-for-inaccessible-children-local-community-not-supportive' UNION ALL
    SELECT 436,'reason-for-inaccessible-children-crime' UNION ALL
    SELECT 437,'reason-for-inaccessible-children-militant-anti-govt-elements' UNION ALL
    SELECT 438,'reason-for-inaccessible-children-security-operations-incidents' UNION ALL
    SELECT 439,'reason-for-inaccessible-children-management-issues' UNION ALL
    SELECT 440,'reason-for-inaccessible-children-environment-issues' UNION ALL
    SELECT 441,'reason-for-inaccessible-children-political-issues' UNION ALL
    SELECT 442,'reason-for-inaccessible-children-perception-of-fear-2' UNION ALL
    SELECT 443,'reason-for-inaccessible-children-local-community-not-supportive-2' UNION ALL
    SELECT 444,'reason-for-inaccessible-children-crime-2' UNION ALL
    SELECT 445,'reason-for-inaccessible-children-militant-anti-govt-elements-2' UNION ALL
    SELECT 446,'reason-for-inaccessible-children-security-operations-incidents-2' UNION ALL
    SELECT 447,'reason-for-inaccessible-children-management-issues-2' UNION ALL
    SELECT 448,'reason-for-inaccessible-children-environment-issues-2' UNION ALL
    SELECT 449,'reason-for-inaccessible-children-political-issues-2' UNION ALL
    SELECT 451,'reason-for-inaccessible-children-no-reason-provided' UNION ALL
    SELECT 450,'reason-for-inaccessible-children-no-reason' UNION ALL
    SELECT 431,'non-polio-afp-cases-with-zero-doses-of-opv' UNION ALL
    SELECT 432,'non-polio-afp-cases-with-1-3-doses-of-opv' UNION ALL
    SELECT 433,'non-polio-afp-cases-with-4-doses-of-opv' UNION ALL
    SELECT 294,'endprocess_percent-vaccination-influencer-is-vaccinator' UNION ALL
    SELECT 257,'endprocess_noimmreas13-there-are-other-remedies-available' UNION ALL
    SELECT 326,'endprocess_pct-of-children-absent-due-to-child-at-farm' UNION ALL
    SELECT 255,'endprocess_noimmreas11-polio-is-rare' UNION ALL
    SELECT 233,'pct-of-unicef-polio-positions-in-place-at-national-state-province-level' UNION ALL
    SELECT 245,'percent-of-children-12-months-and-under-in-hrds-who-have-received-dpt3-or-penta3';

    -- update existing --

    UPDATE source_object_map som
    SET master_object_id = tmp.indicator_id
    FROM _tmp_indicator_map tmp
    WHERE content_type = 'indicator'
    AND som.source_object_code = tmp.indicator_slug;

    -- insert new --

    INSERT INTO source_object_map
    (mapped_by_id, content_type, source_object_code, master_object_id)

    SELECT
        1 --fixme and join to user
        ,'indicator'
        ,indicator_slug
        ,indicator_id
    FROM _tmp_indicator_map tim
    WHERE NOT EXISTS (
        SELECT 1 FROM source_object_map som
        WHERE tim.indicator_slug = som.source_object_code
    );

    -- attribute to document --

    INSERT INTO document_to_source_object_map
    (document_id, source_object_map_id)
    SELECT
        sdd.id
        ,som.id
    FROM source_object_map som
    INNER JOIN _tmp_indicator_map tim
    ON tim.indicator_slug = som.source_object_code
    INNER JOIN source_data_document sdd
    ON sdd.guid = 'initialize-db'
    WHERE NOT EXISTS (
        SELECT 1 FROM document_to_source_object_map d
        WHERE d.source_object_map_id = som.id
        AND d.document_id = sdd.id
    );
    """)
    ]
