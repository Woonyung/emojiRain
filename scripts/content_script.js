/*
Appropriating Interaction Technology
with Woon and MT :D
*/

var value;

//------------------DOC READY-------------------//
$("document").ready(function(){

  console.log("------------ Running from extension ---------- ");
    
    //change cursor
    // $("body").css("cursor", "url('"+chrome.extension.getURL('glitter_cursor.gif')+"'), default");

    // make new div element and assign id
    var emoji = document.createElement("div");
    $(emoji).attr("id", "emoji")
        .html("<img src='" + chrome.extension.getURL('images/icon.png')+"'>");

    // insert into body as first child
    document.body.insertBefore(emoji, document.body.firstChild);

    // checking words every 5 seconds
    setInterval(searchingWords, 5000);

    ////
    // when are we going to clear those out?...
    clearInterval();
});

function searchingWords(){
  // searching for the specific words

  value = $('.ii').html(); // get value from gmail contents
  if( value !== undefined ){ // if a user enter to inbox
    if (value.indexOf('oops') > -1){
      console.log("I found the word");
      $('.ii').append("<img src='" + chrome.extension.getURL('images/icon.png')+"'>");
    } else {
      console.log("I found nothing");
    }
  } else { console.log("You are not getting there"); }

}
