/*
Appropriating Interaction Technology
with Woon and MT :D

what if we change those on the facebook feed?...


later we are going to add function for g-chat as well
// look for g-chat
// valueForGchat = $("div[role='log']").text().toLowerCase();
// console.log(valueForGchat);

*/

var valueForFacebook;
var valueForGchat;

var word;

// keywords - that is going to be matched with 
var keywords = ['happy', 'christmas'];

//------------------DOC READY-------------------//
$("document").ready(function(){

	console.log("------------ Running from extension ---------- ");
	setTimeout(attachListeners,100);
});


function attachListeners(){
	console.log("----attachListeners is running----");
	// setTimeout(searchingWords, 2000);
	setInterval(searchingWords, 2000);
}



function searchingWords(){
	// clear out the emojis
	$('.emojis').remove();

	// look for the value from facebook chat contents
	valueForFacebook = $('.conversation').text().toLowerCase();
	console.log(valueForFacebook);


	// split with am or pm (timestamp) or space OR
	// ! mark , ? OR
	// white space ( space )
	var regex = /am|pm|\s|!{1,}|\?{1,}|,|ago/gi 
	word = valueForFacebook.split(regex);
	console.log(word);


	if( word !== undefined ){ 
		for (var i = 0; i < keywords.length; i++){
			// if it contains specific words
			if ( word.indexOf(keywords[i]) > -1){ 
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
	console.log(keyword);
	// getting URL - from images folder
	var imgURL = chrome.extension.getURL("images/icon_" + keyword + ".png"); 
	// append to div - for css animation
	console.log(imgURL);

	// Randomly assign value 
	for (var i = 0; i < 15; i++){
		var x = Math.round(Math.random() * 900)-20;
		var y = Math.round(Math.random() * 10);
		$('.conversation').append("<div style='margin-left:" + x + "px; margin-top:"+ y + "px;' class='emojis " + keyword + "'><span style='background:url("+ imgURL +")'></span></div>");
		// $('.h7').prepend("<div style='margin-left:" + x + "px;' class='emojis " + keyword + "'><span style='background:url("+ imgURL +")'></span></div>");
	}
	// $('.nH').append("<div class='emojis " + keyword + "'><span style='background:url("+ imgURL +")'></span></div>");
}
