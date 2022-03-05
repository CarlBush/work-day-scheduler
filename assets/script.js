var currentHour = moment().format("HH");
var hour =["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
//display title current date
document.getElementById("currentDay").textContent = moment().format("dddd, MMMM Do, YYYY")




$(document).ready(function (){
for (var i = 8; i < 17; i++){
    var combineThreeContainer = $("<div>").addClass("time-block row");
    var timeContainer = $("<div>").addClass("hour");
    var taskContainer = $("<div>").addClass("description");
    var saveContainer = $("<div>").addClass("saveBtn");
    timeContainer.textContent = [i];
    console.log(timeContainer);

    $(combineThreeContainer).append(timeContainer, taskContainer, saveContainer);
    $("#main-container").append(combineThreeContainer);
    

};
console.log(currentHour);
});