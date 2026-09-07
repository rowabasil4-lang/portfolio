# Roaa Basil, graphic design portfolio

A single-page portfolio site. No build step, no frameworks, no dependencies.
Open `index.html` in a browser and it works.

```
portfolio-site/
├── index.html            the page
├── .nojekyll             tells GitHub not to process the files
├── assets/
│   ├── style.css         all the styling
│   ├── works.js          THE WORK LIST, edit this to add pieces
│   ├── i18n.js           every word on the page, English and Arabic
│   ├── main.js           language switch, grid, lightbox, dark mode
│   ├── Roaa-Basil-CV.pdf the CV the buttons link to
│   ├── work/             full size images
│   └── thumbs/           smaller copies used in the grid
└── source/
    └── Rowa_Basil_Yassin_CV.docx   the editable CV, not used by the page
```

The site opens in **English**. The globe button in the top corner switches
to Arabic, flips the layout right to left and re-types the whole page in
Amiri and IBM Plex Sans Arabic. The choice is remembered for the next visit.

---

## Going live

The code is already pushed to
[github.com/rowabasil4-lang/portfolio](https://github.com/rowabasil4-lang/portfolio).
**One switch is left, and it has to be flipped by hand:**

1. Open the repository, then **Settings**, then **Pages** in the left sidebar.
2. Under *Build and deployment*, set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and the folder to `/ (root)`, then **Save**.
4. Wait two or three minutes.

The site then lives at **https://rowabasil4-lang.github.io/portfolio/** ,
which is the address printed on the CV.

### Pushing later changes

```bash
git add -A
git commit -m "Add new work"
git push
```

Pages redeploys on its own within a minute or so of every push.

**If a change does not show up**, it is almost always the cache, not the
push. GitHub serves these files with a ten minute cache, so a browser that
visited recently keeps using the old copy. Two things help:

- To check what is really live, hard reload: **Ctrl+Shift+R** on Windows,
  **Cmd+Shift+R** on a Mac. On a phone, open the link in a private tab.
- The script and stylesheet tags in `index.html` all end with `?v=` and a
  number. **After renaming or deleting an image, or editing the wording in
  `i18n.js`, raise that number by one in all four tags** and push. That makes
  every visitor fetch the matching files together, instead of pairing a new
  page with an old work list and showing broken images or stale labels until
  the cache expires.

### Moving it to her own account

Nothing in the site hardcodes the address, because every link is relative.
Create a repository on her account, push the same files, turn Pages on the
same way, and the only thing that needs editing is the URL printed on the CV
(`source/Rowa_Basil_Yassin_CV.docx`).

---

## Adding a new piece of work

1. Save the image into `assets/work/`. Keep the filename simple and lowercase,
   for example `06-cafe-identity.jpg`.
2. Save a smaller copy into `assets/thumbs/` under **exactly the same
   filename**, around 900 pixels on the long edge. This is what keeps the page
   loading quickly. Any image resizer will do it.
3. Open `assets/works.js` and copy one of the existing blocks, then change:

```js
  {
    file: "06-cafe-identity.jpg",
    title: { en: "Cafe identity",       ar: "هوية مقهى" },
    cat:   { en: "Branding / Identity", ar: "هوية بصرية" },
    note:  { en: "One or two sentences about what the piece had to do and how you solved it.",
             ar: "جملة أو جملتان عن المطلوب من العمل وكيف حللتِه." },
    tag:   { en: "Client work",         ar: "عمل لعميل" },
    alt:   { en: "A plain description of the image, for people using a screen reader.",
             ar: "وصف بسيط للصورة لمن يستخدم قارئ الشاشة." }
  },
```

Keep the comma at the end of every block except the last one. Newest work
goes at the top. The numbering on the page updates itself.

If you write only the English half, the Arabic view quietly falls back to it,
so an unfinished translation never leaves a blank on the page.

**Write the `note` about the thinking, not the picture.** Anyone hiring can
see what the poster looks like. What they cannot see is why the type sits
where it sits. That sentence is the reason a portfolio gets someone a job.

---

## Changing the words

Every visible string on the page lives in `assets/i18n.js`, in both
languages, side by side. Edit it there rather than in `index.html`, or the
next language switch will overwrite what you typed. Keys ending in `Html`
may contain tags like `<strong>`.

| What | Where in `i18n.js` |
| --- | --- |
| Name in the headline | `heroNameHtml` |
| Intro paragraph | `heroLede` |
| About section | `aboutP1Html`, `aboutP2Html`, `aboutP3Html` |
| Skills and background lists | `do1` to `do5`, `bg1` to `bg4` |

Two things are **not** in `i18n.js` because they are the same in every
language. Both are in `index.html`, and each appears more than once, so
change every copy:

- the email address, `rowa.basil4@gmail.com`
- the phone number, `+964 775 153 9099`

Colours live in the `:root` block at the top of `assets/style.css`. The site
follows the visitor's system setting for light or dark, and the button in the
corner overrides it.

---

## Two things to decide before sharing it

**The name.** The CV says Rowa Basil Yassin, the portfolio PDF says Roaa
Basil. The site currently uses Roaa Basil in English and رؤى باسل in Arabic.
Both spellings are a guess from the documents, so confirm them, then use the
same pair everywhere including the email signature. Employers search for a
name, and a person's own name is the one detail nobody should be guessing.
They live in `i18n.js` as `brandName`, `heroNameHtml`, `footA` and
`docTitle`.

**The two brand pieces.** The Galaxy poster and the Detective Conan
composition are labelled as a concept and as non-commercial fan work, which
is how they should stay. It is normal and expected to show speculative work
this way. It is not fine to let it read as a real client job.
