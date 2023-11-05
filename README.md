# AniNet
A web application to discover, search and explore anime titles with detailed information using JikanAPI

## Table of contents

- [Overview](#overview)
  - [Links](#links)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

Welcome to AniNet, an online platform designed to help you explore, discover, and delve into the world of anime. AniNet is a web application created with the goal of providing an immersive experience for anime enthusiasts. This platform offers detailed information about various anime titles, allowing you to search for your favorites, discover new shows, and explore comprehensive insights.
Whether you're seeking information on anime plots, release dates, or ratings, AniNet has you covered. Our user-friendly interface ensures easy navigation and access to the wealth of anime-related content.
So, come and immerse yourself in the fascinating realm of anime with AniNet.

### Links

- Solution URL: [AniNet Solution](https://github.com/ioangheraszim/AniNet)
- Live Site URL: [AniNet Live](https://ioangheraszim.github.io/AniNet)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size ✔️
- See hover states for all interactive elements on the page ✔️
- Be able to navigate to different pages ✔️
- Pass anime data to description data page ✔️
- Pass anime data to bookmark page by pressing the bookmark button ✔️
- Save the anime in local storage when bookmarking the anime ✔️
- Toggle viewed or not viewd anime on the bookmark page ✔️
- Delete the bookmarked items from the bookmark page✔️
- Fetch Jikan Api data to display anime data for (anime and characters) ✔️
- Search up the fetched anime data by typing name in an input field and display them on a search page ✔️
- Make pagination work to display anime on different pages ✔️
- A button to scroll up to the top of the page when clicked ✔️

### Screenshot

- Desktop Screenshots
  <p float="left">
    <img src="./src/assets/images/aninet-desktop.png" />
  </p>

## My process

The development process for this application involved extensive research into the JikanAPI documentation, data fetching from the API, and the use of Tailwind CSS for styling. Similar to my previous projects, I began by organizing the folder structure and installing the necessary packages. I then started styling the application according to a design that evolved during the development.

Setting up the project, including routers, context, and pages, went smoothly due to my prior experience. However, I encountered a challenge while fetching data – the process would either crash or fail to load due to a rate limit issue. After researching the problem, I discovered the rate limit was causing the trouble and needed to find a solution. Implementing a rate limiter was challenging, but with the help of ChatGPT, I managed to build one successfully.

I imported additional API requests that worked well, though I had to deal with rate limits by making multiple fetch attempts and creating a loading screen. This experience improved the application's performance and user experience moving forward.

Despite implementing the rate limit with the assistance of ChatGPT, the application occasionally encountered error 429. However, the rate limit significantly mitigated this issue, resulting in more reliable data loading.

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What i learned

I've picked up a lot about how fetching data works and the hurdles posed by rate limits in some APIs. Despite these challenges, I managed to find the solution that kept my application running smoothly.

### Useful resources
- [JikanAPI](https://jikan.moe/) - JikanAPI documentation used in developing this application

## Author

- Website - [Ioan Gheraszim](https://github.com/ioangheraszim)