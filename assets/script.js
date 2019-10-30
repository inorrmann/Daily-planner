var hour;
var inputEl = $('input')
var inputArr = Array.from(inputEl);

// when page loads set time on the header, updating every second
$(document).ready(function () {
    $("#date").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));
    setInterval(function () {
        $("#date").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));
        // variable updates to determine the color of the calendar, 24 hour format to facilitate comparison
        hour = moment().format("H");
        //modify hours so the value is comparable to the ids of the array (i.e., starts at 0 for 9am)
        var realHour = parseInt(hour) - 9;
        // console.log(realHour);

        // compare the current hour with the id of the input tab
        // change classes: past, present, future
        for (var i = 0; i < inputArr.length; i++) {
            // literal variable is created by selecting id that matches i
            var el = $(`#${i}`)
            // to avoid going through every variable in every iteration, only
            // index zero of variable el (array of all the inputs) is used, and 
            // hour is extracted to compare with the current time
            hourId = parseInt(el[0].id)

            // selects times that have already passed and turns input boxes grey
            if (hourId < realHour) {
                el.attr("class", "border form-control-lg todo bg-secondary");
            }
            // selects current time and turns input box red 
            else if (hourId === realHour) {
                el.attr("class", "border form-control-lg todo bg-danger");
            }
            // selects future times and turns input boxes green
            else if (hourId > realHour) {
                el.attr("class", "border form-control-lg todo bg-success");
            }
        }
    }, 1000);
})



$(".submit").on("click", function () {
    event.preventDefault();

    var task = JSON.parse(localStorage.getItem("task"));
    var time = JSON.parse(localStorage.getItem("time"));

    // if nothing has been recorded yet, then store the values
    // for the current input
    if (task === null) {
        time = [{
            // time is stored as the value of the event.target.parentElement
            time: $(this).parent().attr("value"),
        }];
        task = [{
            // task is stored as the value of the event.target.previousSibling
            todo: $(this).prev().val()
        }];

        localStorage.setItem("task", JSON.stringify(task));
        localStorage.setItem("time", JSON.stringify(time));
    }

    // if there is previously stored data, push the new data
    else {
        var newTask = {
            todo: $(this).prev().val()
        };
        var newTime = {
            time: $(this).parent().attr("value"),
        };

        time.push(newTime);
        console.log(time);
        task.push(newTask);
        console.log(task);

        localStorage.setItem("task", JSON.stringify(task));
        localStorage.setItem("time", JSON.stringify(time));
    }
})

// localStorage.clear()