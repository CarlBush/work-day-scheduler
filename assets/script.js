var currentHour = moment().format("HH");
var hour =[12,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

//1st attempt fail var hour =["12AM", "1AM", "2AM", "3AM", "4AM","5AM", "6AM", "7AM","8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

//display title current date
document.getElementById("currentDay").textContent = moment().format("dddd, MMMM Do, YYYY")

$(document).ready(function (){
for (var i = 7; i < hour.length; i++){
    //MAIN CONTAINER THAT WILL MERGE THE OTHER THREE CONTAINERS
    var combineThreeContainer = $("<div>").addClass("time-block row");

    //HOUR CONTAINER (1ST COLUMN)
    var timeContainer = $("<div>").addClass("hour col-1");
    timeContainer.text(hour[i] + ":00");
    
    //DESCRIPTION CONTAINER TEXT-AREA (2ND COLUMN)
    var descriptionContainer = $("<textarea>").addClass("description col-10 align-items-center");;
    descriptionContainer.attr("id", "description" + [i]);

    //SAVE CONTAINER (3RD COLUMN)
    var saveIcon =$("<i>").addClass("fas fa-save").attr("id", "save");
    var saveContainer = $("<div>").addClass("saveBtn col-1 align-items-center");
    saveContainer.attr("id", [i]);
    saveContainer.append(saveIcon);

    //CONDITIONAL FORMATTING
    if(currentHour == hour[i]){
        descriptionContainer.addClass("present")
    }
    else if(currentHour > hour[i]){
        descriptionContainer.addClass("past")
    }
    else{
        descriptionContainer.addClass("future")
    };

    //APPENDING THE THREE CONTAINERS TO MAIN CONTAINER THEN TO CLASS .container
    $(combineThreeContainer).append(timeContainer, descriptionContainer, saveContainer);
    $(".container").append(combineThreeContainer);
};
});




$(document).ready(function(){
    $(".saveBtn").on("click", function() {
        var descriptionTextAreaId = "#description" + (this.id);
        var descriptionInput = document.querySelector(descriptionTextAreaId);
        localStorage.setItem(descriptionTextAreaId, descriptionInput.value);
        console.log(descriptionTextAreaId);
        console.log(descriptionInput);
    });
});

