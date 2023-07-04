Balloon Popper Game

Experience Balloon Popping Fun in pop-tastic style!

PP2 Jalal Semaan

![am I responsive screenshot](assets/images/amiresponsive.png)

**[Live site](https://jjsemaan.github.io/balloon-popper/index.html)**

------------------------------------------------------------------

**[Repository](https://github.com/jjsemaan/balloon-popper.git)**

------------------------------------------------------------------


## Features

### Desktop and Mobile Devices

* Intuitive Homepage
  * Includes clear game title, playing instructions and an options form present in the centre of the screen.
  * The form captures and validates the player's preferred nickname and enables gaming options including preferred difficulty level and sound On/Off.
  * The form allows players to navigate intuitively between difficulty levels without any interruptions on any size device.
  * See below image of Home Page.

![Home Page](assets/images/intuitive-navigation.jpg)

* Footer
  * Allows players to visit the developers website.

* Gaming pages
  * There are three gaming pages, one page representing each of the difficulty levels 'Easy', 'Medium' and 'Hard'.
  * Each gaming page includes a responsive top menu containing the player's nickname, difficulty level and score.
  * At the end of each game a modal pop up window with two buttons will appear providing the player with the option to either play again or go back to the homepage.
  * See below image.

![Gaming Features](assets/images/gaming-features.jpg)

* Sound
  * Sound is optional and user-enabled by a dropdown selector.
  * The sound option provides means to further engage with the game, balloon popping sounds deffer by the score associated with particular balloons colours. 
  * Accordingly, a red ballons sounds like an error and scores -1 point if popped, the red heart balloon sound like a double pop and scores +2 points when popped, whereas any other balloon colour sounds like a normal balloon pop and scores +1 point at a time. 

* Scoring
  * A score counter is visible on the top menu.
  * Scores '+1', '-1' and '+2' are graphically overlaid on their designate balloons to enable informed decision making the the player. 
  * See below image of ballon score points.

  ![Balloon Scores](assets/images/balloon-scores.jpg)

* Favicon
  * This will appear site-wide on the top left corner of the website tab in any browser to enable easy identification especially when multiple tabs are open.

![Favicon](assets/images/favicon.jpg)

* 404 Page
  * The 404 page will appear if a site visitor enters a broken link.
  * This page includes a home button that will take the visitor back to the home page.
  * The footer remains enabled in the 404 page with a hyperlink to the developers website.

![404](assets/images/404page.jpg)

## Existing Features

* Website is fully responsive and works of all devices.
* Gaming is available in three difficulty levels where balloon will change position faster as it gets harder.

## Features Left to Implement


* Encouragement notifications such as 'Great job! Now try to play the Hard." could be added to the moday.
* As the speed of the game is increasing by difficulty level, the number of balloons could be increased.
* A high scores championship board could be added.
* More info can be added about the game developers.
* A login feature should be added for frequent players.

## Technology

> HTML (Hyper Text Markup Language) <br> Used for creating the structure and content of web pages, providing a framework for organising code for a website.

> CSS (Cascading Style Sheets) <br> Commonly used to define the visual appearance and layout of web pages, including colors, fonts, spacing, and positioning.
  
> JavaScript <br> A versatile programming language that adds interactivity and dynamic functionality to websites.

> IDE Codeanywhere (Integrated Development Environment) <br> An online IDE that allows developers to code, collaborate, and deploy their projects provided an internet connection.

> Git <br> A version control system that provides both a command-line interface (CLI) and a graphical user interface (GUI) for managing and interacting with repositories.
> Font Awesome <br> A popular icon library and toolkit that provides a wide range of scalable vector icons that can be easily customised and used in web development projects.

## Testing

* Testing was performed by developer Jalal Semaan on two main browsers Microsoft Edge and Google Chrome.

### Testing for links and Form

| Test |Outcome  |
|--|--|
|Nickname input works and appears in top menu of gaming pages| Pass|
|Difficulty dropdown works as selected| Pass|
|Sound On / Off dropdown works as selected| Pass|
|Start Game button leads to corresponding difficulty pages| Pass|
|Footer link to developers website works | Pass|
|Popup modal appears at Game Over| Pass|
|Form Validation presents when incorrect input type is entered | Pass|

