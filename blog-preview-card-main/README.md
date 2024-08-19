# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview


### Links

- Solution URL: [](https://github.com/mts-ml/development/tree/main/blog-preview-card-main)
- Live Site URL: [](https://mts-ml.github.io/development/blog-preview-card-main/index.html)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

Although it's a simple project, I got stuck because my font size wouldn't update in resolutions higher than 992px. This happened because I had set the media query rule for my <h1> before the default one. CSS reads and applies styles from top to bottom, so if you have conflicting styles, the one defined last will override the previous ones, assuming they have the same specificity.

It took me some time to realize the mistake and fix it, but it was a learning experience.


## Author

- Website - [Linkedin](https://www.linkedin.com/in/mateus-lima-036790184/)
- Frontend Mentor - [@mts-ml](https://www.frontendmentor.io/profile/mts-ml)
