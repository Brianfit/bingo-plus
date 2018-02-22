// To Do:
// Get StatusBar working
// Localize fonts
// Replace header, win, and loss, with images
// Add tiles
// Build About page


var GetMsg = function() {
// console.log('GetMsg '+msg);
    return msg;
  }
  
function onPrompt(results) {
    hashtag = results.input1;
}


var HashTagLoad = function() {
// console.log('here');
navigator.notification.prompt(
    'Conference Hashtag',  // message
    onPrompt,                  // callback to invoke
    'Hashtag Setup',            // title
    ['Ok','Exit'],             // buttonLabels
    '#OceanConference'                 // defaultText
)  
  }
  
var FlipBoard = function(){
// console.log('attempting flip');
document.querySelector("#boardRow").classList.toggle("flip");
}  

var GiveBack = function(){
location.href = "https://donorbox.org/women4oceans";

}

var onLoad = function() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
var onDeviceReady = function() {
            console.log('Ready');
		    console.log(navigator.notification);
		    StatusBar.overlaysWebView(true);
		    StatusBar.styleDefault();
		}
    // Add similar listeners for other events
}


var LoadTweet = function() {
var tweet = GetMsg();
window.plugins.socialsharing.share('I\'m at '+hashtag+' playing '+headerText+'. Ticking the box for \''+ tweet+'\'', headerText, 'http://women4oceans.weebly.com/uploads/1/2/1/3/12139956/website1_orig.png', 'http://www.women4oceans.weebly.com')
}


