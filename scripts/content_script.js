/*
Appropriating Interaction Technology
with Woon and MT :D
*/

//------------------DOC READY-------------------//
$("document").ready(function(){

	console.log("Running from extension");
    
    //change cursor
    // $("body").css("cursor", "url('"+chrome.extension.getURL('glitter_cursor.gif')+"'), default");

    // make new div element and assign id
    var emoji = document.createElement("div");
    $(emoji).attr("id", "emoji")
    		.html("<img src='" + chrome.extension.getURL('images/icon.png')+"'>");

    // insert into body as first child
   	document.body.insertBefore(emoji, document.body.firstChild);


   	// searching for the specific words..
   	// it has to be run everytime user clicked new inbox item...
   	var value = $('body').html(); 
   	if (value.indexOf('goofy') > -1){
   		console.log("I found the word");
   	} else {
   		console.log("I found nothing");
   	}

});
