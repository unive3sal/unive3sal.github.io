# Yuhao Deng · Personal website

Live: **https://unive3sal.github.io/**

A responsive, bilingual personal website built with plain HTML, CSS, and JavaScript. No build step or JavaScript dependencies are required.

## Preview

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/.

## Edit

- `index.html`: Chinese content, layout, navigation, and metadata.
- `script.js`: English translations and language preference persistence.
- `styles.css`: visual design, responsive layouts, reduced-motion support, and print styling.
- `resume.md`: downloadable English résumé, with the phone number omitted for the public website.
- `assets/`: public GitHub avatar, favicon, and social-sharing image.

Content follows the provided `Yuhao-Deng-Resume.md`. The avatar and GitHub links refer to `unive3sal`. Employer project summaries are derived from the résumé; no private source repositories are included.

## Publish

GitHub Pages publishes the root of the `main` branch. Commit and push changes to update the site. Check the deployment under the repository's Actions tab and Settings → Pages.

The page uses Google Fonts with system-font fallbacks. Core content remains readable without JavaScript; JavaScript enables the English translation and remembers the selected language.
