/*
Appropriating Interaction Technology
with Woon and MT :D

1. function ---> how can we clear out and call funtion everytime user click inbox item..?
2. how can we raining emoji on the TOP OF THE BROWSER?
3. how can we spread emoji to whole document
4. if it contains multiple words- how can I display multiple emojis at once?

*/

var value;
var word;

// keywords - that is going to be matched with 
var keywords = ['happy', 'christmas'];

//------------------DOC READY-------------------//
$("document").ready(function(){

	console.log("------------ Running from extension ---------- ");
	//setInterval(searchingWords, 5000);
	
	setTimeout(attachListeners,100);
});

function attachListeners(){
	console.log("----attachListeners is running----");
	$('tr').click(function(){
		console.log("tr is clicked");
		setTimeout(searchingWords, 100);
	});
}



function searchingWords(){
	// clear out the emojis
	$('.emojis').remove();

	// look for the value from gmail contents
	value = $('.ii').text().toLowerCase();
	console.log(value);
	// Then split with space - or REGEX ? for avoiding unintended mistakes : un'happy'
	word = value.split(' ');

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
	console.log(keyword);
	// getting URL - from images folder
	var imgURL = chrome.extension.getURL("images/icon_" + keyword + ".png"); 
	// append to div - for css animation
	console.log(imgURL);

	// Randomly assign value 
	for (var i = 0; i < 20; i++){
		var x = Math.round(Math.random() * 900)-20;
		var y = Math.round(Math.random() * 900)-20;
		$('.nH').append("<div style='left:" + x + "px; top:"+ y + "px;' class='emojis " + keyword + "'><span style='background:url("+ imgURL +")'></span></div>");
	}

	// $('.nH').append("<div class='emojis " + keyword + "'><span style='background:url("+ imgURL +")'></span></div>");
	
}
