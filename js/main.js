$(document).ready(function () {
    $("#mw-count").on("click", function () {
        $('.progress').each(function () {
            var a = $(this).text();
            var b = $(this).parent().parent().last().find(".progress_main").css({ "width": a });
        })
    })

    $(".fa-pause").on("click", function () {
        EndCallback();
        responsiveVoice.speak("", "UK English Male", { onstart: StartCallback, onend: EndCallback });
    })

    $(".fa-play").on("click", function () {
        $(".fa-play").css({"display":"none"})
        $(".fa-pause").css({"display":"inline-block"})
            responsiveVoice.setDefaultVoice("US English Male");
            responsiveVoice.speak("I can handle uninterrupted", "UK English Male", { onstart: StartCallback, onend: EndCallback });

    });

    function StartCallback() {}

    function EndCallback() {
        $(".fa-play").css({"display":"inline-block"})
        $(".fa-pause").css({"display":"none"})
    }
});