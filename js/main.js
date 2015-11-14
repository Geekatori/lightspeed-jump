(function() {

    var sky = 42; // Number of stars in the sky


    function starPosition(max, min) {
        return Math.floor(Math.random() * (max - min +1)) + min;
    }

    // Create sky
    for(i=0; i < sky; i++){
        // Create star coordinates
        var x1 = starPosition(0, 100); // Random x pos
        var y1 = starPosition(0, 100); // Random y pos
        var x2 = x1 + 0.05; // Create a fake dot = tiny line
        var y2 = y1 + 0.05;

        // Create SVG
        var  star = "<svg class='star'><line x1='"+ x1 +"%' y1='"+ y1 +"%' x2='"+ x2 +"%' y2='"+ y2 +"%' id='star"+ i +"' /></svg>";
        
        // Create DOM
        //document.getElementById('space').innerHTML = star;
        $('#space').append(star);
    };

    // Lightspeed jump when clicking on the button
    document.getElementById('jump').onclick=function(event){
        event.preventDefault();

        $('.star').each(function(){

            var frame = 0; // Init counter
            var line = $(this).find('line');

            function animateStar() {
                // Get X2 and Y2 position for each stars
                var posX2 = line.attr('x2'); 
                var posY2 = line.attr('y2');

                // Inc counter
                var frame = frame + 1;
                // Remove the % from the values
                // + adding a value to drawn a line
                var starX2 = +posX2.substr(0, posX2.length-1) + 1;
                var starY2 = +posY2.substr(0, posY2.length-1) + 1;

                // Set the new coordinates
                line.attr("x2", starX2 +"%").attr("y2", starY2 +"%");
            }

            if (frame++ <= 42)
                setTimeout(animateStar(), 200);

        });
    };
}());
