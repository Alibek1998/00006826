
									/*****************
									****Slide show****
									******************/
		

var ArrayImage = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];//creating array of image locations to use later
var imageIndex = 0;// setting the begginning position of slide to 0 ( slide2.jpg is shown )

function next_slide() {  // incrment function to show next slide

	imageIndex++;	// increment image idex by 1 ( slide2.jpg will be replaced by slide3.jpg )
	
	if (imageIndex >= ArrayImage.length ){ // reset the image index value to 0 if it reaches image array's length
		imageIndex = 0;
	}

	image_number.innerHTML = (imageIndex+1)+" / "+ArrayImage.length; // show current slide number in div id="image_number"

	image_container.style.backgroundImage = "url('"+ ArrayImage[imageIndex] +"')"; // change slide image
}

function prev_slide() {

	imageIndex--; // decrement image idex by 1 ( slide4.jpg will be replaced by slide3.jpg )
	
	if (imageIndex < 0){ // whenever image index reaches -1 reset it to ArrayImage.length - 1 which is 4
		imageIndex = ArrayImage.length - 1;
	}

	image_number.innerHTML = (imageIndex+1)+" / "+ArrayImage.length;  // show current slide number in div id="image_number"

	image_container.style.backgroundImage = "url('"+ ArrayImage[imageIndex] +"')";  // change slide image
}

setInterval(function () {

	imageIndex++; // increment image idex by 1 ( slide2.jpg will be replaced by slide3.jpg )

	if (imageIndex >= ArrayImage.length){ // reset the image index value to 0 if it reaches image array's length
		imageIndex = 0;
	}

	image_number.innerHTML = (imageIndex+1)+" / "+ArrayImage.length;  // show current slide number in div id="image_number"

	image_container.style.backgroundImage = "url('"+ ArrayImage[imageIndex] +"')";  // change slide image
}, 5000);


