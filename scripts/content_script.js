/*
Appropriating Interaction Technology
with Woon and MT :D


1. how can we store variable for imageURL? -- so that we can manipulate multiple emojis
	chrome.extension.getURL('images/icon.png') - doesn't work...

2. function ---> how can we clear out and call everytime..?

3. how can we spread emoji to whole document

*/


var value;

//------------------DOC READY-------------------//
$("document").ready(function(){

  console.log("------------ Running from extension ---------- ");
    
  // checking words every 5 seconds
  setInterval(searchingWords, 10000);
 // setTimeout(searchingWords, 5000);

  ////
  // when are we going to clear those out?...
  //clearInterval();
});


function searchingWords(){
	// searching for the specific words
	value = $('.ii').html(); // get value from gmail contents
	if( value !== undefined ){ // if a user enter to inbox
		if (value.indexOf('birthday') > -1){
			console.log("I found the word");

			// do something inside of the inbox 
			$('.nH').append("<div class='fallingOff'></div>");
			// $('.fallingOff').append("<div class='emojis'><span></span></div>");
			
			var imgURL = chrome.extension.getURL("images/icon1.png"); 
			$('.fallingOff').append("<div class='emojis'><span style='background:url("+ imgURL +")'></span></div>");

		} else {
			console.log("I found nothing");
		}
	} else { 
		console.log("You are not getting there"); 
	}

}
