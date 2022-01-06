# Theme Structure

The theme is organized with the following file structure:

```
.
├── LICENSE
├── README.md
├── assets
│   ├── css
│   │   ├── 404.css
│   │   ├── account.css
│   │   ├── app.css
│   │   ├── auth.css
│   │   ├── collection.css
│   │   ├── home.css
│   │   ├── membership.css
│   │   ├── post.css
│   │   ├── search.css
│   │   └── taxonomy.css
│   ├── fonts
│   │   ├── firma
│   │   │   ├── firma.eot
│   │   │   ├── firma.svg
│   │   │   ├── firma.ttf
│   │   │   ├── firma.woff
│   │   │   └── firma.woff2
│   │   └── poppins
│   │       ├── poppins-500.woff
│   │       ├── poppins-500.woff2
│   │       ├── poppins-600.woff
│   │       ├── poppins-600.woff2
│   │       ├── poppins-italic.woff
│   │       ├── poppins-italic.woff2
│   │       ├── poppins-regular.woff
│   │       └── poppins-regular.woff2
│   ├── images
│   │   ├── empty.svg
│   │   ├── tag.svg
│   │   └── user.svg
│   ├── js
│   │   ├── app.js
│   │   ├── helpers.js
│   │   ├── manifest.js
│   │   ├── post.js
│   │   ├── vendor
│   │   │   └── search-libs.min.js
│   │   └── vendor.js
│   ├── mix-manifest.json
│   ├── screenshot-desktop.jpg
│   └── screenshot-mobile.jpg
├── author.hbs
├── custom-page-no-newsletter.hbs
├── custom-post-no-newsletter.hbs
├── custom-table-of-contents.hbs
├── custom-toc-no-newsletter.hbs
├── default.hbs
├── error-404.hbs
├── index.hbs
├── locales
│   ├── de.json
│   ├── en.json
│   ├── es.json
│   └── fr.json
├── members
│   ├── account.hbs
│   ├── membership.hbs
│   ├── signin.hbs
│   └── signup.hbs
├── package.json
├── page-authors.hbs
├── page-newsletter.hbs
├── page-search.hbs
├── page-tags.hbs
├── page.hbs
├── partials
│   ├── avatar.hbs
│   ├── blob-shape.hbs
│   ├── collection-header.hbs
│   ├── collection-item.hbs
│   ├── comments.hbs
│   ├── desktop-menu.hbs
│   ├── empty-content.hbs
│   ├── featured-post.hbs
│   ├── footer.hbs
│   ├── header.hbs
│   ├── hero.hbs
│   ├── latest-post.hbs
│   ├── logo.hbs
│   ├── membership.hbs
│   ├── mobile-menu.hbs
│   ├── nav-post.hbs
│   ├── navigation.hbs
│   ├── newsletter-form.hbs
│   ├── pagination.hbs
│   ├── post-access.hbs
│   ├── post-card.hbs
│   ├── post-header.hbs
│   ├── recent-post.hbs
│   ├── related-post.hbs
│   ├── search.hbs
│   ├── share-post.hbs
│   ├── theme-toggle.hbs
│   └── toc.hbs
├── post.hbs
├── routes.yaml
└── tag.hbs
```

::: warning
Avoid making changes to the files in the Assets folder as these will be overwritten with each new version. For small changes you can inject code in the Ghost Admin instead.
:::
