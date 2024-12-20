

> Hi 🧑‍🚀




## Project Structure

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## Built with

Astro JS Starter Kit

Inspiration from Blog by GH user nemanjam - check it out

-------------------------------------------------------

## Documentation

Image optimization: 
- <Image> tag is used
- avif format
- width and height provided

3d model optimization:
- adding 3d model basic working example increases GH Pages size by more than 10x
- test attributes and settings from model-viewer web component https://modelviewer.dev/docs/
