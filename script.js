$(document).ready(function(){


    
    
    
    //Let's create some arrays, containing ou different timeslots/key names.
    let timeSlots = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM',]
    
    
    timeSlots.forEach(function(time) {
        
        let time = $('<>')
        
        letterBtn.addClass('row letter letter-button-color')
        
        // 4. Then give each "letterBtn" a data-attribute called "data-letter".
        letterBtn.attr('data-letter', letters[i])
        // 5. Then give each "letterBtns" a text equal to "letters[i]".
        letterBtn.text(letters[i])
        // <button class="letter-button letter letter-button-color" data-letter="A">A</button>
        
        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $('#buttons').append(letterBtn)
    })

    //End of code!
})