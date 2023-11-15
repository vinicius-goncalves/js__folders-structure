<h1 align="center">Folders Structure</h1>
<p align="center">A project of studies when  recursive functions.</p>

<div align="center">
	<img alt="js logo" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
	<img alt="html5 logo" src="https://img.shields.io/badge/HTML%205-323330?style=for-the-badge&logo=html5">
	<img alt="css3 logo" src="https://img.shields.io/badge/CSS3-323330?style=for-the-badge&logo=css3&logoColor=007ACC">
</div>

<br/>

<div align="center">
	<img alt="example of the folder structures project" title="Screenshot of the project" src="https://live.staticflickr.com/65535/53332786946_df7940de20_c.jpg" />
</div>

## Introduction
One day I was thinking to myself how hard it could be to create a folder structure system, like ```VS Code``` - and then one day I decided to start this, and I bet with you it was one of the best (and the coolest) project I've coded - and this was great because I could learn a lot of about recursion and data structure. In the future, I hope to refactor this project with TypeScript.

## Installation
This project does not require anything else but your browser. Then, use your favorite browser to try it out. If you want to clone this repository, use the following command:

> git clone https://github.com/vinicius-goncalves/folders-structure

## How it works?
Inside of ```assets``` directory, there is a file named ```structure.js``` that contains the logic of the whole structure. Let's go deeper to see some examples:

### Structures example
1. This initial structure must exist.
```js
const structure = [
    {
        type: Types.Folder,
        name: 'languages',
        content: [
            { types: Types.File, name: 'html' },
            { types: Types.File, name: 'css' },
            { types: Types.File, name: 'js' },
        ]
    }
]
```

2. This is a folder inside another folder, for example.
```js
//[...]
type: Types.Folder,
name: 'database',
content: [
	{
		type: Types.File,
		name: 'mongodb'
	},
	{
		type: Types.File,
		name: 'sql'
	},
	{
		type: Types.File,
		name: 'firestore'
	}
]
//[...]
```

3. This represents an empty folder inside another folder:
```js
//[...]
//An empty folder does not need to have a "content" property, this will be defined automatically.
{
	type: Types.Folder,
	name: 'empty-cool-folder'
}
//[...]
```

**ATTENTION** to those details:

- The ```structure``` must be initialized as an array, because the ```structure``` is going to be iterated through the role object (array) by a recursive function inside the ```app.js```.
- A single file (or folder) is an object with the following properties:
	- ```type``` (must exist) - it's the 'type' (more details below) of the file;
 	- ```name``` (must exist) - the name of the file;
 	- ```content``` (optional) - it's the content of the folder, but is just used when ```Types.Folder``` is used too.
- The ```type``` property is a type of ```Types.js```, inside the ```utils``` directory, meaning:
  	- ```Folder``` - represents a folder;
  	- ```File``` - represents a file;
  	- ```Empty``` - used when ```content``` is undefined **AND** the file type is ```Types.Folder```;
  	- ```Other``` (for testing purposes).
- Even if a ```content``` has **JUST** a single content an ```array``` must be used, but this is not a requirement if you want the content to be an empty folder. There is a function that adds ```Types.Empty``` for all contents that fit in the previous requirements (it's the same thing in the "3" structure example).

You can see the best example of the structure inside the ```assets``` > ```structure.json``` directory.

## Online test
If you want to try it out, you can do this online through this link: [https://jcd18.vinicius-goncalves.com][project-href] (the `index.html` is localized into the folder ```html```).

## Finishing

That's all for this project, I just want to say thank you for reading this!

[comment]: #badges
  [js-badge]: <https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E> "JavaScript Logo"
  [html-badge]: <https://img.shields.io/badge/HTML%205-323330?style=for-the-badge&logo=html5> "HTML"
  [css-badge]: <https://img.shields.io/badge/CSS3-323330?style=for-the-badge&logo=css3&logoColor=007ACC> "CSS"
[comment]: #badges

[comment]: #links
  [project-href]: <https://jc1d8.vinicius-goncalves.com/html/index.html> "Folders Structure"
  [image-href]: <https://drive.google.com/file/d/16wlcPI1dxQkDEnBTYolRh32gKRAKLK7x/view?usp=sharing> "Image"
[comment]: #links
