# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./images/screencapture-stephany247-github-io-time-tracking-dashboard-main-2024-12-27-08_42_30.png)
![](./images/screencapture-stephany247-github-io-time-tracking-dashboard-main-2024-12-27-08_43_16.png)

### Links

- Solution URL: [Solution URL here](https://github.com/stephany247/time-tracking-dashboard-main)
- Live Site URL: [Live site URL](https://stephany247.github.io/time-tracking-dashboard-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/docs/installation) - For styles
- Javascript

### What I learned

In this project, I had the opportunity to explore several core JavaScript concepts and improve my skills in working with dynamic data. The main focus was on:

1. Fetching Data: I learned how to use the fetch() function to retrieve data from an external JSON file and handle asynchronous operations with Promises using .then() and .catch() for error handling.

```js
function updateData(timeframe) {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      // Process data and update the DOM
    })
    .catch((error) => console.error("Error fetching data:", error));
}
```

2. Manipulating DOM Based on Data: I explored how to dynamically update the DOM by using forEach() to loop through elements and modify their content based on the fetched data.

```js
cards.forEach((card, i) => {
  const currentHours = card.querySelector(".current-hours");
  const previousHours = card.querySelector(".previous-hours");

  currentHours.textContent = `${data[i].timeframes[timeframe].current}hrs`;

  const timeframeText = {
    daily: "Last day",
    weekly: "Last week",
    monthly: "Last month",
  };

  previousHours.textContent = `${timeframeText[timeframe]} - ${data[i].timeframes[timeframe].previous}hrs`;
});
```

3. Initial Page Load: I also implemented functionality to load data on page initialization, ensuring that the correct data is displayed as soon as the page loads.

```js
document.addEventListener("DOMContentLoaded", () => {
  updateData("daily");
});
```

### Continued development

I plan to focus on gaining more experience with advanced JavaScript, particularly mastering concepts. Additionally, I want to deepen my understanding of JavaScript frameworks like React, including state management, hooks, and component lifecycle. This will help me build more dynamic and efficient applications in the future.

### Useful resources

- [Tailwind CSS](https://tailwindcss.com/docs/installation) - I found helpful solutions for CSS issues, like handling hover effects and box shadows, which were crucial for implementing the card design in this project.

## Author

- Website - [Onyinye Stephanie Oguocha](https://www.your-site.com)
- Frontend Mentor - [stephany247](https://www.frontendmentor.io/profile/stephany247)
- Twitter - [@stephanyoguocha](https://x.com/stephanyoguocha)

## Acknowledgments

I would like to give a big thanks to the Frontend Mentor community and the resources on Stack Overflow for helping me troubleshoot and improve my project.
