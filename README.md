# Denton Stake Family History – Static Site

This is a static site template for the Denton Stake Family History Conference,
designed to be hosted on GitHub Pages.

## Structure

- `index.html` – Home page
- `registration.html` – Registration info
- `events.html` – Events overview
- `classes.html` – Class schedule
- `instructors.html` – Presenter bios
- `materials.html` – Class materials / handouts
- `booths.html` – Booth information
- `directions.html` – Directions to the building
- `building-map.html` – Building map
- `cool-videos.html` – Video links / embeds
- `assets/css/main.css` – Main stylesheet
- `assets/js/nav.js` – Dynamic navigation menu
- `src/scss/main.scss` – Optional Sass entry file (if you want to customize styles with Sass)

The navigation menu is defined once in `assets/js/nav.js` and is injected into
each page's `<nav class="main-nav">` at runtime in the browser.

## Using with GitHub Pages

1. Create a new GitHub repository.
2. Copy all files from this folder into the repository.
3. Commit and push.
4. In GitHub, go to **Settings → Pages**, select the `main` branch and root (or `/docs` if you move files there).
5. Your site will be available at the URL GitHub Pages provides.

## Editing Content

- Update text directly in the `.html` files.
- To change the navigation labels or order, edit `assets/js/nav.js`.

## Optional: Sass

If you want to use Sass locally:

```bash
npm install --save-dev sass
npx sass src/scss/main.scss assets/css/main.css --no-source-map --style=compressed
```

Then commit the updated `assets/css/main.css`.
