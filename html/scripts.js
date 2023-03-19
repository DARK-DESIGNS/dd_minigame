$(document).ready(function() {
    $('.main').hide();

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.showUI === true) {
            $('.main').show();
        } else if (item.showUI === false) {
            $('.main').hide();
        } else if (item.indicator) {
            setIndicatorPos(item.indicator);
        } else if (item.setDifficulty) {
            setIndicator(item.setDifficulty);
        } else if (item.progress) {
            setProgress(item.progress)
        }
    });

    let progressCircle = document.querySelector(".progress");
    let radius = progressCircle.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;
    progressCircle.style.strokeDasharray = circumference;

    function setProgress(percent) {
        progressCircle.style.strokeDashoffset = circumference - (percent / 100) * circumference * -1;
    }

    let indicator = document.querySelector(".indicator");

    function setIndicator(percent) {
        indicator.style.strokeDashoffset = percent * (630 / 100) - 630;
    }

    function setIndicatorPos(pos) {
        indicator.style.transform = "rotate(" + pos + "deg)";
    }
});