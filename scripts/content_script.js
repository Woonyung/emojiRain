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

      // do something inside of the inbox 
      $('.ii').css('background-color', 'yellow');
      $('.ii').append("<img src='" + chrome.extension.getURL('images/icon.png')+"'>");



    } else {
      console.log("I found nothing");
    }
  } else { console.log("You are not getting there"); }

}
