(function () {
    'use strict';
    function showControls() {
        var bar = document.querySelector(".ytp-progress-bar");
        var controls = document.querySelector(".ytp-chrome-controls");
        var top = document.querySelector(".ytp-chrome-top");
        var bottom = document.querySelector(".ytp-chrome-bottom");
        var gradient = document.querySelector(".ytp-gradient-bottom");
        var gradient1 = document.querySelector(".ytp-gradient-top");
        var title = document.querySelector(".ytp-title-channel");
        var title1 = document.querySelector(".ytp-title");

        var icon = document.querySelector(".ytp-watch-later-icon");
        var iconText = document.querySelector(".ytp-watch-later-title");
        var icon2 = document.querySelector(".ytp-cards-button-icon");
        var icon2Text = document.querySelector(".ytp-cards-button-title");
        var icon3 = document.querySelector(".ytp-playlist-menu-button-icon");
        var icon3Text = document.querySelector(".ytp-playlist-menu-button-text");
        var icon4 = document.querySelector(".branding-img");
        var gradientHeight = gradient.style.height;
        if (bar.style.display === "none" && controls.style.display === "none") {
            bar.style.display = "block";
            controls.style.display = "block";
            top.style.display = "block";
            gradient.style.height = "0px";
            gradient1.style.height = "0px";
            gradient.style.display = "block";
            gradient1.style.display = "block";
            bottom.style.display = "block";
            title.style.display = "block";
            title1.style.display = "block";

            icon.style.display = "block";
            iconText.style.display = "block";
            icon2.style.display = "block";
            icon2Text.style.display = "block";
            icon3.style.display = "block";
            icon3Text.style.display = "block";
            icon4.style.display = "block";

        } else {
            bar.style.display = "none";
            controls.style.display = "none";
            top.style.display = "none";
            gradient.style.height = gradientHeight;
            gradient1.style.height = gradientHeight;
            gradient.style.display = "none";
            gradient1.style.display = "none";
            bottom.style.display = "none";
            title.style.display = "none";
            title1.style.display = "none";

            icon.style.display = "none";
            iconText.style.display = "none";
            icon2.style.display = "none";
            icon2Text.style.display = "none";
            icon3.style.display = "none";
            icon3Text.style.display = "none";
            icon4.style.display = "none";
        }
    }
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 83) {
            showControls()
        }
    });
})();