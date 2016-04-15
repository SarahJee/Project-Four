


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



	
	
	
	
	
//Set up the cache object	
	
(function() {
	var $imgs = $('ul#imageGallery li a img'); //Get the images
	var $search = $('#search'); //Get the input element - the search input
	var cache = []; //Create a cache array

 $imgs.each(function() {  //Loop though each image in $ imgs using .each() to run an anonymous funciton on each one. 
	 cache.push({		 //Add an object to the cashe array with push()
		 element: this,	 // This image - objects element proprety holds ref to the img element
		 text: this.title.trim().toLowerCase() //Its title text - text property hold titlety text - remove spaces and change case. 
	 });
 });

 function filter() { //Declare the filter() function 
	 var query = this.value.trim().toLowerCase(); //Store the search text in a variable called query
	 
	 cache.forEach(function(cacheItem) {  //Loop though each object in cache array and call same anonymous function on each. 
		 var index = 0;  //set index variable to 0
		 if (query) {	//if query has a value - some text
			 index = cacheItem.text.indexOf(query);   //Use indexOf to check if search term is in text property of this object. Store a positive number if found or -1 if not found. 
			 }
			 
			 cacheItem.element.style.display = index === -1 ? 'none' : ''; //if index is -1, set display property of img to none, otherwise set display to blank string. 
		 });
	 }
	 
	 if('oninput' in $search[0])  { //Check if browser supports input event
		 $search.on('input', filter); //If so, call filter() func when it fires on the search box
		 } else {
		
		 $search.on('keyup', filter);  //Use keyup event to call filter (use input event to trigger it)
 }
 
}());


//Capture user text input 

//Check to see if entered text matches any of titles 
	//Loop through each list item(img) 
	//Check to see if entered text matches
	
	//If it matches - do nothing
	
	//If it doesn't match - hide image (JQuery)