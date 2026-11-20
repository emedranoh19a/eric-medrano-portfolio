# Chat app CSS Illustration Solution

This is my solution to the [Chat app CSS illustration challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

![](./design/desktop-preview.jpg)

## Table of contents

- [Chat app CSS Illustration Solution](#chat-app-css-illustration-solution)
  - [Table of contents](#table-of-contents)
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

The challenge was to build this feature illustration with HTML and CSS, as close to the design as possible. The only assets provided were the person in the app UI and the 3 dog photos. I created everything else myself.

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- **Bonus**: See the chat interface animate on the initial load

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- [Motion (Framer Motion)](https://motion.dev/) - For the staggered animation

### What I learned

The illustration itself was easy with my current CSS knowledge. The hard part was working with Figma at a scale of less than one pixel. It was my first time translating figures with that precision.

**`transform-origin` is a door hinge.** Pick the pivot first, and the rotation draws exactly the curve you want. I built the back arrow from two rotated halves:

```tsx
// Style: each half pivots from its own edge
const iconTopHalf = cn(
  "bg-white rounded-t-full absolute h-[150%] w-1/2",
  "rotate-25 origin-top top-0 right-0",
)
```

**Staggers can be nested.** The dog row is a child of the chat and a parent of its own photos:

```tsx
// Logic: the dog row is a child AND a parent
const dogRow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
```

**Bubbles can pop from their own corner:**

```tsx
// Note: bubbles pop out from their own corner
style={{ originX: variant === "us" ? 0 : 1, originY: 1 }}
```

I also gave up on the icon in the message bar because I ran out of time during my recess. I put a simple arrow (the Japanese character →) in its place.

### Continued development

This was my first time exploring staggered animations. The challenge only asked for the illustration in plain CSS, but the animation makes the React components feel like they were made in After Effects. Next, I want to design motion graphics from scratch, and not just follow a recipe. I'll also come back and draw the missing send icon.

### Useful resources

- [Tailwind CSS - Transform Origin](https://tailwindcss.com/docs/transform-origin) - This helped me build the little icons.
- [Motion - Stagger](https://motion.dev/docs/stagger) - This helped me understand how parent and child variants work together.

## Author

- Website - [Eric Medrano](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

Thank you to Claude, who helped me with the Framer Motion staggered animation and explained parent and child variants step by step.
