// NB: HeaderText is used as a variable in LoadTWeet()
var headerText = "Gender Balance This Oceans Conference Bingo";
var headerImage = "<img src='img/banner.jpg' class='img-responsive'>";

var footerText = "A beautiful mischief app from <br /><a href='http://women4oceans.weebly.com/'><img src='img/logo.png' width='25px' height='25px'>Women4oceans</a> and <a href='http://www.dancing-fox.com'><img src='img/df-logo.png' width='25px' height='25px'> Dancing Fox</a>";

var winText =  "<img src='img/wins.jpg' class='img-responsive'>";

var BottomMenu ="<div class='footer'><div class='row'><div class='col-xs-3 text-center'><button type='button' class='btn btn-info' onclick='HashTagLoad()'>Hashtag</button></div><div class='col-xs-3 text-center'><button type='button' class='btn btn-info' onclick='window.location.reload(true);'>New Cards</button></div><div class='col-xs-3 text-center'><button type='button' class='btn btn-info' onclick='FlipBoard()'>Flip Board</button></div><div class='col-xs-3 text-center'><button type='button' class='btn btn-info' onclick='LoadTweet()'>Share move</button></div></div></div><div class='row'><div class='col-xs-12 text-center'><p style='color:white'><a href=''> About Us </a> <a href='http://women4oceans.weebly.com/'> <img src='img/logo.png' height='50px' width='50px'> </a> <a href='https://donorbox.org/women4oceans'> Give Back </a></p></div><div></div></div>";

var loseText =  "<img src='img/lose.jpg' class='img-responsive'>";

var clickSnd = new Audio("audio/click.mp3");

var winSnd = new Audio("audio/win.mp3");

var loseSnd = new Audio("audio/lose.mp3");

var hashtag = "#OceansConference";

var idstring = "sq11";

// var idstring = "sqp11";

var msg = "I'm playing Gender Equality Conference Bingo"

var JSONBingo = {"squares": [
        {"square": "All male panel (manel)"},
        {"square": "Mansplained to"},
        {"square": "Woman interrupted"},
        {"square": "FisherMEN"},
        {"square": "Ogling"},
        {"square": "We tried to find a woman but..."},
        {"square": "Women ignored"},
        {"square": "Condescension"},
        {"square": "She's smart and beautiful"},
        {"square": "Leering"},
        {"square": "Racial assumptions"},
        {"square": "No racial diversity"},
        {"square": "Woman objectified"},
        {"square": "Inappropriate touching"},
        {"square": "Presumption of maleness"},
        {"square": "Panel overwhelmingly male"},
        {"square": "Women referred to as girl"},
        {"square": "Reference to a woman's appearance"},
        {"square": "Male dominated discussion"},
        {"square": "Pet name e.g. Sweetheart"},
        {"square": "Accused of being un-lady like"},
        {"square": "Asked about relationship status"},
        {"square": "But what about the men..."},
        {"square": "Dismissive behavior"},
        {"square": "Woman's professional title dropped"}  	
    ]
    };


// var JSONBingo = {"squares": [
//         {"square": "<img src='img/2.png' class='img-responsive'>"},
//         {"square": "<img src='img/1.png' class='img-responsive'>"},
//         {"square": "<img src='img/1.png' class='img-responsive'>"},
//         {"square": "<img src='img/1.png' class='img-responsive'>"},
//         {"square": "<img src='img/1.png' class='img-responsive'>"},
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}, 
//         {"square":  "<img src='img/1.png' class='img-responsive'>"}
//     ]
//     };
    
var JSONBingoPLUS = {"squaresPLUS": [
        {"squarePLUS": "Neutral pronouns"},
        {"squarePLUS": "Moderator treats panelists equally"},
        {"squarePLUS": "Female professional titles used"},
        
        {"squarePLUS": "Good gender ratio panels"},
        {"squarePLUS": "Uninterrupted female monologue"},
        {"squarePLUS": "Zero all-male panels"},
        {"squarePLUS": "Women are called women"},
        {"squarePLUS": "eference to a woman's achievements"},
        
 {"squarePLUS": "Racially diverse panels"},
 {"squarePLUS": "Gender balanced awards"},
 {"squarePLUS": "Questions taken from women"},
 {"squarePLUS": "No straying eyes"},
 {"squarePLUS": "Inclusion"},
 {"squarePLUS": "No racial assumptions"},
 {"squarePLUS": "Woman's comment respected"},
 {"squarePLUS": "Engaging on a woman's achievements"},
 {"squarePLUS": "Positive networking experience"},
 {"squarePLUS": "No unsolicited touching"},
 {"squarePLUS": "Safe environment"},
 {"squarePLUS": "Woman invited to collaborate"},
 {"squarePLUS": "Women's leadership celebrated"},
 {"squarePLUS": "Women's professional expertise sought"},
 {"squarePLUS": "Female keynote speakers"},
 {"squarePLUS": "No sexual harassment"},
 {"squarePLUS": "Sexual orientation not alluded to"}
    ]    
    };
