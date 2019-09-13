$( document ).ready(function() {


    // 
    // Card Hover
    // 

    $( ".tier-card" ).on( "mouseover", function() {
        $(this).children(".tier-card_blob").removeClass('return');
    });
    $( ".tier-card" ).on( "mouseleave", function() {
        $(this).children(".tier-card_blob").addClass('return')
    });

    // 
    // Scroll to Contact Form
    // 

    $("#contact-now").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    // 
    // Form Validation
    // 

    $( "#contact" ).submit(function( event ) {
        // alert( "Handler for .submit() called." );
        var name = $( "#fullName" ),
            email = $( "#email" ),
            phone = $( "#phoneNumber" ),
            msg = $( "#message" );

        if(name.val() === ''){

            name.addClass('is-danger');
            $( '#warning' ).text('Please fill out all fields');
            event.preventDefault();
        }else{
            name.removeClass('is-danger')
        }
        if(email.val() === ''){

            email.addClass('is-danger');
            $( '#warning' ).text('Please fill out all fields');
            event.preventDefault();
        }else{
            email.removeClass('is-danger')
        }
        if(msg.val() === ''){

            msg.addClass('is-danger');
            $( '#warning' ).text('Please fill out all fields');
            event.preventDefault();
        }else{
            msg.removeClass('is-danger')
        }

    });







});