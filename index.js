$(function () {
    var scroll;
    var sum;
    var appearScroll = 2000; // 〇が表示され始めるスクロール量

    $(window).scroll(function () {
        scroll = $(this).scrollTop();
        console.log("Scroll:", scroll);
        if (scroll > appearScroll) {
            // 表示＆拡大
            $(".circle").css({
                "opacity": "1",
                "transform": "scale(" + (1 + (scroll - appearScroll) / 50) + ")"
            });
        } else {
            // 非表示状態に戻す
            $(".circle").css({
                "opacity": "0",
                "transform": "scale(1)"
            });
        }
    });
});

// 画面内でスライド表示
$(function () {
    $(window).on("scroll", function () {
        $(".slide-up").each(function () {
            var target = $(this);
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            var targetTop = target.offset().top;

            // 画像が画面内に入ったら実行
            if (scroll > targetTop - windowHeight + 100) {
                target.addClass("visible");
            }
        });
    });
});