$(document).ready(function() {
	
	$('body').on('touchmove', false);
	
// 	$('#header').append(headerText);
	$('#header').append(headerImage);

	
	$('#footer').append(footerText);
	shuffle(JSONBingo.squares);
	
	for (i=0; i<24; i++)	{
		if (i==12) {
			$('#board').append("<div data-value='1' class='selected freesquare' id='sqfree'><p class='text hyphens noselect'><br/>free space</p></div>");
			$('#board').append("<div data-value='0' class='square' id='sq12'><p class='text hyphens noselect'><br/>"+JSONBingo.squares[i].square+"</p></div>");
		} else {
			$('#board').append("<div data-value='0' class='square' id='sq"+i+"'><p class='text hyphens noselect'><br/>"+JSONBingo.squares[i].square+"</p></div>");

		}
		
  }
  
shuffle(JSONBingoPLUS.squaresPLUS);  

for (i=0; i<24; i++)	{
	
		if (i==12) {
			$('#positiveboard').append("<div data-value='1' class='selected freesquarePLUS' id='sqfreePLUS'><p class='text hyphens noselect'><br/>free space</p></div>");
			$('#positiveboard').append("<div data-value='0' class='squarePLUS' id='sqp12'><p class='text hyphens noselect'><br/>"+JSONBingoPLUS.squaresPLUS[i].squarePLUS+"</p></div>");
		} else {
			$('#positiveboard').append("<div data-value='0' class='squarePLUS' id='sqp"+i+"'><p class='text hyphens noselect'><br/>"+JSONBingoPLUS.squaresPLUS[i].squarePLUS+"</p></div>");
		}
		
  }
  

	$('div.square').tappable(function ()  {
	   cancelOnMove: false;
	  if (!event.target.id){ 
	  } else {
      $(this).toggleClass('selected');

      if ($(this).data('value') == 1) {
 

      		$(this).data('value', 0);}
      else {

            $(this).data('value', 1); 

      		}
      		}
      		

      		
         clickSnd.play();

		var row1 = ($('#sq0').data('value')+$('#sq1').data('value')+$('#sq2').data('value')+$('#sq3').data('value')+$('#sq4').data('value'));
		var row2 = ($('#sq5').data('value')+$('#sq6').data('value')+$('#sq7').data('value')+$('#sq8').data('value')+$('#sq9').data('value'));
		var row3 = ($('#sq10').data('value')+$('#sq11').data('value')+$('#sqfree').data('value')+$('#sq12').data('value')+$('#sq13').data('value'));
		var row4 = ($('#sq14').data('value')+$('#sq15').data('value')+$('#sq16').data('value')+$('#sq17').data('value')+$('#sq18').data('value'));	
		var row5 = ($('#sq19').data('value')+$('#sq20').data('value')+$('#sq21').data('value')+$('#sq22').data('value')+$('#sq23').data('value'));			

		var col1 = ($('#sq0').data('value')+$('#sq5').data('value')+$('#sq10').data('value')+$('#sq14').data('value')+$('#sq19').data('value'));
		var col2 = ($('#sq1').data('value')+$('#sq6').data('value')+$('#sq11').data('value')+$('#sq15').data('value')+$('#sq20').data('value'));
		var col3 = ($('#sq2').data('value')+$('#sq7').data('value')+$('#sqfree').data('value')+$('#sq16').data('value')+$('#sq21').data('value'));
		var col4 = ($('#sq3').data('value')+$('#sq8').data('value')+$('#sq12').data('value')+$('#sq17').data('value')+$('#sq22').data('value'));	
		var col5 = ($('#sq4').data('value')+$('#sq9').data('value')+$('#sq13').data('value')+$('#sq18').data('value')+$('#sq23').data('value'));			

		var diag1 = ($('#sq0').data('value')+$('#sq6').data('value')+$('#sqfree').data('value')+$('#sq17').data('value')+$('#sq23').data('value'));	
		var diag2 = ($('#sq4').data('value')+$('#sq8').data('value')+$('#sqfree').data('value')+$('#sq15').data('value')+$('#sq19').data('value'));	
		
		if (row1 == 5 || row2 == 5 || row3 == 5 || row4 == 5 || row5 == 5 || col1 == 5 || col2 == 5 || col3 == 5  || col4 == 5  || col5 == 5 || diag1 == 5 || diag2 == 5) {
			$('#header').html(loseText);
			$('#header').addClass("lose");
	
         	loseSnd.play();
    		
    	} else {
			$('#header').html(headerImage);
			$('#header').removeClass("lose");

		}; 
    });
    
    	$('div.squarePLUS').tappable(function ()  {
	   cancelOnMove: false;
	  if (!event.target.id){ 
	  } else {
      $(this).toggleClass('selected');

      if ($(this).data('valuePLUS') == 1) {
 

      		$(this).data('valuePLUS', 0);}
      else {

            $(this).data('valuePLUS', 1); 

      		}
      		}
      		

      		
         clickSnd.play();

		var row1 = ($('#sqp0').data('valuePLUS')+$('#sqp1').data('valuePLUS')+$('#sqp2').data('valuePLUS')+$('#sqp3').data('valuePLUS')+$('#sqp4').data('valuePLUS'));
		var row2 = ($('#sqp5').data('valuePLUS')+$('#sqp6').data('valuePLUS')+$('#sqp7').data('valuePLUS')+$('#sqp8').data('valuePLUS')+$('#sqp9').data('valuePLUS'));
		var row3 = ($('#sqp10').data('valuePLUS')+$('#sqp11').data('valuePLUS')+$('#sqfreePLUS').data('valuePLUS')+$('#sqp12').data('valuePLUS')+$('#sqp13').data('valuePLUS'));
		var row4 = ($('#sqp14').data('valuePLUS')+$('#sqp15').data('valuePLUS')+$('#sqp16').data('valuePLUS')+$('#sqp17').data('valuePLUS')+$('#sqp18').data('valuePLUS'));	
		var row5 = ($('#sqp19').data('valuePLUS')+$('#sqp20').data('valuePLUS')+$('#sqp21').data('valuePLUS')+$('#sqp22').data('valuePLUS')+$('#sqp23').data('valuePLUS'));			

		var col1 = ($('#sqp0').data('valuePLUS')+$('#sqp5').data('valuePLUS')+$('#sqp10').data('valuePLUS')+$('#sqp14').data('valuePLUS')+$('#sqp19').data('valuePLUS'));
		var col2 = ($('#sqp1').data('valuePLUS')+$('#sqp6').data('valuePLUS')+$('#sqp11').data('valuePLUS')+$('#sqp15').data('valuePLUS')+$('#sqp20').data('valuePLUS'));
		var col3 = ($('#sqp2').data('valuePLUS')+$('#sqp7').data('valuePLUS')+$('#sqfreePLUS').data('valuePLUS')+$('#sqp16').data('valuePLUS')+$('#sqp21').data('valuePLUS'));
		var col4 = ($('#sqp3').data('valuePLUS')+$('#sqp8').data('valuePLUS')+$('#sqp12').data('valuePLUS')+$('#sqp17').data('valuePLUS')+$('#sqp22').data('valuePLUS'));	
		var col5 = ($('#sqp4').data('valuePLUS')+$('#sqp9').data('valuePLUS')+$('#sqp13').data('valuePLUS')+$('#sqp18').data('valuePLUS')+$('#sqp23').data('valuePLUS'));			

		var diag1 = ($('#sqp0').data('valuePLUS')+$('#sqp6').data('valuePLUS')+$('#sqfreePLUS').data('valuePLUS')+$('#sqp17').data('valuePLUS')+$('#sqp23').data('valuePLUS'));	
		var diag2 = ($('#sqp4').data('valuePLUS')+$('#sqp8').data('valuePLUS')+$('#sqfreePLUS').data('valuePLUS')+$('#sqp15').data('valuePLUS')+$('#sqp19').data('valuePLUS'));	
		
		if (row1 == 5 || row2 == 5 || row3 == 5 || row4 == 5 || row5 == 5 || col1 == 5 || col2 == 5 || col3 == 5  || col4 == 5  || col5 == 5 || diag1 == 5 || diag2 == 5) {
			$('#header').html(winText);
			$('#header').addClass("win");
	
         	winSnd.play();
    		
    	} else {
			$('#header').html(headerImage);
			$('#header').removeClass("win");

		}; 
    });
        
});


shuffle = function(v){
    	for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    	return v;
};

/*! Normalized address bar hiding for iOS & Android (c) @scottjehl MIT License */
// (function( win ){
// 	var doc = win.document;
// 	
// 	// If there's a hash, or addEventListener is undefined, stop here
// 	if( !location.hash && win.addEventListener ){
// 		
// 		//scroll to 1
// 		window.scrollTo( 0, 1 );
// 		var scrollTop = 1,
// 			getScrollTop = function(){
// 				return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
// 			},
// 		
// 			//reset to 0 on bodyready, if needed
// 			bodycheck = setInterval(function(){
// 				if( doc.body ){
// 					clearInterval( bodycheck );
// 					scrollTop = getScrollTop();
// 					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
// 				}	
// 			}, 15 );
// 		
// // 		win.addEventListener( "load", function(){
// // 			setTimeout(function(){
// // 				//at load, if user hasn't scrolled more than 20 or so...
// // 				if( getScrollTop() < 20 ){
// // 					//reset to hide addr bar at onload
// // 					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
// // 				}
// // 			}, 0);
// // 		} );
// 	}
// })( this );