$(document).ready(function () {
    

    
    let firstClick = true;

    $(".btn-add-to-cart").click(function () {
        let message= $('.message');
        let quantity = $('#input-value').val();

        if (firstClick) {
            // First click: Wait for 2 seconds before showing the message
            setTimeout(function () {
                message.html(`You just added ${quantity} it to the cart`).fadeIn(2000, function () {
                    // This function will be called after the fadeIn is complete
                    message.fadeOut(5000); // Fade out after 5000 milliseconds (5 seconds)
                });
            }, 500); // Wait for 500 milliseconds (0.5 seconds)
            
            firstClick = false; // Set the flag to false after the first click
        } else {
            message.html(`You just added ${quantity} to the cart`).fadeIn(1000, function () {
                // This function will be called after the fadeIn is complete
                message.fadeOut(4000); // Fade out after 4000 milliseconds (4 seconds)
            });
        }
    });

    $('#plus').click(function () { 
        let currentValue = parseInt($('#input-value').val());
        currentValue++;
        $('#input-value').val(currentValue);
    });

    $('#minus').click(function () { 
        let currentValue = parseInt($('#input-value').val());
        if (currentValue > 1) {
            currentValue--;
            $('#input-value').val(currentValue);
        }
    });
    
    
    


});