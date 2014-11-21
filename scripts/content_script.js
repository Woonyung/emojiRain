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
var intervalID  = 0;
// keywords - that is going to be matched with 
var keywords = ['happy', 'christmas'];

//{ 'data-reactid':length of chats }
var chatIDs = {};


//------------------DOC READY-------------------//
$("document").ready(function(){

	console.log("------------ Running from extension ---------- ");
	setTimeout(attachListeners,100);


});


function attachListeners(){
	console.log("----attachListeners is running----");
	// setTimeout(searchingWords, 2000);

	intervalID = setInterval(searchingWords, 2000);


}

function searchingWords(){
	// clear out the emojis
	$('.emojis').remove();

	// checking all conversation class's children
	var allConvesation = $('.conversation').children();
	
	//looping through chat windows
	for (var i = 0; i < allConvesation.length; i++) {
		// console.log(allConvesation[i].getAttribute('data-reactid')); // <div data-reactid='1.f'>...</div>

		var currentID = allConvesation[i].getAttribute('data-reactid');
		var numMessages = allConvesation[i].children.length;
		// get the newsest message
		var newestMessage = allConvesation[i].children[numMessages-1].innerText;
		
		// is this a new chat
		if(currentID in chatIDs){

			// we already have this object so now need to check the num of messages
			// console.log("More conversation in chat : " + currentID);
			if(numMessages > chatIDs[currentID]){
				console.log("More conversation in chat : " + newestMessage);
				chatIDs[currentID] = numMessages;
				var words = newestMessage.split(' ');
				
				words[words.length -1].replace(/\n|\r+/g, '');
				console.log(words);
				
				if($.inArray('happy', words) !== -1){
					rainEmoji('happy',currentID);
				}

			}
			// else{
			// 	console.log("No new conversation");
			// 	console.log(chatIDs[currentID]+" : "+numMessages);
			// }
		}
		else{
			//This is what happens when a new chat is started
			// New Object!! Lets add it to the object
			chatIDs[currentID] = numMessages ;
			console.log("Chat added!");
			console.log(chatIDs);
			
		}
	};
}

function rainEmoji(keyword,id){
	console.log(keyword);
	// getting URL - from images folder
	var imgURL = chrome.extension.getURL("images/icon_" + keyword + ".png"); 
	// append to div - for css animation
	console.log(imgURL);
	console.log($("[data-reactid="+'\"'+id+'\"'+"]"));

	
	// $(id).append("<div style='margin-left:" + 100 + "px; margin-top:"+ 100 + "px;' class='emojis " + keyword + "'><span style='background:url("+ imgURL +")'></span></div>");
	// Randomly assign value 
	for (var i = 0; i < 15; i++){
		var x = Math.round(Math.random() * 900)-20;
		var y = Math.round(Math.random() * 10);
		// $('.conversation').append("<div style='margin-left:" + x + "px; margin-top:"+ y + "px;' class='emojis " + keyword + "'><span style='background:url("+ imgURL +")'></span></div>");
		$("[data-reactid="+'\"'+id+'\"'+"]").append("<div style='margin-left:" 
													+ x + "px; margin-top:"+ y + "px;' class='emojis "
													+ keyword + "'><span style='background:url("
													+ imgURL +")'></span></div>");
	}
}
