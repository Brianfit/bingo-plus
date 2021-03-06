# Gender Balance Bingo

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

All the data you want to change to customise is kept in the "data.js" file in www/js. Customize the .json in the data.js file to change the board to your own tiles, 
title, share text, and change the default hashtag.  Change the branding and title images in www/img.

Compiled Examples:
ios version: https://itunes.apple.com/us/app/timesup-bingo/id1350243074?ls=1&mt=8
android version: https://play.google.com/store/apps/details?id=net.brianfitzgerald.bingo

NB:
You can test much of the functionality and layout in a desktop browser, but be aware the "Set Hashtag" and "Share Move" buttons 
only work in a Cordova-compiled environment. Best to compile the code as an iOS or Android app and test these functions on a 
live device or emulator. 

![Screenshot 1](https://github.com/Brianfit/bingo-plus/blob/master/screenshots/1.png?raw=true)
![Screenshot 2](https://github.com/Brianfit/bingo-plus/blob/master/screenshots/2.png?raw=true)
![Screenshot 3](https://github.com/Brianfit/bingo-plus/blob/master/screenshots/3.png?raw=true)
![Screenshot 4](https://github.com/Brianfit/bingo-plus/blob/master/screenshots/4.png?raw=true)
![Screenshot 5](https://github.com/Brianfit/bingo-plus/blob/master/screenshots/5.png?raw=true)

