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
│   └── mix-manifest.json
├── author.hbs
├── custom-page-no-newsletter.hbs
├── custom-post-no-newsletter.hbs
├── custom-table-of-contents.hbs
├── custom-toc-no-newsletter.hbs
├── default.hbs
├── error-404.hbs
├── index.hbs
├── locales
│   ├── en.json
│   └── es.json
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
│   ├── notifications.hbs
│   ├── pagination.hbs
│   ├── post-access.hbs
│   ├── post-card.hbs
│   ├── post-header.hbs
│   ├── recent-post.hbs
│   ├── related-post.hbs
│   ├── search.hbs
│   ├── share-post.hbs
│   └── toc.hbs
├── post.hbs
├── routes.yaml
├── src
│   ├── docker-compose.yml
│   ├── js
│   │   ├── app.js
│   │   ├── helpers.js
│   │   ├── post.js
│   │   └── vendor
│   │       └── search-libs.min.js
│   ├── order-locales.js
│   ├── package-lock.json
│   ├── package.json
│   ├── sass
│   │   ├── 404.scss
│   │   ├── account.scss
│   │   ├── app.scss
│   │   ├── auth.scss
│   │   ├── collection.scss
│   │   ├── common
│   │   │   ├── _global.scss
│   │   │   ├── _helpers.scss
│   │   │   ├── _icons.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _reset.scss
│   │   │   ├── _theme.scss
│   │   │   └── _variables.scss
│   │   ├── components
│   │   │   ├── 404
│   │   │   │   ├── _container.scss
│   │   │   │   └── _content.scss
│   │   │   ├── account
│   │   │   │   ├── _account-user.scss
│   │   │   │   ├── _empty.scss
│   │   │   │   ├── _section-label.scss
│   │   │   │   ├── _subscription.scss
│   │   │   │   └── _wrapper.scss
│   │   │   ├── article
│   │   │   │   ├── _access.scss
│   │   │   │   ├── _article-secondary-tag.scss
│   │   │   │   ├── _article.scss
│   │   │   │   ├── _content.scss
│   │   │   │   ├── _header.scss
│   │   │   │   ├── _image.scss
│   │   │   │   ├── _nav-article.scss
│   │   │   │   ├── _related-article.scss
│   │   │   │   ├── _section-title.scss
│   │   │   │   ├── _share.scss
│   │   │   │   ├── _tag.scss
│   │   │   │   └── _toc.scss
│   │   │   ├── auth
│   │   │   │   ├── _container.scss
│   │   │   │   ├── _form.scss
│   │   │   │   └── _image.scss
│   │   │   ├── collection
│   │   │   │   ├── _author-meta.scss
│   │   │   │   ├── _grid.scss
│   │   │   │   ├── _header.scss
│   │   │   │   ├── _image.scss
│   │   │   │   ├── _item.scss
│   │   │   │   └── _section.scss
│   │   │   ├── common
│   │   │   │   ├── _access-tag.scss
│   │   │   │   ├── _articles-eyebrow.scss
│   │   │   │   ├── _avatar.scss
│   │   │   │   ├── _blob-shape.scss
│   │   │   │   ├── _button.scss
│   │   │   │   ├── _empty-content.scss
│   │   │   │   ├── _error-message.scss
│   │   │   │   ├── _featured-post.scss
│   │   │   │   ├── _icon-button.scss
│   │   │   │   ├── _loading-indicator.scss
│   │   │   │   ├── _newsletter.scss
│   │   │   │   ├── _notification.scss
│   │   │   │   ├── _pagination.scss
│   │   │   │   ├── _post-card.scss
│   │   │   │   ├── _posts-container.scss
│   │   │   │   ├── _standard-container.scss
│   │   │   │   ├── _standard-wrapper.scss
│   │   │   │   ├── _subtitle.scss
│   │   │   │   └── _title.scss
│   │   │   ├── footer
│   │   │   │   ├── _copyright.scss
│   │   │   │   ├── _footer.scss
│   │   │   │   └── _navigation.scss
│   │   │   ├── header
│   │   │   │   ├── _desktop-navigation.scss
│   │   │   │   ├── _desktop-top-bar.scss
│   │   │   │   ├── _header.scss
│   │   │   │   ├── _logo.scss
│   │   │   │   ├── _menu-button.scss
│   │   │   │   ├── _mobile-menu.scss
│   │   │   │   ├── _mobile-top-bar.scss
│   │   │   │   ├── _progress.scss
│   │   │   │   ├── _search.scss
│   │   │   │   └── _submenu.scss
│   │   │   ├── home
│   │   │   │   ├── _hero.scss
│   │   │   │   └── _latest-post.scss
│   │   │   ├── membership
│   │   │   │   ├── _membership.scss
│   │   │   │   └── _memberships-container.scss
│   │   │   └── search
│   │   │       ├── _container.scss
│   │   │       ├── _recent-post.scss
│   │   │       ├── _result.scss
│   │   │       ├── _sidebar-section.scss
│   │   │       ├── _tag.scss
│   │   │       └── _title.scss
│   │   ├── fonts
│   │   │   ├── firma
│   │   │   │   ├── firma.eot
│   │   │   │   ├── firma.svg
│   │   │   │   ├── firma.ttf
│   │   │   │   ├── firma.woff
│   │   │   │   └── firma.woff2
│   │   │   └── poppins
│   │   │       ├── poppins-500.woff
│   │   │       ├── poppins-500.woff2
│   │   │       ├── poppins-600.woff
│   │   │       ├── poppins-600.woff2
│   │   │       ├── poppins-italic.woff
│   │   │       ├── poppins-italic.woff2
│   │   │       ├── poppins-regular.woff
│   │   │       └── poppins-regular.woff2
│   │   ├── home.scss
│   │   ├── libs
│   │   │   └── tocbot
│   │   │       ├── _tocbot-core.scss
│   │   │       ├── _tocbot-default-theme.scss
│   │   │       └── _tocbot.scss
│   │   ├── membership.scss
│   │   ├── post.scss
│   │   ├── search.scss
│   │   └── taxonomy.scss
│   └── webpack.mix.js
└── tag.hbs
```

::: tip
The `src` folder is only for development and contains all the source code of this theme, it's useful only if you want to make several changes on this theme or if you want to build your own theme on top of it.
:::

::: warning
Avoid making changes to the files in the Assets folder as these will be overwritten with each new version. For small changes you can inject code in the Ghost Admin instead.
:::
