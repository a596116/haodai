/*
	Kwicks for jQuery (version 1.5.1)
	Copyright (c) 2008 Jeremy Martin
	http://www.jeremymartin.name/projects.php?project=kwicks
	
	Licensed under the MIT license:
		http://www.opensource.org/licenses/mit-license.php

	Any and all use of this script must be accompanied by this copyright/license notice in its present form.
*/

(function($) {
	$.fn.kwicks = function(n) {
		var p1 = {
			isVertical: false,
			sticky: false,
			defaultKwick: 0,
			event: 'mouseover',
			spacing: 0,
			duration: 500
		};
		var o1 = $.extend(p1, n);
		var q1 = (o1.isVertical ? 'height' : 'width');
		var r1 = (o1.isVertical ? 'top' : 'left');
		return this.each(function() {
			container1 = $(this);
			var k1 = container1.children('li');
			var l1 = k1.eq(0).css(q1).replace(/px/, '');
			if (!o1.max) {
				o1.max = (l1 * k1.size()) - (o1.min * (k1.size() - 1))
			} else {
				o1.min = ((l1 * k1.size()) - o1.max) / (k1.size() - 1)
			}
			if (o1.isVertical) {
				container1.css({
					width: k1.eq(0).css('width'),
					height: (l1 * k1.size()) + (o1.spacing * (k1.size() - 1)) + 'px'
				})
			} else {
				container1.css({
					width: (l1 * k1.size()) + (o1.spacing * (k1.size() - 1)) + 'px',
					height: k1.eq(0).css('height')
				})
			}
			var m1 = [];
			for (i = 0; i < k1.size(); i++) {
				m1[i] = [];
				for (j = 1; j < k1.size() - 1; j++) {
					if (i == j) {
						m1[i][j] = o1.isVertical ? j * o1.min + (j * o1.spacing) : j * o1.min + (j * o1.spacing)
					} else {
						m1[i][j] = (j <= i ? (j * o1.min) : (j - 1) * o1.min + o1.max) + (j * o1.spacing)
					}
				}
			}
			k1.each(function(i) {
				var h1 = $(this);
				if (i === 0) {
					h1.css(r1, '0px')
				} else if (i == k1.size() - 1) {
					h1.css(o1.isVertical ? 'bottom' : 'right', '0px')
				} else {
					if (o1.sticky) {
						h1.css(r1, m1[o1.defaultKwick][i])
					} else {
						h1.css(r1, (i * l1) + (i * o1.spacing))
					}
				}
				if (o1.sticky) {
					if (o1.defaultKwick == i) {
						h1.css(q1, o1.max + 'px');
						h1.addClass('active')
					} else {
						h1.css(q1, o1.min + 'px')
					}
				}
				h1.css({
					margin: 0,
					position: 'absolute'
				});
				h1.bind(o1.event, function() {
					var c1 = [];
					var d1 = [];
					k1.stop().removeClass('active');
					for (j = 0; j < k1.size(); j++) {
						c1[j] = k1.eq(j).css(q1).replace(/px/, '');
						d1[j] = k1.eq(j).css(r1).replace(/px/, '')
					}
					var e1 = {};
					e1[q1] = o1.max;
					var f1 = o1.max - c1[i];
					var g1 = c1[i] / f1;
					h1.addClass('active').animate(e1, {
						step: function(a) {
							var b1 = f1 != 0 ? a / f1 - g1 : 1;
							k1.each(function(j) {
								if (j != i) {
									k1.eq(j).css(q1, c1[j] - ((c1[j] - o1.min) * b1) + 'px')
								}
								if (j > 0 && j < k1.size() - 1) {
									k1.eq(j).css(r1, d1[j] - ((d1[j] - m1[i][j]) * b1) + 'px')
								}
							})
						},
						duration: o1.duration,
						easing: o1.easing
					})
				})
			});
			if (!o1.sticky) {
				container1.bind("mouseleave", function() {
					var c1 = [];
					var d1 = [];
					k1.removeClass('active').stop();
					for (i = 0; i < k1.size(); i++) {
						c1[i] = k1.eq(i).css(q1).replace(/px/, '');
						d1[i] = k1.eq(i).css(r1).replace(/px/, '')
					}
					var e1 = {};
					e1[q1] = l1;
					var f1 = l1 - c1[0];
					k1.eq(0).animate(e1, {
						step: function(a) {
							var b1 = f1 != 0 ? (a - c1[0]) / f1 : 1;
							for (i = 1; i < k1.size(); i++) {
								k1.eq(i).css(q1, c1[i] - ((c1[i] - l1) * b1) + 'px');
								if (i < k1.size() - 1) {
									k1.eq(i).css(r1, d1[i] - ((d1[i] - ((i * l1) + (i * o1.spacing))) * b1) + 'px')
								}
							}
						},
						duration: o1.duration,
						easing: o1.easing
					})
				})
			}
		})
	}
})(jQuery);
