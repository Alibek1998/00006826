 		/***************
		**SideNav menu**
		***************/

var num = 0; 

$('#btn').click(()=>{ //this is the function execute codes when the menu button clicked. 
	if(num%2===0){  //if remainder of num is equal to zero execute this codes
		document.querySelector('#btn div:nth-child(1)').style.animationName = 'top';   // the two dives like "=" will be "x"
		document.querySelector('#btn div:nth-child(3)').style.animationName = 'bottom';
		$('#menu_container').stop(true).fadeIn(500);  // the side nav menu container will be shown in half second
	}else{
		document.querySelector('#btn div:nth-child(1)').style.animationName = 'reset_top';  //// the two dives like "x" will return "="
		document.querySelector('#btn div:nth-child(3)').style.animationName = 'reset_bottom';
		$('#menu_container').stop(true).fadeOut(500);  //the menu container will be disappear in half second
	}
	num++;	//whenever button is clicked number will incriment by 1
});

		/****************
		**Shopping card**
		****************/


var addedproducts = [];   //this array is used in order to keep products (name and cost)


var addtocard = (name, cost)=>{  //this function is used for adding product to the array (addedproductes)
	addedproducts.push({name: name, cost: cost}); //push item to the array
	$('#cartcounter').html(addedproducts.length); //this counts the number of productes in the array in terms of length
	showProductes(); //this will show productes in the html
};


var num1 = 0;
 
var showProductes = ()=>{  //the function of showing product in cart
	$('#listofproducts').html("");  //clean the container before adding the productes

	addedproducts.forEach(x=>{ //this loops the whole array evary time
		$('#listofproducts').append('<li> <span>' + x.name +'</span>' + '<span>$' +  x.cost + '</span></li>'); //this addes name and cost of product into the li sapn
	});

	var total = Math.round(addedproducts.reduce((acc, x, i, a)=>acc+x.cost, 0)*100)/100;  //reduce function is used to loop through and calculate cost of the product

	$('.orderbtn').html('Order now $'+total); //this addes total amount of cost next to "Order now" button with $ sign
};

$('.shopping_card').click(()=>{ 							  //
	if (num1%2===0) {										  //
		$('.listofproducts').stop(true).fadeIn(500);          //shopping card fade in and fade out when shopping cart btn is clicked
	}else{													  //
		$('.listofproducts').stop(true).fadeOut(500);		  //
	}
	num1++;
});

$('#deletebtn').click(()=>{
	addedproducts = [];          //when btn is clicked item will be deleted 
	showProductes();
	$('#cartcounter').html(addedproducts.length);  //ofter deleting , this will show the number of item in array
});

$('.orderbtn').click(()=>{      // when btn is clicked
	if (addedproducts.length !== 0) {       //if there is a item in the array, it will move to link called payment.html  
		window.location = "payment.html";
	}else{
		alert("Please, add product to the cart first!")  
	}
})


		/**************
		****Contact****
		**************/


function validateEmail(email) {   //the validation of the email
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$('#submit').click(()=>{
	event.preventDefault();  //this do not let page refresh, after clicking btn

	var fname = document.querySelector('#fname').value;
	var lname = document.querySelector('#lname').value;
	var email = document.querySelector('#email').value;
	var subject = document.querySelector('#subject').value;
	if (fname.length > 0 && lname.length > 0 && validateEmail(email) && subject.length > 0) {  //validation of contact page 
		alert('Your message has been sent. Thank you!');
	}else{
		alert('Please, fill in the form with valid e-mail and data');
	}
});



		/************
		***Payment***
		************/


$('#process').click(()=>{      //validation of payment page when btn is clicked
	event.preventDefault();

	var fullname = document.querySelector('#fullname').value;
	var email = document.querySelector('#email').value;
	var adr = document.querySelector('#adr').value;
	var city = document.querySelector('#city').value;
	var state = document.querySelector('#state').value;
	var zip = document.querySelector('#zip').value;
	var cname = document.querySelector('#cname').value;
	var ccnum = document.querySelector('#ccnum').value;
	var expmonth = document.querySelector('#expmonth').value;
	var expyear = document.querySelector('#expyear').value;
	var cvv = document.querySelector('#cvv').value;

	if (fullname.length > 0 && validateEmail(email) && adr.length > 0 && city.length > 0 && state.length > 0 && zip.length === 6 && cname.length > 0 && ccnum.length === 16 && expmonth.length > 0 && expyear.length ===4 && cvv.length === 3) {
		alert("Your payment processed successfully. Thank you! We will deliver your order ASAP.");
		document.querySelector('#fullname').value = "";
		document.querySelector('#email').value = "";
		document.querySelector('#adr').value = "";				
		document.querySelector('#city').value = "";					
		document.querySelector('#state').value = "";				
		document.querySelector('#zip').value = "";					
		document.querySelector('#cname').value = "";				
		document.querySelector('#ccnum').value = "";
		document.querySelector('#expmonth').value = "";
		document.querySelector('#expyear').value = "";
		document.querySelector('#cvv').value = "";
	}else{
		alert("Please, fill in the form with valid e-mail, cvv, card number, data and other.");
	}
})

