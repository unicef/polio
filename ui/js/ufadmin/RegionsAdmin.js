var React = require('react/addons');
var _ = require('lodash');
var {
	Datascope, LocalDatascope,
	SimpleDataTable, SimpleDataTableColumn,
	Paginator,
	SearchBar,
	FilterPanel, FilterDateRange, FilterInputRadio
	} = require('react-datascope');

var API = require('../data/api');

var AdminPage = require('./AdminPage');

const checkmarkRenderer = (val) => val ? "✓" : "";
const fields = {
	edit_link: {
		title: 'Edit',
		key: 'id',
		renderer: (id) => {
			return <a href={`/datapoints/regions/update/${id}`}>Edit Region</a>;
		}
	},
	created_at: { format: 'MMM D YYYY, h:mm a' },
	is_high_risk: { renderer: checkmarkRenderer }
};

const fieldNamesOnTable = ['id', 'region_code', 'name', 'slug', 'latitude', 'longitude', 'edit_link'];

var RegionsAdmin = React.createClass({
	render() {
		var datascopeFilters =
			<div>
				<SearchBar placeholder="search regions"/>
			</div>;

		return <AdminPage
			title="Regions"
			getMetadata={API.admin.regionsMetadata}
			getData={API.admin.regions}
			datascopeFilters={datascopeFilters}
			fields={fields}
			>
				<Paginator />
				<SimpleDataTable>
					{fieldNamesOnTable.map(fieldName => {
						return <SimpleDataTableColumn name={fieldName} />
					})}
				</SimpleDataTable>
		</AdminPage>
	}
});


module.exports = RegionsAdmin;
