//Get the images
var $imgs = $('ul#imageGallery li a img'); 

//Create an overlay (Lightbox) (Use $ to show $overlay is a jQuery Object)
var $overlay = $('<div id="overlay"></div>');

//Get the large image to add to the overlay
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

/*=======================ADD NAVIGATION=====================//	
//https://teamtreehouse.com/community/how-to-create-a-navigation-arrows-to-jquery-basic-course-simple-lightbox
//Keep track of image index for prev/next
var $imgIndex = 0;

//Get the items from the gallery - add.length so it still works if more images are added
var $galleryLength = $('imageGallery li').length;


// Add some nav buttons and giv them IDs.
$overlay.children("div").append("<button id='btnPrev'> < </button>");
$overlay.children("div").append("<button id='btnNext'> > </button>");
*/


/*
var index = 0;

function prevNext(){

  var title = $('ul#imageGallery').children(index).attr('title');
  $imgs.attr('src',imgs);
  $overlay.show();
  $caption.text(title);
}
*/

$('.next').click(function(event) { //triggers when you click on 'next'
	getNextImage(); //call the function that captures information about the next image inline to be shown
	$image.show(); // unhide it
});

function getCurrentImage (currentImage) { //receive the image container that was clicked on
	thisImage = $(currentImage).children(); //identify the child of the image container i.e. the image itself 
	thisImageLocation = $(thisImage).attr("href"); //get the href and src of clicked img
	$image.attr("src", nextImageLocation); // update overlay info to clicked img
}

function getNextImage() {
	nextImageParent = $(thisImage).parent().next(); //get img container of next image
	nextImage = $(nextImageParent).children(); //identify the child of the next image container
	nextImageLocation = $(nextImage).attr("href"); //get the href and src of next img
	$image.attr("src", nextImageParent); // update overlay info to next img
	getCurrentImage (nextImageParent); //call the function that captures info about new current image
}




	
	
//=======================SEARCH FUNCTION=====================//	
	
//Set up the cache object	
	
(function() {
	
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











