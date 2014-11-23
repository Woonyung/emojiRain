/*
Appropriating Interaction Technology
with Woon and MT :D

later we are going to add function for g-chat as well
// look for g-chat
// valueForGchat = $("div[role='log']").text().toLowerCase();
// console.log(valueForGchat);

TEST WITH FACEBOOK CHAT BIG WINDOW
*/

var valueForFacebook;
var valueForGchat;

var word;
var intervalID  = 0;
// keywords - that is going to be matched with 
var keywords = ['birthday', 'christmas', 'halloween'];


///// OBJECT FOR SMALL WINDOWS /////
//{ 'data-reactid':length of chats }
var chatIDSmall = {};

///// OBJECT FOR BIG WINDOW /////
var chatIDBig = {};


//------------------DOC READY-------------------//
$("document").ready(function(){

	console.log("------------ Running from extension ---------- ");
	setTimeout(attachListeners,100);


});


function attachListeners(){
	console.log("----attachListeners is running----");
	// setTimeout(searchingWords, 2000);

	intervalID = setInterval(searchingWords, 3000);
}


function searchingWords(){
	// clear out the emojis first
	$('.emojis').remove();

	// check if user is using small or big window
	if($('#webMessengerRecentMessages')[0] == undefined ){ 

		///////////////////////////////////////////////
		/// SMALL WINDOW
		///////////////////////////////////////////////

		console.log("---you are using small window---");

		// checking all conversation class's children
		var allConvesationSmall = $('.conversation').children();
		
		//looping through chat windows
		for (var i = 0; i < allConvesationSmall.length; i++) {
			// console.log(allConvesationSmall[i].getAttribute('data-reactid')); // <div data-reactid='1.f'>...</div>
	
			var currentIDSmall = allConvesationSmall[i].getAttribute('data-reactid');
			var numMessagesSmall = allConvesationSmall[i].children.length;
			// get the newsest message
			var newestMessageSmall = allConvesationSmall[i].children[numMessagesSmall-1].innerText.toLowerCase();
	
			// is this a new chat
			if(currentIDSmall in chatIDSmall){
	
				// we already have this object so now need to check the num of messages
				// console.log("More conversation in chat : " + currentIDSmall);
				if(numMessagesSmall > chatIDSmall[currentIDSmall]){
					console.log("More conversation in chat : " + newestMessageSmall);
					chatIDSmall[currentIDSmall] = numMessagesSmall;
					// split with white space OR carrige return OR enter
					var wordSmall = newestMessageSmall.split(/\s|\n|\r{1,}/g);
					
					console.log(wordSmall);
					
					for ( var i = 0; i < keywords.length; i++){
						if($.inArray(keywords[i], wordSmall) !== -1){
							rainEmojiSmall(keywords[i],currentIDSmall);
						}
					}
	
				}
				// else{
				// 	console.log("No new conversation");
				// 	console.log(chatIDSmall[currentIDSmall]+" : "+numMessages);
				// }
				}
				else{
					// This is what happens when a new chat is started
					// New Object!! Lets add it to the object
					chatIDSmall[currentIDSmall] = numMessagesSmall ;
					console.log("Chat added! -- Small");
					console.log(chatIDSmall);			
				}
		};

	} else { 

		///////////////////////////////////////////////
		/// BIG WINDOW
		///////////////////////////////////////////////

		console.log("---you are using big window---")
		var allConvesationBig = $('#webMessengerRecentMessages');
		console.log(allConvesationBig);
	}

}



function rainEmojiSmall(keyword,id){
	console.log(keyword);
	// getting URL - from images folder
	var imgURL = chrome.extension.getURL("images/icon_" + keyword + ".png"); 
	// append to div - for css animation
	console.log(imgURL);
	//console.log(id);
	console.log($("[data-reactid="+'\"'+id+'\"'+"]")); // getting data-react attribute

	
	// $(id).append("<div style='margin-left:" + 100 + "px; margin-top:"+ 100 + "px;' class='emojis " + keyword + "'><span style='background:url("+ imgURL +")'></span></div>");
	// Randomly assign value 
	for (var i = 0; i < 30; i++){
		var x = Math.round(Math.random() * 900)-20;
		var y = Math.round(Math.random() * 5);
		// $('.conversation').append("<div style='margin-left:" + x + "px; margin-top:"+ y + "px;' class='emojis " + keyword + "'><span style='background:url("+ imgURL +")'></span></div>");
		$("[data-reactid="+'\"'+id+'\"'+"]").append("<div style='margin-left:" 
													+ x + "px; margin-top:"+ y + "px;' class='emojis "
													+ keyword + "'><span style='background:url("
													+ imgURL +")'></span></div>");
	}
}
