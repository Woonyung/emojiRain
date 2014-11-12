/*
Appropriating Interaction Technology
with Woon and MT :D
*/

var value;

//------------------DOC READY-------------------//
$("document").ready(function(){

  console.log("------------ Running from extension ---------- ");
    
  // checking words every 5 seconds
  setInterval(searchingWords, 5000);
  //searchingWords();

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

			// var imgURL = chrome.extension.getURL("images/icon.png");
			// document.getElementById("someImage").src = imgURL;

			var imgURL = 'http://pix.iemoji.com/sbemojix2/0756.png';

			// do something inside of the inbox 
			$('.ii').prepend("<div class='fallingOff'></div>");
			// $('.fallingOff').append("<div class='emojis'><span style='background-color:blue'></span></div>");
			// $('.fallingOff').append("<div class='emojis'><span style='background-color:blue'></span></div>");
			$('.fallingOff').append("<div class='emojis'><span></span></div>");

		} else {
			console.log("I found nothing");
		}
	} else { console.log("You are not getting there"); }

}
