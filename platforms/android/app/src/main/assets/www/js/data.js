// NB: gameNameText is used as a variable in LoadTWeet() to reference the name of the game being played
var gameNameText = "Gender Balance Bingo";
//The top banner 
var headerImage = "<img src='img/banner.jpg' class='img-responsive' style='margin: 0 auto'>";

var winText =  "<img src='img/wins.jpg' class='img-responsive'>";

//This is where the logo, about us, and donate links live
var BottomMenu ="<div class='footer'><div class='row'><div class='col-xs-3 text-center'><button type='button' class='btn btn-info btn-responsive ' onclick='HashTagLoad()'>Set Hashtag</button></div><div class='col-xs-3 text-center'><button type='button' class='btn btn-info btn-responsive ' onclick='window.location.reload(true);'>New Cards</button></div><div class='col-xs-3 text-center'><button type='button' class='btn btn-info btn-responsive ' onclick='FlipBoard()'>Flip Board</button></div><div class='col-xs-3 text-center'><button type='button' class='btn btn-info btn-responsive ' onclick='ShareWindow()'>Share move</button></div></div><div class='row'><div class='col-xs-12 text-center'><p class='w4o' style='color:black'><a href='http://dancing-fox.com/bingo'> About Us </a> <a href='http://women4oceans.weebly.com/'> <img src='img/logo.png' height='50px' width='50px'> </a> <a href='https://donorbox.org/women4oceans'> Give Back </a></p></div><div></div>";

var loseText =  "<img src='img/lose.jpg' class='img-responsive'>";

var authorText = "#Women4Oceans";

var gameHashTag = "#W4OBingo";

var shareLink = "http://women4oceans.weebly.com/gender-balance-bingo.html";

var clickSnd = new Audio("audio/click.mp3");

var winSnd = new Audio("audio/win.mp3");

var loseSnd = new Audio("audio/lose.mp3");

var hashtag = "#ThisConference";

var donateLink = "https://donorbox.org/women4oceans";

var idstring = "sq11";

var pix = "blank"

var winsoundoff = false;
var losesoundoff = false;

// var idstring = "sqp11";

//Default fallback in case, you know, dragons...
var msg = "I'm playing #GenderBalance Bingo";



var JSONBingo = {"squares": [
        {"square": "<img src='./img/n1.png' class='img-responsive'><span class='sharetxt'>All male panel (manel)</span>"},
        {"square": "<img src='./img/n2.png'  class='img-responsive'><span class='sharetxt'>Mansplaining</span>"},
        {"square": "<img src='./img/n3.png' class='img-responsive'><span class='sharetxt'>Woman interrupted</span>"},
        {"square": "<img src='./img/n4.png' class='img-responsive'><span class='sharetxt'>'Feminist' as pejorative</span>"},
        {"square": "<img src='./img/n5.png' class='img-responsive'><span class='sharetxt'>Ogling</span>"},
        {"square":  "<img src='./img/n6.png' class='img-responsive'><span class='sharetxt'>We tried to find a woman but...</span>"}, 
        {"square":  "<img src='./img/n7.png' class='img-responsive'><span class='sharetxt'>Women ignored</span>"}, 
        {"square":  "<img src='./img/n8.png' class='img-responsive'><span class='sharetxt'>Condescension</span>"}, 
        {"square":  "<img src='./img/n9.png' class='img-responsive'><span class='sharetxt'>'She's smart and beautiful'</span>"}, 
        {"square":  "<img src='./img/n10.png' class='img-responsive'><span class='sharetxt'>Leering</span>"}, 
        {"square":  "<img src='./img/n11.png' class='img-responsive'><span class='sharetxt'>Racial assumptions</span>"}, 
        {"square":  "<img src='./img/n12.png' class='img-responsive'><span class='sharetxt'>No racial diversity</span>"}, 
        {"square":  "<img src='./img/n13.png' class='img-responsive'><span class='sharetxt'>Woman objectified</span>"}, 
        {"square":  "<img src='./img/n14.png' class='img-responsive'><span class='sharetxt'>Inappropriate touching</span>"}, 
        {"square":  "<img src='./img/n15.png' class='img-responsive'><span class='sharetxt'>Presuming maleness</span>"}, 
        {"square":  "<img src='./img/n16.png' class='img-responsive'><span class='sharetxt'>Panel overwhelmingly male</span>"}, 
        {"square":  "<img src='./img/n17.png' class='img-responsive'><span class='sharetxt'>Women referred to as girl</span>"}, 
        {"square":  "<img src='./img/n18.png' class='img-responsive'><span class='sharetxt'>Reference to a woman's appearance</span>"}, 
        {"square":  "<img src='./img/n19.png' class='img-responsive'><span class='sharetxt'>Male dominated discussion</span>"}, 
        {"square":  "<img src='./img/n20.png' class='img-responsive'><span class='sharetxt'>Pet name e.g. Sweetheart</span>"}, 
        {"square":  "<img src='./img/n21.png' class='img-responsive'><span class='sharetxt'>Accused of being un-lady like</span>"}, 
        {"square":  "<img src='./img/n22.png' class='img-responsive'><span class='sharetxt'>Asked about relationship status</span>"}, 
        {"square":  "<img src='./img/n23.png' class='img-responsive'><span class='sharetxt'>But what about men...</span>"}, 
        {"square":  "<img src='./img/n24.png' class='img-responsive'><span class='sharetxt'>Dismissive behavior</span>"},
        {"square":  "<img src='./img/n25.png' class='img-responsive'><span class='sharetxt'>Woman's title dropped </span>"}
    ]
    };
    
