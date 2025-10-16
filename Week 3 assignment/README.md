This README is for the compare and contrast of both Manual and Bootstrap implementations. 
Below is the assignment itself, some feedback I got from my first assignment, and the coding from the slides needed to complete this assignment.
I have sorted the coding as BOOTSTRAP and MANUAL so I know which peice of code came from what slide and how I can reference 
------------------------------------------------------------------
Assignment 3 notes!
Manual vs Bootstrap Implementation
Due: Next Thursday
📋 Your Mission: Create TWO Versions of Your Portfolio

    Version 1: Manual Responsive Design
    Take your Assignment 1 portfolio and manually add responsive features using:
        Media queries (@media)
        Flexible images (max-width)
        Viewport units (vw, vh)
        CSS Grid or Flexbox
    Version 2: Bootstrap Responsive Design
    Create a second version using Bootstrap 5 to handle responsiveness:
        Bootstrap grid system
        Bootstrap components
        Bootstrap utilities
    ReadMe.md: Compare & Contrast
    Write a detailed comparison of both approaches

📱 Required Breakpoints (Minimum 3 Sizes):

Mobile: 320px - 767px
Tablet: 768px - 1023px
Desktop: 1024px and above
----------------------------------------
Assignment 1 notes:
- DIRECTORY STRUCTURE: 4.5/5 : You html file should have a .html extension at the end.
- CONTENT QUALITY: 7/10 : a single html file should have only one html tag in the entire file
----------------------------------------

Other Assignment 3 notes!!

Getting Started - Add One Line!

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
      rel="stylesheet">
                
Key Concept: Bootstrap uses classes to style elements
Just add class names to your HTML elements!


The Most Important Meta Tag!
What Each Part Means:

    width=device-width - Sets the viewport width to match the device's width
    initial-scale=1.0 - Sets the initial zoom level (1.0 = no zoom)

 <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
Remember: Add this to EVERY HTML page in the <head> section!

Using Viewport Units
Viewport units make text size relative to the browser window size!
<h1 style="font-size: 5vw;">I Scale With The Window!</h1> <p style="font-size: 2vw;">So do I!</p>
Viewport Units Explained:

    vw = Viewport Width (1vw = 1% of viewport width)
    vh = Viewport Height (1vh = 1% of viewport height)
    vmin = Smaller of vw or vh
    vmax = Larger of vw or vh


The Power of Responsive CSS
Media queries apply different CSS styles based on device characteristics!
/* Default styles (mobile-first approach) */ .container { width: 100%; padding: 10px; } /* Tablet styles (768px and up) */ @media screen and (min-width: 768px) { .container { width: 750px; padding: 20px; } } /* Desktop styles (1024px and up) */ @media screen and (min-width: 1024px) { .container { width: 960px; padding: 30px; } } 

Common Breakpoints:

    📱 Mobile: 0 - 767px
    📱 Tablet: 768px - 1023px
    💻 Desktop: 1024px and up
    🖥️ Large Desktop: 1440px and up

Mobile-First vs Desktop-First:

Mobile-First uses min-width (recommended!)
Desktop-First uses max-width

/* Mobile: Stack vertically */ .column { width: 100%; margin-bottom: 20px; } /* Tablet: Two columns */ @media (min-width: 768px) { .column { width: 50%; float: left; } } /* Desktop: Three columns */ @media (min-width: 1024px) { .column { width: 33.33%; } } 
------------------------------------------------------------------

