# audrey-errsign

> Seed for [audrey-two](https://www.npmjs.com/package/audrey-two) VCCLI (View-Control-Command-Line-Interface) ^v2.0.0


## What this seed does?

Include into your audrey-two-view a line of signs in different colors. Each sign assigned to one intent. Different colors for success, error and warning.

## Specifications

Audrey-two version 2.0.0 change the way of control your CLI-views. The tags, now replaced by custom audrey-seeds that you can include or not in your projects.

This node-module redefine the older audrey-two taggy "%". Now you can use it again with audrey.

## Install

Example
```
$ npm install --save audrey-two
  npm install --save audrey-errsign
```
## Usage

Example

```js
var myTerminalDisplay={
	header:["%%signline"],//tell audrey where you want to display it
	signline:"$",//tell audrey what symbol use
	colors:{warning: "yellow", 
		 	error: chalk.red.bold,
			success: "green", }//tell audrey wich color use
};

var audrey2= require('audrey-two');
var audrey= audrey2(myTerminalDisplay);

//run your command and pass error objects to audrey

audrey.seed(["audrey-errsign-%%"]);
//tell audrey that there is a new seed
audrey.err("E01","I'm an eror..");
/* pass an error to audrey
 * if first param start in "W"--> print in yellow
 *  "   "     "     "   "  "E"-->   "    "  red
 *  "   "     "     "   "  "S"-->   "    "  green
 */
audrey.encore();//run audrey
```
