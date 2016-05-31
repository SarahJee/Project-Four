

// Get the images
var $imgs = $('ul#imageGallery li a img');
// Add all images to an array  
var imgList = ('#imageGallery a');
// Store current image
var currentImg;

// Add function to prev/next arrows
function clickPrev(event) {
    event.stopPropagation();
    currentImg = currentImg.prev();
    showOverImg();
}

// Add function to prev/next arrows
function clickNext(event) {
    event.stopPropagation();
    currentImg = currentImg.next();
    showOverImg();
}


function showOverImg() {
        var imagehref = $(currentImg).find('a').attr('href');
        var caption = $(currentImg).find('img').attr('title');
        var video = $(currentImg).find('a').attr('data');
        
        if (imagehref === attr('href')) {
	     	//Update the overlay with larger image
		 	$("#overlay-img").attr("src", imagehref);
  			} else {
	  		//Update the overlay with larger video	
	  		$("#overlay-img").attr("src", video);
  			}

        //Add the caption
        $("#caption").text(caption);
        //Show the overlay
        $('#overlay').show();
    }
    
// Capture the click event on a link to an image 
$('#imageGallery a').click(function(event) {
    event.preventDefault(); //prevent click opening image
    currentImg = $(this).parent(); //make currentImg a jQuery object (so can appply .next/.prev etc
    showOverImg();
});


//When overlay is clicked
function hideOverlay() {
    //Hide overlay	
    $('#overlay').hide();
}

//=======================SEARCH FUNCTION=====================//	
//Set up the cache object	
(function() {
    var $search = $('#search'); //Get the input element - the search input
    var cache = []; //Create a cache array
    $imgs.each(function() { //Loop though each image in $ imgs using .each() to run an anonymous funciton on each one. 
        cache.push({ //Add an object to the cache array with push()
            element: this, // This image - objects element proprety holds ref to the img element
            text: this.title.trim().toLowerCase() //Its title text - text property hold title text - remove spaces and change case. 
        });
    });

    function filter() { //Declare the filter() function 
        var query = this.value.trim().toLowerCase(); //Store the search text in a variable called query
        cache.forEach(function(cacheItem) { //Loop though each object in cache array and call same anonymous function on each. 
            var index = 0; //set index variable to 0
            if (query) { //if query has a value - some text
                index = cacheItem.text.indexOf(query); //Use indexOf to check if search term is in text property of this object. Store a positive number if found or -1 if not found. 
            }
            
            var $image = $(cacheItem.element);// Make image a jQuery Object
            $image.parent().parent()[0].style.display = index === -1 ? // finding the li
                'none' : ''; //if index is -1, set display property of img to none, otherwise set display to blank string. 
        });
    }
    if ('oninput' in $search[0]) { //Check if browser supports input event
        $search.on('input', filter); //If so, call filter() func when it fires on the search box
    } else {
        $search.on('keyup', filter); //Use keyup event to call filter (use input event to trigger it)
    }
}());