'use strict';

var _  = require('lodash');
var d3 = require('d3');

function _inherit (d) { return [d]; }

function qualitativeAxis () {
	var _colors    = ['#B3B3B3', '#E6E6E6'];
	var _height    = 0;
	var _scale     = d3.scale.linear()
	var _threshold = d3.scale.threshold();

	function axis(selection) {
		selection.each(function () {
			var n = d3.range(_threshold.range().length);

			var fill = _.flow(
				d3.scale.ordinal()
					.domain(_threshold.range())
					.range(n),
				d3.scale.linear()
					.domain(d3.extent(n))
					.range(_colors)
			);

			var tick = d3.select(this).selectAll('.tick')
				.data(_threshold.range());

			tick.enter()
				.append('g')
				.attr('class', 'tick');

			tick.exit().remove();

			tick.attr('transform', function (d) {
				var range = _threshold.invertExtent(d);
				var x     = _.isFinite(range[0]) ? range[0] : _scale.domain()[0];

				return 'translate(' + _scale(x) + ',0)';
			});

			var rect = tick.selectAll('rect').data(_inherit);

			rect.enter().append('rect');

			rect.attr({
				'width'  : function (d) {
					var domain = _scale.domain();
					var range  = _threshold.invertExtent(d);
					var lower  = _.isFinite(range[0]) ? range[0] : domain[0];
					var upper  = _.isFinite(range[1]) ? range[1] : domain[1];

					return _scale(upper) - _scale(lower);
				},
				'height' : _height,
				'fill'   : fill
			});

			var label = tick.selectAll('text').data(_inherit);

			label.enter().append('text');

			label.attr({
					'dx'        : '2',
					'transform' : 'translate(0, ' + _height + ')'
				})
				.text(String);
		});
	}

	axis.colors = function (colors) {
		if (!arguments.length) {
			return _colors;
		}

		_colors = colors;
		return axis;
	};

	axis.height = function (height) {
		if (!arguments.length) {
			return _height;
		}

		_height = height;
		return axis;
	};

	axis.scale = function (scale) {
		if (!arguments.length) {
			return _scale;
		}

		_scale = scale;
		return axis;
	};

	axis.threshold = function (threshold) {
		if (!arguments.length) {
			return _threshold;
		}

		_threshold = threshold;
		return axis;
	};

	return axis;
}

module.exports = qualitativeAxis;
