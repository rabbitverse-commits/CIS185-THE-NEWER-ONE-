# CIS185-THE-NEWER-ONE-
# HTML Elements Exploration Assignment

**Student Name:** Marian Bambaloff  
**Course:** CIS 185
**Assignment One:** HTML Elements Challenge  
**Date:** October 1-2, 2025

## Project Overview

This project demonstrates the use of various HTML elements beyond the basic ones covered in class. I've created an extended web page that showcases different HTML elements and their functionality, along with custom CSS styling.

## HTML Elements Implemented

### 1. `<button>` (Styled)
**Purpose:** Creates clickable buttons for user interaction  
**How I used it:** Added interactive buttons with hover effects that people could click for fun. I have no idea what they're for yet...
**Why it's useful:** Provides clear call-to-action elements that are accessible and customizable. But also, pressing buttons are fun.

```html
<button type="button">Click Me!</button>
```

### 2. `<details>` (Styled)
**Purpose:** Creates collapsible content sections.
**How I used it:** Created an expandable section where users can click to reveal what kind of plans I have for this site. I made it fancy too! (Or tired too)
**Why it's useful:** Saves space on the page while organizing content in a fun, interactive way! :D I also made it pretty, or as pretty as I can make it for now...

```html
<details>
    <summary>What is HTML?</summary>
    <p>HTML stands for HyperText Markup Language...</p>
</details>
```

### 3. `<figure>` and `<figcaption>`
**Purpose:** Adds a visual to the words nearby, or perhaps to break up large blocks of text.  
**How I used it:** Images!!! Added a fun image with a descriptive caption below it. 
**Why it's useful:** Provides a description of the selected image for accessibility.

```html
<figure>
    <img src="web-development.jpg" alt="Person coding">
    <figcaption>A developer working on a web application</figcaption>
</figure>
```

### 3. `<meter/progress>`
**Purpose:** Displays the completion progress of a task  
**How I used it:** I used it as a way to showcase the progress of how mush farther until this site is completed.
**Why it's useful:** Visually represents completion or loading states without JavaScript.

```html
<progress value="75" max="100">75% Complete</progress>
```

```html
<meter value="8" min="0" max="10">8 out of 10</meter>
```

### 4. `<section/footer>`
**Purpose:**   
**How I used it:** I used it much similiar to the details element, where I put additional info about the site and what I want to do with it.
**Why it's useful:** It's useful for additional information users want to read.

### 5. `<video (if there was time)>`
**Purpose:** Displays a video the user is allowed to click on and watch  
**How I used it:** This was just for fun. I don't plan on making a very serious website, so I had fun picking out the video I wanted.  
**Why it's useful:** Depending on what project is to be done, I now have the skills to imbede a video into the code.



## CSS Styling Applied

I applied custom styling to the following elements:

- **`<details>`**: Added border-radius, padding, and background colors
- **`<progress>`**: Customized the progress bar colors and dimensions  
- **`<button>`**: Created hover effects with color transitions
- **`<figure>`**: Added shadows and responsive sizing

## Learning Outcomes

Through this assignment, I learned:

1. **Semantic HTML importance** - Using the right element for the right purpose improves accessibility
2. **Interactive elements** - HTML can provide user interaction without JavaScript
3. **Content organization** - Elements like `<details>` and `<figure>` help structure content meaningfully
4. **CSS integration** - How to style newer HTML5 elements effectively

## Challenges Encountered

- **Browser compatibility**: Some elements like `<details>` have limited styling options
- **Accessibility**: Ensuring proper labels and descriptions for screen readers
- **Responsive design**: Making sure elements work well on different screen sizes

## Resources Used

- [MDN HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)


## Files Included

- `index.html` - Main HTML file with all implemented elements
- `README.md` - This documentation file

## How to View

1. Clone this repository
2. Open `index.html` in any modern web browser
3. Interact with the various elements to see their functionality

---
