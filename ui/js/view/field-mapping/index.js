'use strict';

var _ = require('lodash');
var api = require('../../data/api');
var Dropdown = require('../../component/dropdown');
var treeify = require('../../data/transform/treeify');

module.exports = {

	template: require('./template.html'),

	data: function () { 
			return {
			    //mapping data from the file import 
			    mappingData: require('./temp_data.js'),
			    //holds the vue master id dropdown components
			    dropdowns:{
			      indicators:[],
			      campaigns:[],
			      regions:[]
			    },
			    //holds arrays of master data for populating the master id dropdowns
			    masterData:{},
			    remainingVerifications:{
			      indicators:0,
			      campaigns:0,
			      regions:0
			    }
			   };
			},
			
	attached: function () {
			var self = this;
			//initialize dropdowns
			_.each(self.$data.mappingData,function(fieldArray,name){
			   	_.each(fieldArray,function(field,key){
			   	   self.$data.dropdowns[name][key] = new Dropdown({
			   	   		el : '#'+name+field.source_id
			   	   	}); 
			   	   	self.$data.dropdowns[name][key].loading = field.mapped;
			   	});
			});
		},
	ready: function() {
	   var self = this;
	   
	   var makeMap = function(data) {
	   	if (data.objects) {
	   		return _.indexBy(data.objects, 'id');
	   	} else {
	   		return null;
	   	}
	   };
	   
	   var connectChildren = function(map, parent_id_key, children_key) {
	   	_.forIn(map, function(d) {
	   		// obj has parent_id?
	   		if (d[parent_id_key] !== undefined && d[parent_id_key] !== null) {
	   			// parent found?
	   			if (map[d[parent_id_key]]) {
	   				var parent = map[d[parent_id_key]];
	   				if (!parent[children_key]) { parent[children_key] = []; }
	   				parent[children_key].push(d);
	   			}
	   		}
	   	});
	   	return map;
	   };
	   
	   //API calls for lists of all regions, indicators, and campaigns
	   Promise.all([
	   	api.regions()
	   		.then(makeMap).then(function(map) {
	   			// create array of children in each parent
	   			return connectChildren(map, 'parent_region_id', 'children');
	   		}),
	    api.indicators()
	        .then(makeMap),
	    api.campaign()
	        .then(makeMap)])
	        .then(function(allData) {
	        
	          self.$data.masterData.regions = allData[0];
	          self.$data.masterData.indicators = allData[1];
	          self.$data.masterData.campaigns = allData[2];
	          self.populateDropdowns();
	        
	        });
	},
	methods: { 
	  calculateRemainingVerifications:function(){
	    var self = this;
	    _.each(this.$data.dropdowns,function(dropdownSet,name){ 
	      self.$data.remainingVerifications[name]=0;
	      _.each(dropdownSet,function(dropdown){
	            if(!dropdown.hasSelection)
	            {
	               self.$data.remainingVerifications[name]++;
	            }
	       });
	     }); 
	  },
	  populateDropdowns: function(){
	       var self = this;
	        //set up master mapping data from api to be fed into the drop down selects
	        _.each(self.$data.masterData,function(data,name){
        		var	items = _.chain(data)
        							.map(function(d) {
        								if(name==='regions')
        								{
        								  return {
        									'parent': d.parent_region_id,
        									'title': d.name,
        									'value': d.id
        									};
        								} else {
        							      return {
        							      		'parent': null,
        							      		'title': d.slug,
        							      		'value': d.id
        							      	};	
        								}
        							})
        							.value();
	             
	              var itemTree = treeify(items, 'value');
	               //loop through dropdowns and populate them with the corresponding master id data sets
	           _.each(self.$data.dropdowns[name],function(dropdown,key){
	                    var mapDataItem = self.$data.mappingData[name][key];
	             	    self.$data.dropdowns[name][key].items = items; 
	             	    self.$data.dropdowns[name][key].itemTree = itemTree; 	
                        //if mapping data pulls back a mapped:true value from the api set the value of the dropdown to the master_id value
                        if (mapDataItem.mapped)
	             	    {
	             	       self.$data.dropdowns[name][key].select(mapDataItem.master_id);
	             	       self.$data.dropdowns[name][key].loading = false;
	             	    }  
	             	    self.$data.dropdowns[name][key].$on('dropdown-value-changed', function () {
	             	    	self.calculateRemainingVerifications();
	             	    });           	   
	             	});
	         });
	        self.calculateRemainingVerifications();
		} 
	},
	filters: {
	  fixVerificationPluralization: function(field,digit){
		  if(this[digit][field]===1){
		    return field.substring(0, field.length - 1) + ' needs';
		  }
		  else {
		  	return field + ' need';
		  }
	  }
	}
};