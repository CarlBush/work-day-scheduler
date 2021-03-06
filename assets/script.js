var currentHour = moment().format("HH");
var hour =[12,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
var startTime = 9
var endTime = 17

//display title current date
document.getElementById("currentDay").textContent = moment().format("dddd, MMMM Do, YYYY")

$(document).ready(function (){
for (var i = startTime; i <= endTime; i++){
    //MAIN CONTAINER THAT WILL MERGE THE OTHER THREE CONTAINERS
    var combineThreeContainer = $("<div>").addClass("time-block row");

    //HOUR CONTAINER (1ST COLUMN)
    var timeContainer = $("<div>").addClass("hour col-1");
    timeContainer.text(hour[i] + ":00");
    
    //DESCRIPTION CONTAINER TEXT-AREA (2ND COLUMN)
    var descriptionContainer = $("<textarea>").addClass("description col-10");;
    descriptionContainer.attr("id", "description" + [i]);

    //SAVE CONTAINER (3RD COLUMN)   
    var saveIcon =$("<i>").addClass("fas fa-save").attr("id", "save");
    var saveContainer = $("<div>").addClass("saveBtn col-1");
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

    //APPENDING THE THREE CONTAINERS TO ONE CONTAINER THEN TO CLASS CONTAINER FROM HTML FILE
    $(combineThreeContainer).append(timeContainer, descriptionContainer, saveContainer);
    $(".container").append(combineThreeContainer);

    //LOAD LOCAL STORAGE PER LOOP
    $("#description"+ [i]).val(localStorage.getItem("#description"+ [i]));
};

    //ON CLICK SAVE <TEXT AREA> (THIS ID) TO LOCAL STORAGE
$(".saveBtn").on("click", function() {
    var descriptionTextAreaId = "#description" + (this.id);
    var descriptionInput = document.querySelector(descriptionTextAreaId);
    localStorage.setItem(descriptionTextAreaId, descriptionInput.value);
});
});