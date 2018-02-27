// To test:
//Pink board not adding correctly valueplus????


// To Do:
// Add tiles to social media
// Consider making board of image tiles instead of text
// Build About page
// Figure out why pink screen diagonal doesn't calculate


$(document).ready(function() {
 
 console.log('DOCUMENT READY!')
 winsoundoff = false;
 losesoundoff = false;
	
	$('body').on('touchmove', false);
	
// 	$('#header').append(headerText);
	$('#header').append(headerImage);

	
	$('#footer').append(footerText);
	shuffle(JSONBingo.squares);
	
	for (i=0; i<24; i++)	{
		if (i==12) {
			$('#board').append("<div data-value='1' class='selected freesquare align-top' id='sqfree'><p class='align-top text'>free space</p></div>");
			$('#board').append("<div data-value='0' class='square align-top' id='sq12'><p class='align-top text'>"+JSONBingo.squares[i].square+"</p></div>");
		} else {
			$('#board').append("<div data-value='0' class='square align-top' id='sq"+i+"'><p class='align-top text'>"+JSONBingo.squares[i].square+"</p></div>");

		}
		
  }

$('#board').append(BottomMenu);
  
shuffle(JSONBingoPLUS.squaresPLUS);  

for (i=0; i<24; i++)	{
	
		if (i==12) {
			$('#positiveboard').append("<div data-valueplus='1' class='selected freesquarePLUS align-top' id='sqfreePLUS'><p class='align-top text'><br/>free space</p></div>");
			$('#positiveboard').append("<div data-valueplus='0' class='squarePLUS align-top' id='sqp12'><p class='align-top text'>"+JSONBingoPLUS.squaresPLUS[i].squarePLUS+"</p></div>");
		} else {
			$('#positiveboard').append("<div data-valueplus='0' class='squarePLUS align-top' id='sqp"+i+"'><p class='align-top text'>"+JSONBingoPLUS.squaresPLUS[i].squarePLUS+"</p></div>");
		}
		
  }
  
$('#positiveboard').append(BottomMenu);

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
	
         	if (losesoundoff == false) {loseSnd.play();
         	losesoundoff = true;}
    		
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

      if ($(this).data('valueplus') == 1) {
 

      		$(this).data('valueplus', 0);}
      else {

            $(this).data('valueplus', 1); 

      		}
      		}
      		

      		
         clickSnd.play();

		var row1 = ($('#sqp0').data('valueplus')+$('#sqp1').data('valueplus')+$('#sqp2').data('valueplus')+$('#sqp3').data('valueplus')+$('#sqp4').data('valueplus'));
		var row2 = ($('#sqp5').data('valueplus')+$('#sqp6').data('valueplus')+$('#sqp7').data('valueplus')+$('#sqp8').data('valueplus')+$('#sqp9').data('valueplus'));
		var row3 = ($('#sqp10').data('valueplus')+$('#sqp11').data('valueplus')+$('#sqfreePLUS').data('valueplus')+$('#sqp12').data('valueplus')+$('#sqp13').data('valueplus'));
		var row4 = ($('#sqp14').data('valueplus')+$('#sqp15').data('valueplus')+$('#sqp16').data('valueplus')+$('#sqp17').data('valueplus')+$('#sqp18').data('valueplus'));	
		var row5 = ($('#sqp19').data('valueplus')+$('#sqp20').data('valueplus')+$('#sqp21').data('valueplus')+$('#sqp22').data('valueplus')+$('#sqp23').data('valueplus'));			

		var col1 = ($('#sqp0').data('valueplus')+$('#sqp5').data('valueplus')+$('#sqp10').data('valueplus')+$('#sqp14').data('valueplus')+$('#sqp19').data('valueplus'));
		var col2 = ($('#sqp1').data('valueplus')+$('#sqp6').data('valueplus')+$('#sqp11').data('valueplus')+$('#sqp15').data('valueplus')+$('#sqp20').data('valueplus'));
		var col3 = ($('#sqp2').data('valueplus')+$('#sqp7').data('valueplus')+$('#sqfreePLUS').data('valueplus')+$('#sqp16').data('valueplus')+$('#sqp21').data('valueplus'));
		var col4 = ($('#sqp3').data('valueplus')+$('#sqp8').data('valueplus')+$('#sqp12').data('valueplus')+$('#sqp17').data('valueplus')+$('#sqp22').data('valueplus'));	
		var col5 = ($('#sqp4').data('valueplus')+$('#sqp9').data('valueplus')+$('#sqp13').data('valueplus')+$('#sqp18').data('valueplus')+$('#sqp23').data('valueplus'));			

		var diag1 = ($('#sqp0').data('valueplus')+$('#sqp6').data('valueplus')+$('#sqfreePLUS').data('valueplus')+$('#sqp17').data('valueplus')+$('#sqp23').data('valueplus'));	
		var diag2 = ($('#sqp4').data('valueplus')+$('#sqp8').data('valueplus')+$('#sqfreePLUS').data('valueplus')+$('#sqp15').data('valueplus')+$('#sqp19').data('valueplus'));	
		
		if (row1 == 5 || row2 == 5 || row3 == 5 || row4 == 5 || row5 == 5 || col1 == 5 || col2 == 5 || col3 == 5  || col4 == 5  || col5 == 5 || diag1 == 5 || diag2 == 5) {
			$('#header').html(winText);
			$('#header').addClass("win");
	
         	if (winsoundoff == false){ winSnd.play();
         	winsoundoff = true;}
    		
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

var LoadTweet = function() {
var tweet = GetMsg();
window.plugins.socialsharing.share('I\'m at '+hashtag+' playing '+headerText+'. Ticking the box for \''+ tweet+'\'', headerText, pix, 'http://www.women4oceans.weebly.com')
}

var GetMsg = function() {
console.log('GetMsg '+msg);
    return msg;
  };
  
function onPrompt(results) {
    hashtag = results.input1;
};


var HashTagLoad = function() {
// console.log('here');
navigator.notification.prompt(
    'Conference Hashtag',  // message
    onPrompt,                  // callback to invoke
    'Hashtag Setup',            // title
    ['Ok','Exit'],             // buttonLabels
    '#OceanConference'                 // defaultText
)  
  };
  
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
 


/*! Normalized address bar hiding for iOS & Android (c) @scottjehl MIT License */
(function( win ){
	var doc = win.document;
	
	// If there's a hash, or addEventListener is undefined, stop here
	if( !location.hash && win.addEventListener ){
		
		//scroll to 1
		window.scrollTo( 0, 1 );
		var scrollTop = 1,
			getScrollTop = function(){
				return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
			},
		
			//reset to 0 on bodyready, if needed
			bodycheck = setInterval(function(){
				if( doc.body ){
					clearInterval( bodycheck );
					scrollTop = getScrollTop();
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}	
			}, 15 );
		
		win.addEventListener( "load", function(){
			setTimeout(function(){
				//at load, if user hasn't scrolled more than 20 or so...
				if( getScrollTop() < 20 ){
					//reset to hide addr bar at onload
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}
			}, 0);
		} );
	}
})( this );