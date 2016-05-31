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

*/