// NB: HeaderText is used as a variable in LoadTWeet()
var headerText = "Gender Balance This Oceans Conference Bingo";
var headerImage = "<img src='img/banner.jpg' class='img-responsive'>";

var footerText = "A beautiful mischief app from <br /><a href='http://women4oceans.weebly.com/'><img src='img/logo.png' width='25px' height='25px'>Women4oceans</a> and <a href='http://www.dancing-fox.com'><img src='img/df-logo.png' width='25px' height='25px'> Dancing Fox</a>";

var winText = "Everyone WINS!";

var loseText = "Everyone loses..."

var clickSnd = new Audio("audio/click.mp3");

var winSnd = new Audio("audio/win.mp3");

var loseSnd = new Audio("audio/lose.mp3");

var hashtag = "#OceansConference";

var idstring = "sq11";

var msg = "I'm playing Sexist Oceans Conference Bingo"

var JSONBingo = {"squares": [
        {"square": "No women on the panel"},
        {"square": "Man-splaining"},
        {"square": "Woman interrupted"},
        {"square": "Woman not called on"},
        {"square": "'Sweetheart'"},
        {"square": "'Ladies'"},
        {"square": "Presumption of Maleness"},
        {"square": "Ship as 'she'"},
        {"square": "You're so cute when you're angry"},
        {"square": "Victim Mentality"},
        {"square": "We're not here to discuss feminism"},
        {"square": "We tried to find a woman, but..."},
        {"square": "We're gender balanced. Sylvia is here!"},
        {"square": "How few women in the audience joke"},
        {"square": "Clubby males-only joke"},
        {"square": "FisherMEN"},
        {"square": "SeaMEN"},
        {"square": "'Honey'"},
        {"square": "Wife joke"},
        {"square": "Ogling"},
        {"square": "Woman objectified"},
        {"square": "Joke about women at sea"},
        {"square": "She's smart AND beautiful"},
        {"square": "Overt sexualization"},    	
        {"square": "Microphone grabbed away"},    	
        {"square": "Condescension"},    	
        {"square": "Woman's professional title unmentioned"}, 
        {"square": "Panel overwhelmingly male"},    	
        {"square": "Open Harassment"},    	
        {"square": "Leering"}    	
    ]
    };
    
var JSONBingoPLUS = {"squaresPLUS": [
        {"squarePLUS": "All women panel"},
        {"squarePLUS": "Mixed panel"},
        {"squarePLUS": "Woman called upon"},
        {"squarePLUS": "Woman gets applause"},
        {"squarePLUS": "Neutral pronoun"},
        {"squarePLUS": "Diversity mentioned"},
        {"squarePLUS": "Call for equality"},
        {"squarePLUS": "Impact on women cited"},
        {"squarePLUS": "Eye contact"}, 
        {"squarePLUS": "Gender diverse audience"}, 
        {"squarePLUS": "Culturally diverse audience"}, 
        {"squarePLUS": "Not one White European Man on panel"}, 
        {"squarePLUS": "Example of powerful woman cited"}, 
        {"squarePLUS": "Feeling safe"}, 
        {"squarePLUS": "Sense of sisterhood"}, 
        {"squarePLUS": "Sensitive Male"}, 
        {"squarePLUS": "Transgender bathroom"}, 
        {"squarePLUS": "Feminism mentioned"}, 
        {"squarePLUS": "Effort toward gender balance"}, 
        {"squarePLUS": "Inclusive agenda"}, 
        {"squarePLUS": "Gender balance raised by male"}, 
        {"squarePLUS": "FisherFOLK"}, 
        {"squarePLUS": "Moderator treats panelists equally"}, 
        {"squarePLUS": "Microphone given to woman"}, 
        {"squarePLUS": "Inclusive language"}, 
        {"squarePLUS": "Woman's leadership celebrated"}, 
        {"squarePLUS": "Woman's professional expertise sought"}, 
        {"squarePLUS": "Infant in the room"}, 
        {"squarePLUS": "Breast feeding woman? No problem"}, 
        {"squarePLUS": "Healthy airing of issues"} 
    ]    
};
