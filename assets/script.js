var hour;
var inputEl = $('input')
var inputArr = Array.from(inputEl);
console.log(inputArr.length);
console.log(inputArr[1].id);

// when page loads set time on the header, updating every second
$(document).ready(function () {
    $("#date").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));
    setInterval(function () {
        $("#date").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));
        // variable updates to determine the color of the calendar
        hour = moment().format("H");
        var realHour = parseInt(hour) - 9;
        console.log(realHour);
        
        // compare the current hour with the id of the input tab
        // change classes: past, present, future
        for (var i = 0; i < inputArr.length; i++) {
            var el = $(`#${i}`)

             console.log(el[0].id)
             hourId = parseInt(el[0].id)
             console.log(hourId);
             console.log(realHour);

            if (hourId < realHour) {
                el.attr("class", "border form-control-lg todo bg-secondary");
                console.log("running grey");
            }

            else if (hourId === realHour) {
                el.attr("class", "border form-control-lg todo bg-danger");
                console.log("running red");
            }

            else if (hourId > realHour) {
                el.attr("class", "border form-control-lg todo bg-success");
                console.log("running green");

            }
        }

    }, 1000);
})



$(".submit").on("click", function () {
    event.preventDefault();

    // !!! THIS IS NOT WORKING !!!
    // no matter where I click it only registers the id of the first row
    console.log($("input").attr("id"));


    // var task = JSON.parse(localStorage.getItem("task"));
    // var time = JSON.parse(localStorage.getItem("time"));

    // console.log(task);

    // if nothing has been recorded yet, then store the values
    // for the current input
    // if (task === null) {
    //     time = [{
    //         time: $(this).parent().attr("value"),
    //     }];
    //     task = [{
    //         todo: $(".todo").val()
    //     }];

    //     localStorage.setItem("task", JSON.stringify(task));
    //     localStorage.setItem("time", JSON.stringify(time));
    // }

    // // if there is previously stored data, push the new data
    // else {
    //     var newTask = [{
    //         todo: $(".todo").val()
    //     }];
    //     var newTime = [{
    //         time: $(this).parent().attr("value"),
    //     }];

    //     time.push(newTime);
    //     console.log(time);
    //     task.push(newTask);
    //     console.log(task);

    //     localStorage.setItem("task", JSON.stringify(task));
    //     localStorage.setItem("time", JSON.stringify(time));
    // }


    // // --- THIS IS NOT WORKING ---
    // WILL NOT PUSH AN OBJECT WITH MORE THAN ONE PROPERTY BUT 
    // WILL PUSH AN ARRAY WITH ONE PROPERTY

    var task = JSON.parse(localStorage.getItem("tasks"));
    console.log(task);

    var tasks = []
    console.log(tasks);

    if (task === null) {
        task = {
            time: $(this).parent().attr("value"),
            todo: $(".todo").val()
        };
        localStorage.setItem("tasks", JSON.stringify(task));
    }

    else {
        var newTask = {
            time: $(this).parent().attr("value"),
            todo: $(".todo").val()
        };
    }
    console.log(JSON.stringify(task));
    console.log(task);
    console.log(newTask);

    tasks.push(newTask);
    console.log(tasks);
})

// localStorage.clear()