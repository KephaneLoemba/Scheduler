$(document).ready(function(){


    
    
    
    //Let's create some arrays, containing ou different timeslots/key names.
    let timeSlots = ['9AM', '10AM','11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']



    //Add current date and time, "using moment.js" .
    let theDate = moment().format('MMMM Do YYYY');

    $('#currentDay').text(theDate)
    
    
    
    for (i = 0; i < timeSlots.length; i++) {

        let hour = 9;
        
        let newRow = $('<div>');
        newRow.addClass('row plannerRow');
        newRow.text(timeSlots[i]);
        newRow.attr('hour-index', hour);
        

        let timeCol = $('<div>');
        timeCol.addClass('col-md-2');

        let timeColContent = $('<p>');

        timeColContent.attr('placeholder', 'Nothing planned yet, for this hour.');
        timeColContent.html(timeSlots[i]);

        timeCol.append(timeColContent)

        let inputCol = $('<div>');
        inputCol.addClass('col-md-8');

        let inputColContent = $('<input>');
        inputColContent.attr('type', 'text');
        inputCol.append(inputColContent);

        let saveCol = $('<div>')
        saveCol.addClass('col-md-2')

        let saveBtn = $('<button>')
        saveBtn.attr('save-index', hour)
        let saveIcon = $('<i>')
        saveIcon.addClass('far fa-save')
        saveBtn.append(saveIcon)
        saveCol.append(saveBtn)

        $('div#bigContainer').append(newRow);
        newRow.append(timeCol);
        newRow.append(inputCol);

        hour++;


    }

    //End of code!
})