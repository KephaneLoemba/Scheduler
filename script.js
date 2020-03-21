$(document).ready(function(){


    
    
    
    //Let's create some arrays, containing ou different timeslots/key names.
    let timeSlots = ['9AM', '10AM','11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']



    //Add current date and time, "using moment.js". 
    //The time will update itself on the page once per second.
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

    //Introduce the currentHour variable, using moment.js. 
    //This hour will be marked in the 24h format.
    let currentHour = moment().format('H');
    currentHour = parseInt(currentHour);

    
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
        inputColContent.attr('type-index', timeSlots[i]);
        inputCol.append(inputColContent);

        let saveCol = $('<div>')
        saveCol.addClass('col-md-1')

        let saveBtn = $('<button>');
        saveBtn.addClass('saveBtn far fa-save');
        saveBtn.attr('id', timeSlots[i]);
        saveCol.append(saveBtn);
       
        $('div#bigContainer').append(newRow);
        newRow.append(timeCol);
        newRow.append(inputCol);
        newRow.append(saveCol);
        
        updateRowColor();

        


        
        hour++;
        

    }

    //Add code that checks if items are in local storage.
    //If so, insert tose values to the corresponding text areas.
    $.each(localStorage, function(key, value) {  
        $("#" + key).parent().parent().find("textarea").val(value);
    })

    // when saved button is clicked, text from that row is saved to Locol storage.
    $(".saveBtn").click(function() {  
        let eventContent = $(this).parent().parent().find("textarea").val();  
        let eventTime = $(this).attr("id");  
        localStorage.setItem(eventTime, eventContent);
        console.log(localStorage);
    })

    // Add a CLEAR button that removes all items from text areas, and localStorage.
    $("#clear-button").click(function() {  
        localStorage.clear();  
        $("textarea").each(function() {    
            $(this).val("");  });
        })

    
    //add code that dynamically chages the text area's CSS pase on what time it is. Run this every 60 seconds.

    setInterval( function() {
        updateRowColor()
    },60000);

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