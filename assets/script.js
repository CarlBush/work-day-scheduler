var currentHour = moment().format("HH");
var hour =[12,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

//1st attempt fail var hour =["12AM", "1AM", "2AM", "3AM", "4AM","5AM", "6AM", "7AM","8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

//display title current date
document.getElementById("currentDay").textContent = moment().format("dddd, MMMM Do, YYYY")

$(document).ready(function (){
for (var i = 7; i < hour.length; i++){
    var combineThreeContainer = $("<div>").addClass("time-block row");

    //HOUR CONTAINER (1ST COLUMN)
    var timeContainer = $("<div>").addClass("hour col-1");
    timeContainer.text(hour[i] + ":00");
    
    //DESCRIPTION CONTAINER (2ND MAIN-COLUMN)
    var taskContainer = $("<div>").addClass("description col-10");

    //DESCRIPTION TEXT-AREA CONTAINER (2ND SUB-COLUMN)
    var descriptionContainer = $("<textarea>");
    descriptionContainer.attr("id", [i]);
    descriptionContainer.text('MEOOOOOOOOOOOOOOOOOOOOOOOOW');
    taskContainer.append(descriptionContainer);

    //SAVE CONTAINER (3RD COLUMN)
    var saveIcon =$("<i>").addClass("fas fa-save");
    var saveContainer = $("<div>").addClass("saveBtn col-1");
    saveContainer.attr("id", [i]);
    saveContainer.append(saveIcon);

    //CONDITIONAL FORMATTING
    if(currentHour == hour[i]){
        descriptionContainer.addClass("present")
        console.log(hour[i]);
        console.log(currentHour);
    }
    else if(currentHour > hour[i]){
        descriptionContainer.addClass("past")
        console.log(hour[i]);
        console.log(currentHour);
    }
    else{
        descriptionContainer.addClass("future")
        console.log(hour[i]);
        console.log(currentHour);
    }
    ;


    $(combineThreeContainer).append(timeContainer, taskContainer, saveContainer);
    $(".container").append(combineThreeContainer);
    

};
console.log(currentHour);
});