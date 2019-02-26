# CPL - Characters per Line

This is a simple app that counts the amount of characters that are selected when you click and drag to select text. This is great for being able to count the amount of characters in a line if you are into that type of control over the typography in your web page. 


## Isntall
```
npm i rdmkit-cpl --save-dev
```

## Usage
Use your mouse to select text and get a read-out of the number of characters you have selected. This is helpful if you need to know how many characters are in a line of text. You can also select as much text as you want and it will still tell you how many characters you have selected.

### Example output

![MZR example](https://github.com/brownerd/mzr/blob/master/example.png?raw=true "MZR example")

Here we can see that four measures are highlighted in one line of text: 35, 65, 85 and 105. Now we can use the web inspector to adjust font-size and/or column width to easily arived at the desired line measure.

This is intended to be used for development purposes during the "design-to-code" phase.



## Respect to:
 - [Get an Element's Position Using JavaScript](https://www.kirupa.com/html5/get_element_position_using_javascript.htm)
 - [What is anchorNode , baseNode , extentNode and focusNode in the object returned by document.getSelection?](https://stackoverflow.com/questions/27241281/what-is-anchornode-basenode-extentnode-and-focusnode-in-the-object-returned)
 - [Chrome Extension Tutorial 5: Manipulating DOM with Content Scripts](https://www.youtube.com/watch?v=AQN1CWjHDzg)
 - [How can I set multiple CSS styles in JavaScript?](https://stackoverflow.com/questions/3968593/how-can-i-set-multiple-css-styles-in-javascript/47136113)

