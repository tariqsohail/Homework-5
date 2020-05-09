

var today = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(today);


var timeBlock = $(".time-block");
timeBlock.each(function(){
    var currentTime = moment().hours();
    var blockTime = $(this).data("time");
    //console.log(blockTime);
    var eventColor = $(this).siblings("textarea");
    //console.log(eventColor);
    if (blockTime < currentTime) {
        eventColor.css('background-color', 'grey');
    }
    else if (blockTime > currentTime) {
        eventColor.css('background-color', 'green')
    }
    else {
        eventColor.css('background-color', 'red')
    }

});




$(document).ready(function(){
    for (i = 1; i <= 12; i++) {
        var hour = i.toString();
        $("#" + hour).text(JSON.parse(localStorage.getItem(hour)));
    }
});



$(".save-btn").on("click", function () {
    var block = $(this).siblings("textarea").attr("id");
    var entry = $(this).siblings("textarea").val();


    localStorage.setItem(block, JSON.stringify(entry));
});













