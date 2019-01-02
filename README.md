<<<<<<< HEAD
# cv
## My curriculum in html
this is my Curriculum made entire with HTML5 CSS3 JAVASCRIPT without using
any template and any javascript library.

And guess what? You can use to make you own resume with the same style. Just
fork it, edit the files and enjoy. Here a little guide to personalize
this resume.

###Files Descriptions
+ **css**  *contain the style of the cv*
  - **animation.css** *contain basic animation for show and hide. You can personalize also that*
  - **mygrid.css** *very basic -from scratch- responsive grid. You shouldn't touch it, also because is better to modify the `scss` equivalent
  - **mygrid.scss** *the SASS source of mygrid.css. You should modify it if you need very particular things otherwise I suggest you to leave it like this.
  - **print.css** *stylesheet for printing. see the next one*
  - **print.scss** *the source of print.css . You can change it if you want to change the style of the printing version of the resume.
  - **style.css** *main stylesheet. Touch the SASS equivalent.
  - **style.scss** *the source of the main stylesheet. Here you can change a lot of things to personalize the resume. Enjoy*
+ **img** *Here there are all the pictures of the resume. The name are quite understandable so I will not list all of them. just two important. *
  - **cvhead.png** *you should change it unless you are one of my seven twins scattered in the world*
  - **cvhead_back.png** *you should change also this one especially if you want print your resume. Maintain the proportions if you can.*
  - **icons** *Here there are all the icons for the various entries. You can use it if you like, you can add it and change it. So do whatever you like.*
+ **js** *Here there is the magic.*
  - **data.js** *You will definitely want to change it. Here where you will write you wonderful life. I will explain you later.
  - **minij.js** *This is an attempt to create a smaller JQuery like library. You can tell me your opinion about it*
  - **script.js** *Here there is the brain of the resume. You should take a look and maybe add something cool. If you do it please let me know*
+ **index.html** *The backbone*
+ **README.md** *Oh but this is me*.

###Basic Guide
I will assume that you like the style and you just want to exchange my life with yours. So here what you have to do:
1. Open the **data.js** file. Look at the structure. As you can notice theres is a big object call `data` (so creative). Here 
```javascript
var data = {
  main:  {},
  education: [],
  abroad: [],
  languages:{},
  jobs:[],
  projects : [],
  skills: {},
  interests:{},
```
=======
# civi

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
>>>>>>> initial commit
