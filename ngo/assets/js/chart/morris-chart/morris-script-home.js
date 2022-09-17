"use strict";
var morris_chart = {
    init: function() {

        $(function() {
            var e = 0,
                f = function(a) {
                    for (var b = [], c = 0; c <= 360; c += 10) {
                        var d = (a + c) % 360;
                        b.push({
                            x: c,
                            y: Math.sin(Math.PI * d / 180).toFixed(4),
                            z: Math.cos(Math.PI * d / 180).toFixed(4)
                        })
                    }
                    return b
                },
                g = Morris.Line({
                    element: 'updating-data-morris-chart',
                    data: f(0),
                    xkey: "x",
                    ykeys: ["y", "z"],
                    labels: ["sin()", "cos()"],
                    parseTime: !1,
                    ymin: -1,
                    ymax: 1,
                    hideHover: !0,
                    lineColors: [AdminConfig.primary, AdminConfig.secondary],
                }),
                h = function() {
                    e++, g.setData(f(5 * e)), $(".reloadStatus").text(e + " reloads")
                };
            setInterval(h, 100)
        }), $(function() {
            Morris.Bar({
                element: 'stacked-bar-chart',
                data: [{
                        x: "طلبات الانتساب",
                        a: 2,
                        b: 0,
                        c: 2,
                        d: 1,
                        e: 2,
                        f: 3
                    },
                    {
                        x: "طلبات التراخيص",
                        a: 1,
                        b: 2,
                        c: 0,
                        d: 0,
                        e: 2,
                        f: 4
                    },
                    {
                        x: "طلبات الاستعلام",
                        a: 0,
                        b: 1,
                        c: 2,
                        d: 3,
                        e: 2,
                        f: 0
                    },
                ],
                xkey: "x",
                ykeys: ["f", "e", "d", "c", "b", "a"],
                labels: ["تحت الدراسة", "غير مكتملة", "مرفوضة", "مشطوبة", "بإنتطار السداد", "مقبولة", ],
                barColors: ["#470866", "#661808", "#660854", "#0e9dbd", "#546608", "#086619"],
                stacked: !0
            });
        });
    }
};
(function($) {
    "use strict";
    morris_chart.init()
})(jQuery);