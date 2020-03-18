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
    let hour = 9;

    for (i = 0; i < timeSlots.length; i++) {

        
        let newRow = $('<div>');
        newRow.addClass('row plannerRow');
        
        let timeCol = $('<div>');
        timeCol.addClass('col-md-1');
        
        let timeColContent = $('<p>');
        timeColContent.html(timeSlots[i]);
        
        timeCol.append(timeColContent)
        
        let inputCol = $('<div>');
        inputCol.addClass('col-md row-colors');
        inputCol.attr('hour-index', hour);

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

    //Introduce the currentHour variable, using moment.js. this hour will be marked in the 24h format.

    let currentHour = moment().format('H');
    currentHour = parseInt(currentHour);

    
    //add code that dynamically chages the text area's CSS pase on what time it is. Run this every second.

    setInterval( function() {
        updateRowColor()
    },1000);

    function updateRowColor() {
        thisRow = $('.row-colors').toArray();
        console.log(thisRow)

        thisRow.forEach(function(timeSlot) {      
        
            
                hour = $(timeSlot).attr('hour-index');
                hour = parseInt(hour);

                console.log(typeof hour)
                console.log(typeof currentHour)

            if (hour < currentHour) {
                $(timeSlot).removeClass('present future').addClass('past');

            } else if (hour > currentHour) {
                $(timeSlot).removeClass('past present').addClass('future');

            } else {
                $(timeSlot).removeClass('past future').addClass('present');
            }
        })
    }


    //End of code!
})