var JSONBingoPLUS = {"squaresPLUS": [
        {"squarePLUS": "<img src='./img/p1.png' class='img-responsive'><span class='sharetxt'>Neutral pronouns</span>"},
        {"squarePLUS": "<img src='./img/p2.png' class='img-responsive'><span class='sharetxt'>Moderator treats panelists equally</span>"},
        {"squarePLUS": "<img src='./img/p3.png' class='img-responsive'><span class='sharetxt'>Female professional titles used</span>"},
        {"squarePLUS": "<img src='./img/p4.png' class='img-responsive'><span class='sharetxt'>Good gender ratio panels</span>"},
        {"squarePLUS": "<img src='./img/p5.png' class='img-responsive'><span class='sharetxt'>Uninterrupted female monologue</span>"},
        {"squarePLUS":  "<img src='./img/p6.png' class='img-responsive'><span class='sharetxt'>Zero all-male panels</span>"}, 
        {"squarePLUS":  "<img src='./img/p7.png' class='img-responsive'><span class='sharetxt'>Women are called women</span>"}, 
        {"squarePLUS":  "<img src='./img/p8.png' class='img-responsive'><span class='sharetxt'>Reference to a woman's achievements</span>"}, 
        {"squarePLUS":  "<img src='./img/p9.png' class='img-responsive'><span class='sharetxt'>Racially diverse panels</span>"}, 
        {"squarePLUS":  "<img src='./img/p10.png' class='img-responsive'><span class='sharetxt'>Gender balanced awards</span>"}, 
        {"squarePLUS":  "<img src='./img/p11.png' class='img-responsive'><span class='sharetxt'>Questions taken from women</span>"}, 
        {"squarePLUS":  "<img src='./img/p12.png' class='img-responsive'><span class='sharetxt'>No straying eyes</span>"}, 
        {"squarePLUS":  "<img src='./img/p13.png' class='img-responsive'><span class='sharetxt'>Inclusion</span>"}, 
        {"squarePLUS":  "<img src='./img/p14.png' class='img-responsive'><span class='sharetxt'>No racial assumptions</span>"}, 
        {"squarePLUS":  "<img src='./img/p15.png' class='img-responsive'><span class='sharetxt'>Woman's comment respected</span>"}, 
        {"squarePLUS":  "<img src='./img/p16.png' class='img-responsive'><span class='sharetxt'>Engaging on a woman's achievements</span>"}, 
        {"squarePLUS":  "<img src='./img/p17.png' class='img-responsive'><span class='sharetxt'>Positive networking experience</span>"}, 
        {"squarePLUS":  "<img src='./img/p18.png' class='img-responsive'><span class='sharetxt'>No unsolicited touching</span>"}, 
        {"squarePLUS":  "<img src='./img/p19.png' class='img-responsive'><span class='sharetxt'>Safe environment</span>"}, 
        {"squarePLUS":  "<img src='./img/p20.png' class='img-responsive'><span class='sharetxt'>Woman invited to collaborate</span>"}, 
        {"squarePLUS":  "<img src='./img/p21.png' class='img-responsive'><span class='sharetxt'>Women's leadership celebrated</span>"}, 
        {"squarePLUS":  "<img src='./img/p22.png' class='img-responsive'><span class='sharetxt'>Women's professional expertise sought</span>"}, 
        {"squarePLUS":  "<img src='./img/p23.png' class='img-responsive'><span class='sharetxt'>Female keynote speakers</span>"}, 
        {"squarePLUS":  "<img src='./img/p24.png' class='img-responsive'><span class='sharetxt'>No sexual harassment</span>"},
        {"squarePLUS":  "<img src='./img/p25.png' class='img-responsive'><span class='sharetxt'>Sexual orientation not alluded to</span>"}
    ]    
    };
    
    
