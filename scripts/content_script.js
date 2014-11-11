/*
Appropriating Interaction Technology
with Woon and MT :D
*/

//------------------DOC READY-------------------//
$("document").ready(function(){

	console.log("Running from extension");
    
    //change cursor
    // $("body").css("cursor", "url('"+chrome.extension.getURL('glitter_cursor.gif')+"'), default");

    // make new div element
    var emoji = document.createElement("div");
    $(emoji).attr("id", "emoji"); // assign id of emoji
   	emoji.innerHTML = "<img src='" + chrome.extension.getURL('icon.png')+"'>";
   	document.body.insertBefore(emoji, document.body.firstChild);
   	
});
