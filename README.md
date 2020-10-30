# Mr. Roboger's Neighborhood

## Counts up to a given number with some Beeps and Boops inbetween!, 10-30-2020

### Ben McFarland

Take in a user inputted number and returns a list counting up to that number with any number with a 1 changing to "Beep" every number with a 2 to "Boop" and every number with a 3 to "Won't you be my neighbor?"

## Setup/Installation Requirements

#### Using Terminal/Command Line:
* Open your machine's Terminal or Command line
* Using the Terminal/Command line, navigate to the location you would like this project
* Enter the command: `git clone https://github.com/harzulu/mr-robogers.git`
* To open the project in your default browser, enter the command: `open index.html`

#### Downloading From GitHub:
* Click the green "code" button to the top right
* Click "Download ZIP"
* Open the zip file in your downloads folder
* Move the folder "mr-robogers" to your desired location
* Double click the "index.html" file to open the project in your default browser

#### To View Live Project Online:
The live version is at this link:
[https://harzulu.github.io/mr-robogers/]

## Known Bugs/Issues

There are no known bugs or issues.

## Support and Contact Details

Contact me at:
benrmcfarland@gmail.com

## Tests

Describe: makeArray()
Test: "It should make an array 0 to the inputed number"
Expect(makeArray(10).toEqual[0,1,2,3,4,5,6,7,8,9,10]);

Describe: giveBeeps()
Test: "It should change the number 1 to "beep!""
Expect(makeArray(10).toEqual[0,"beep!",2,3,4,5,6,7,8,9,10]);

Describe: giveBoops()
Test: "It should change the number 2 to "boop!""
Expect(makeArray(10).toEqual[0,"beep!","boop!",3,4,5,6,7,8,9,10]);

Describe: giveNeighbors()
Test: "It should change the number 3 to "won't you be my neighbor?""
Expect(makeArray(10).toEqual[0,"beep!","boop!","won't you be my neighbor?",4,5,6,7,8,9,10]);

Describe: allBeeps()
Test: "It should change all numbers with the number 1 to "beep!""
Expect(makeArray(10).toEqual[0,"beep!","boop!","won't you be my neighbor?",4,5,6,7,8,9,"beep!"]);

## Technology Used

* Microsoft Visual Studio Code
* HTML
* CSS
* JavaScript
* jQuery
* Bootstrap
* Git/Github

## Licenseing and Copyright

This project is licensed under the GPL license.

Copyright (c) 2020 Benjamin McFarland