


//Create an overlay (Lightbox) (Use $ to show $overlay is a jQuery Object)
var $overlay = $('<div id="overlay"></div>');
//Add the large image to the overlay
var $image = $('<img>');
//Add catopion to the overlay
var $caption = $('<p></p>');

// Add image to overlay
$overlay.append($image);
//Add caption to overlay
$overlay.append($caption);
//Add overlay
$('body').append($overlay);
//Add caption

// Capture the click event on a link to an image 
$('#imageGallery a').click(function(event) {
	event.preventDefault();//prevent click opening image
	var imagehref = $(this).attr('href');
	//Update the overlay with the larger image
	$image.attr("src", imagehref);
	
	//Show the overlay
	$overlay.show();
	
	//Update the overlay with the larger image
	//Get alt attr to set caption. 
	   //Get child's alt tag and set as caption
	var captionText = $(this).children("img").attr("title");
  $caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
//Hide overlay	
	$overlay.hide();
});

//Capture user text input 

//Check to see if entered text matches any of titles 
	//Loop through each list item(img) 
	//Check to see if entered text matches
	
	//If it matches - do nothing
	
	//If it doesn't match - hide image (JQuery)