// The original version of this app used text instead of images. You can revert to that if you like, but font size
// and hyphenation management across a range of device sizes made me tear my hair out. YMMV. 

// var JSONBingo = {"squares": [
//         {"square": "All male panel (manel)"},
//         {"square": "Man-splained to"},
//         {"square": "Woman interrupted"},
//         {"square": "FisherMEN"},
//         {"square": "Ogling"},
//         {"square": "We tried to find a woman but..."},
//         {"square": "Women ignored"},
//         {"square": "Condescension"},
//         {"square": "'She's smart and beautiful'"},
//         {"square": "Leering"},
//         {"square": "Racial assumptions"},
//         {"square": "No racial diversity"},
//         {"square": "Woman objectified"},
//         {"square": "Inappropriate touching"},
//         {"square": "Presumption of maleness"},
//         {"square": "Panel overwhelmingly male"},
//         {"square": "Women referred to as girl"},
//         {"square": "Reference to a woman's appearance"},
//         {"square": "Male dominated discussion"},
//         {"square": "Pet name e.g. Sweetheart"},
//         {"square": "Accused of being un-lady like"},
//         {"square": "Asked about relationship status"},
//         {"square": "But what about men..."},
//         {"square": "Dismissive behavior"},
//         {"square": "Woman's professional title dropped"}  	
//     ]
//     };    
    
// var JSONBingoPLUS = {"squaresPLUS": [
//         {"squarePLUS": "Neutral pronouns"},
//         {"squarePLUS": "Moderator treats panelists equally"},
//         {"squarePLUS": "Female professional titles used"},
//         
//         {"squarePLUS": "Good gender ratio panels"},
//         {"squarePLUS": "Uninterrupted female monologue"},
//         {"squarePLUS": "Zero all-male panels"},
//         {"squarePLUS": "Women are called women"},
//         {"squarePLUS": "Reference to a woman's achievements"},
//         
//  {"squarePLUS": "Racially diverse panels"},
//  {"squarePLUS": "Gender balanced awards"},
//  {"squarePLUS": "Questions taken from women"},
//  {"squarePLUS": "No straying eyes"},
//  {"squarePLUS": "Inclusion"},
//  {"squarePLUS": "No racial assumptions"},
//  {"squarePLUS": "Woman's comment respected"},
//  {"squarePLUS": "Engaging on a woman's achievements"},
//  {"squarePLUS": "Positive networking experience"},
//  {"squarePLUS": "No unsolicited touching"},
//  {"squarePLUS": "Safe environment"},
//  {"squarePLUS": "Woman invited to collaborate"},
//  {"squarePLUS": "Women's leadership celebrated"},
//  {"squarePLUS": "Women's professional expertise sought"},
//  {"squarePLUS": "Female keynote speakers"},
//  {"squarePLUS": "No sexual harassment"},
//  {"squarePLUS": "Sexual orientation not alluded to"}
//     ]    
//     };    


