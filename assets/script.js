var hour;

// when page loads set time on the header, updating every second
$(document).ready(function (){
    $("#date").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));
    setInterval(function(){
        $("#date").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));
        // variable updates to determine the color of the calendar
        hour = moment().format("H");
        // compare the current hour with the id of the input tab
        // change classes: past, present, future

        if ($("input").attr("id") < hour) {
            $("input").attr("class", "border form-control-lg todo bg-secondary");
        } 
        else if ($("input").attr("id") === hour) {
            $(input).attr("class", "border form-control-lg todo bg-danger");
        }
        else if ($("input").attr("id") > hour) {
            $("input").attr("class", "border form-control-lg todo bg-success");
        }
    }, 1000);
})



$(".submit").on("click", function () {
    event.preventDefault();

    // !!! THIS IS NOT WORKING !!!
    // no matter where I click it only registers the id of the first row
    console.log($("input").attr("id"));


    var task = JSON.parse(localStorage.getItem("task"));
    var time = JSON.parse(localStorage.getItem("time"));

    console.log(task);

    // if nothing has been recorded yet, then store the values
    // for the current input
    if (task === null) {
        time = [{
            time: $(this).parent().attr("value"),
        }];
        task = [{
            todo: $(".todo").val()
        }];
        
        localStorage.setItem("task", JSON.stringify(task));
        localStorage.setItem("time", JSON.stringify(time));
    }

    // if there is previously stored data, push the new data
    else {
        var newTask = [{
            todo: $(".todo").val()
        }];
        var newTime = [{
            time: $(this).parent().attr("value"),
        }];

        time.push(newTime);
        console.log(time);
        task.push(newTask);
        console.log(task);

        localStorage.setItem("task", JSON.stringify(task));
        localStorage.setItem("time", JSON.stringify(time));
    }


    // // --- THIS IS NOT WORKING ---
    // WILL NOT PUSH AN OBJECT WITH MORE THAN ONE PROPERTY BUT 
    // WILL PUSH AN ARRAY WITH ONE PROPERTY

    // var task = JSON.parse(localStorage.getItem("tasks"));

    //     console.log(task);

    //     if (task === null) {
    //         task = [{
    //             time: $(this).parent().attr("value"),
    //             todo: $(".todo").val()
    //         }];
    //         localStorage.setItem("tasks", JSON.stringify(task));
    //     }

    //     else {
    //     var newTask = [{
    //         time: $(this).parent().attr("value"),
    //         todo: $(".todo").val()
    //     }];

    //     console.log(JSON.stringify(task));
    //     console.log(newTask);
    //     console.log(task);

    //     task.push(newTask);
})

// localStorage.clear()