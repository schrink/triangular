/*!
 * Triangular.js
 * https://github.com/schrink/triangular
 *
 * Copyright 2015 Vladimir Lelicanin
 * Released under the MIT license
 *
 * Date: 2015-07-24T16:19Z
 */
(function ($) {
    $.fn.triangles = function (options) {
        var settings = $.extend({
            // These are the defaults.
            noOfTriangles: 200,
            offsetTrigger: "30%"
        }, options);

        for (var i = 0; i < settings.noOfTriangles; i++) {
            $('<div>').appendTo(this);
        }
        var $that = $(this);
        $that.addClass('triangular');

        $that.children('div').waypoint({
            handler: function (direction) {
                var index = $that.children('div').index(this.element);
                $('.active-odd, .active-even').removeClass('active-odd active-even');
                var classToAdd = (index % 2 == 1) ? "active-even" : "active-odd";
                $(this.element).addClass(classToAdd);
            },
            offset: settings.offsetTrigger
        });

    };

}(jQuery));
