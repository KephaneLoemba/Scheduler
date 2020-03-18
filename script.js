$(document).ready(function(){


    
    
    
    //Let's create some arrays, containing ou different timeslots/key names.
    let timeSlots = ['9AM', '10AM','11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']



    //Add current date and time, "using moment.js". The time will update itself on the page once per second.
    function updateTime() {

        let theDate = moment().format('MMMM Do YYYY');
        $('#currentDay').html(theDate);

        let theTime = moment().format('LTS');
        $('#currentTime').html(theTime);

    }

    updateTime();
    setInterval( function() {
        updateTime()
    },1000);

    
    //Dynamically create all of the calendar's rows.

    for (i = 0; i < timeSlots.length; i++) {

        let hour = 9;
        
        let newRow = $('<div>');
        newRow.addClass('row plannerRow');
        newRow.attr('hour-index', hour);
        

        let timeCol = $('<div>');
        timeCol.addClass('col-md-1');

        let timeColContent = $('<p>');
        timeColContent.html(timeSlots[i]);

        timeCol.append(timeColContent)

        let inputCol = $('<div>');
        inputCol.addClass('col-md');

        let inputColContent = $('<textarea>');
        inputColContent.attr('placeholder', 'Nothing planned yet, for this hour.');
        inputCol.append(inputColContent);

        let saveCol = $('<div>')
        saveCol.addClass('col-md-1')

        let saveBtn = $('<button>');
        saveBtn.addClass('saveBtn far fa-save');
        saveBtn.attr('save-index', hour);
        saveCol.append(saveBtn);
       
        $('div#bigContainer').append(newRow);
        newRow.append(timeCol);
        newRow.append(inputCol);
        newRow.append(saveCol);

        hour++;


    }

    //End of code!
})