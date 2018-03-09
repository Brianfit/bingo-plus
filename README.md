#Gender Balance Bingo

---
A Cordova fork of [J. Hobbs HTML-5 Bingo](https://github.com/jeffehobbs/HTML5-bingo)
By Brian Fitzgerald


WHAT IT IS:

* A Bullshit Bingo Game for Conferences (In this example, a Gender Equality theme)
* A two-sided bingo board, Positive and Negative, with animated flip
* Randomizes content on each load
* Allows user to set a default hashtag (usually the official conference tag)
* Allows user to share each move on social media 

* Reads square data from the data.js file
* Accepts board tiles images: 250x250 png files
* Uses data attributes to check for win condition
* Uses CSS transitions for animation
* Uses Bootstrap for responsive design on mobiles and tablets
* Uses HTML5 audio for UI feedback
* Uses jquery.tappable.js to improve UI performance on mobile

HOW TO USE:

All the data you want to change to customise is kept in the "data.js" file. The tile images, logo, and top banner files are in www/img. Customize the .json in the data.js file to change the board to your own tiles, 
change the default hashtag, and change the branding and title images.

Compiled Examples:
ios version: https://itunes.apple.com/us/app/timesup-bingo/id1350243074?ls=1&mt=8
android version: https://play.google.com/store/apps/details?id=net.brianfitzgerald.bingo

NB:
You can test much of the functionality and layout in a desktop browser, but be aware the "Set Hashtag" and "Share Move" buttons 
only work in a Cordova-compiled environment. Best to compile the code as an iOS or Android app and test these functions on a 
live device or emulator. 


