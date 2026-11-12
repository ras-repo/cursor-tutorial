# Square Platformer

A small platform game built with HTML, JavaScript, and [Kaboom.js](https://kaboomjs.com/). The player is a blue square. Platforms are green rectangles.

## Files

- `index.html` loads Kaboom and the game script
- `game.js` creates the player, platforms, and controls

## How to run

Open `index.html` in a browser. Kaboom is loaded from a CDN, so the page needs a network connection.

If the browser blocks the local script, serve the folder instead:

```bash
npx serve
```

Then open the URL it prints.

## Controls

- Move left: Left arrow or A
- Move right: Right arrow or D
- Jump: Space, Up arrow, or W

Jumping works only while the square is standing on a platform. Falling off the bottom of the screen puts the square back at the start.
