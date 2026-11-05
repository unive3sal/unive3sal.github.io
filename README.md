# 邓宇昊 / Yuhao Deng · Personal website

Production: **https://unive3sal.github.io/**

A bilingual, responsive website built with plain HTML, CSS, and JavaScript. No build step or JavaScript dependencies.

## Terminal design

The design combines Hugo Terminal's retro visual language with Astro Cactus's compact, content-first layout. The HTML and CSS are custom implementations. It uses self-hosted JetBrains Mono, warm dark colors, amber and mint palettes, native expandable project descriptions, and a Neovim-inspired status line.

Keyboard navigation supplements visible links and controls:

| Key | Action |
| --- | --- |
| `j` / `k` | Scroll down / up |
| `gg` / `G` | Page top / bottom |
| `:` or `/` | Search commands and sections |
| `Ctrl+K` / `Cmd+K` | Open command palette |
| `?` | Show keybindings |
| `Esc` | Close a dialog |

Page shortcuts are inactive in text fields. Language and palette preferences are stored locally when browser storage is available. Reduced-motion preferences are respected.

## Preview

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/.

## Edit

- `index.html`: Chinese content, semantic markup, navigation, and metadata.
- `script.js`: English translations, preferences, command palette, and keyboard navigation.
- `styles.css`: responsive terminal design, dialogs, status line, and print styling.
- `resume.pdf`: downloadable PDF résumé supplied by the owner, served unchanged as `Yuhao-Deng-Resume.pdf`.
- `assets/`: favicon, social image, and self-hosted fonts.
- `assets/fonts/OFL.txt`: JetBrains Mono font license.

Employer project summaries come from the supplied résumé. No private source repositories are included. The Neovim preference was provided by the owner.

## References

- [Hugo Terminal](https://github.com/panr/hugo-theme-terminal)
- [Astro Cactus](https://github.com/chrismwilliams/astro-theme-cactus)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

## Publish

GitHub Pages publishes the root of `main`. Commit and push changes to `main` to deploy. Check deployment under Actions and Settings → Pages.
