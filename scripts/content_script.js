/*
Appropriating Interaction Technology
with Woon and MT :D

1. function ---> how can we clear out and call everytime..?
2. how can we raining emoji on the TOP OF THE BROWSER?
3. how can we spread emoji to whole document

*/

var value;

// keywords - that is going to be matched with 
var keywords = ['happy', 'christmas'];

//------------------DOC READY-------------------//
$("document").ready(function(){

	console.log("------------ Running from extension ---------- ");
	setInterval(searchingWords, 5000);
});

function searchingWords(){
	// look for the value from gmail contents
	value = $('.ii').text().toLowerCase();
	//console.log(value);

	if( value !== undefined ){ // if a user enter to inbox
		for (var i = 0; i < keywords.length; i++){
			// if it contains specific words
			if ( value.indexOf(keywords[i]) > -1){ 
				console.log("I found word " + keywords[i]);

				// run function 
				rainEmoji(keywords[i]);
			} 
		} 
	} else { 
		console.log("You are not getting there"); 
	}
}

function rainEmoji(keyword){
	// getting URL - from images folder
	var imgURL = chrome.extension.getURL("images/icon_" + keyword + ".png"); 
	// append to div - for css animation
	$('.nH').append("<div class='emojis'><span style='background:url("+ imgURL +")'></span></div>");
	
}
