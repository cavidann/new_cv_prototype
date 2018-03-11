$(document).ready(function () {
    $("#mw-count").on("click", function () {
        $('.progress').each(function () {
            var a = $(this).text();
            var b = $(this).parent().parent().last().find(".progress_main").css({ "width": a });
        })
        console.log("1")
    })

});