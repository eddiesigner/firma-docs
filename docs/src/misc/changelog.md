# Change Log

## Version 3.3.0
> 01/01/2026

* Added support for [call to action cards](https://ghost.org/help/cards/#call-to-action)
* Added support for [One-time codes for sign in](https://ghost.org/changelog/one-time-codes-for-sign-in/)
* Use new `social_url` helper instead of `twitter_url` and `facebook_url` helpers
* Use Vite instead of Webpack for local development
* Updated Docker image (development only)
* Bump version number

````
Added files:
+ src/bs-config.cjs
+ src/vite.config.js

Modified files:
* .gitignore
* custom-page-no-newsletter.hbs
* custom-post-no-newsletter.hbs
* custom-table-of-contents.hbs
* custom-toc-no-newsletter.hbs
* default.hbs
* members/signin.hbs
* package.json
* page.hbs
* partials/collection-header.hbs
* partials/social-links.hbs
* post.hbs
* src/deploy/index.js
* src/docker-compose.yml
* src/order-locales.js
* src/package-lock.json
* src/package.json
* src/sass/components/article/_content.scss

Removed files:
- src/webpack.mix.js
````

## Version 3.2.0
> 18/08/2025

* **Ghost 6 support** 🎉
* Updated Docker image (development only)
* Bump version number

````
Modified files:

* README.md
* package.json
* page-authors.hbs
* page-tags.hbs
* partials/membership.hbs
* src/docker-compose.yml
````

## Version 3.1.0
> 02/06/2025

* Added support for [more staff social links](https://ghost.org/changelog/social-links/)
* Added BlueSky, Mastodon, Threads and TikTok icons
* Fixed an issue where the color of social icons on the author page was not correct
* Updated Docker image (development only)
* Bump version number

````
Modified files:

* package.json
* partials/collection-header.hbs
* src/docker-compose.yml
* src/sass/common/_icons.scss
* src/sass/components/collection/_author-meta.scss
* src/sass/fonts/firma/firma.eot
* src/sass/fonts/firma/firma.svg
* src/sass/fonts/firma/firma.ttf
* src/sass/fonts/firma/firma.woff
* src/sass/fonts/firma/firma.woff2
````

## Version 3.0.0
> 16/12/2024

* Added support for [custom fonts](/guide/custom-fonts.html)
* All icons have been updated, especially the social media ones where X and Wellfound icons have replaced Twitter and AngelList icons
* Yearly plans are now displayed by default on the Membership page
* Added a button on the Account page so members can edit their account details
* Fixed an issue where the price of a subscription plan had a wrong format under certain circumstances
* Updated Docker image (development only)
* Bump version number

````
Added files:

+ .github/workflows/deploy-theme.yml
+ src/.env.example
+ src/.gitignore
+ src/deploy/index.js

Modified files:

* default.hbs
* locales/en.json
* locales/es.json
* members/account.hbs
* package.json
* partials/collection-header.hbs
* partials/membership.hbs
* partials/share-post.hbs
* partials/social-links.hbs
* src/docker-compose.yml
* src/package-lock.json
* src/package.json
* src/sass/common/_global.scss
* src/sass/common/_icons.scss
* src/sass/components/article/_content.scss
* src/sass/components/article/_share.scss
* src/sass/components/auth/_form.scss
* src/sass/components/common/_button.scss
* src/sass/components/header/_search.scss
* src/sass/components/header/_theme-toggle.scss
* src/sass/fonts/firma/firma.eot
* src/sass/fonts/firma/firma.svg
* src/sass/fonts/firma/firma.ttf
* src/sass/fonts/firma/firma.woff
* src/sass/fonts/firma/firma.woff2
````

## Version 2.9.0
> 04/09/2023

* Support for [better landing pages](https://ghost.org/changelog/create-landing-pages/)
* Support for [Header card improvements](https://ghost.org/changelog/header-card-improvements/)
* Support for [Signup cards](https://ghost.org/changelog/signup-cards/)
* Updated Ghost image version (development only)
* Bump version number

```
Modified files:

* custom-page-no-newsletter.hbs
* custom-post-no-newsletter.hbs
* custom-table-of-contents.hbs
* custom-toc-no-newsletter.hbs
* package.json
* page.hbs
* src/docker-compose.yml
* src/js/post.js
* src/sass/components/article/_article.scss
* src/sass/components/article/_content.scss
* src/sass/components/article/_header.scss
* src/sass/components/article/_share.scss
* src/sass/components/common/_standard-container.scss
```

## Version 2.8.0
> 30/05/2023

* Native support for [Announcement bar](https://ghost.org/changelog/announcement-bar/)
* Introduced a new custom setting to use only Portal for Members instead of the related features provided by the theme ([learn more](../guide/enable-members.html#portal))
* The Newsletter form at the bottom of the page is now hidden when the user is logged-in
* Sort "Related posts" by recently published
* Updated Ghost image version (development only)
* Bump version number

```
Added files:

+ src/sass/components/header/_announcement-bar.scss

Modified files:

* author.hbs
* custom-post-no-newsletter.hbs
* custom-table-of-contents.hbs
* custom-toc-no-newsletter.hbs
* index.hbs
* members/account.hbs
* package.json
* page-search.hbs
* page.hbs
* partials/avatar.hbs
* partials/desktop-menu.hbs
* partials/hero.hbs
* partials/mobile-menu.hbs
* partials/newsletter-form.hbs
* partials/post-access.hbs
* post.hbs
* src/docker-compose.yml
* src/js/app.js
* src/js/helpers.js
* src/sass/app.scss
* src/sass/common/_global.scss
* src/sass/common/_variables.scss
* src/sass/components/404/_container.scss
* src/sass/components/account/_account-user.scss
* src/sass/components/article/_content.scss
* src/sass/components/article/_toc.scss
* src/sass/components/auth/_container.scss
* src/sass/components/common/_avatar.scss
* src/sass/components/header/_desktop-top-bar.scss
* src/sass/components/header/_header.scss
* src/sass/components/header/_mobile-top-bar.scss
* src/sass/components/header/_progress.scss
* src/sass/components/search/_container.scss
* tag.hbs
```

## Version 2.7.0

> 01/11/2022

* Add Slovak and Czech translations (by **Vladimír Záhradnik**)
* Consolidate social links in one single template
* Fixed color of publication title in footer when logo is not available
* Fixed some minor style issues in the submenu
* Fixed an issue where divider overlapped the TOC
* Update Ghost image version (development only)
* Bump version

```
Added files:

+ locales/cs.json
+ locales/sk.json
+ partials/social-links.hbs

Modified files:

* package.json
* partials/desktop-menu.hbs
* partials/footer.hbs
* partials/mobile-menu.hbs
* partials/social-links.hbs
* src/docker-compose.yml
* src/sass/components/article/_content.scss
* src/sass/components/header/_logo.scss
* src/sass/components/header/_submenu.scss
```

## Version 2.6.1

> 02/09/2022

* Fixed the issue where the setting "Disable dark mode" wasn't working in the last update

```
Modified files:

* default.hbs
* package.json
```

## Version 2.6.0

> 29/08/2022

* Native Search support: [ghost.org/changelog/search/](https://ghost.org/changelog/search/)
* Native Comments support: [ghost.org/changelog/native-comments/](https://ghost.org/changelog/native-comments/)
* Add Chinese translation
* Fix theme mode flickering when page loads
* Fix Docker development environment
* Update Docker Ghost image (development only)
* Update dependencies

```
Added files:

+ locales/cn.json

Modified files:

* default.hbs
* package.json
* partials/comments.hbs
* partials/header.hbs
* partials/search.hbs
* src/docker-compose.yml
* src/js/vendor/search-libs.min.js
* src/package-lock.json
* src/package.json
* src/sass/components/article/_article.scss
* src/sass/components/common/_title.scss
* src/webpack.mix.js
```

## Version 2.5.1

> 20/06/2022

* Fixes an issue where the Signup page didn't redirect the user to the correct page if their session was active

```
Modified files:

members/signup.hbs
package.json
```

## Version 2.5.0

> 13/06/2022

* **Ghost 5 support** 🎉
* Membership Tiers support: [ghost.org/help/tiers/](https://ghost.org/help/tiers/)
* Update Docker Ghost image (development only)
* Bug fixes and improvements

```
Added files:

src/sass/components/membership/_plan-switcher.scss

Modified files:

README.md
author.hbs
custom-table-of-contents.hbs
index.hbs
locales/de.json
locales/en.json
locales/es.json
locales/fr.json
locales/nl.json
members/signup.hbs
package.json
page-search.hbs
page.hbs
partials/desktop-menu.hbs
partials/hero.hbs
partials/logo.hbs
partials/membership.hbs
partials/mobile-menu.hbs
partials/nav-post.hbs
partials/newsletter-form.hbs
post.hbs
src/docker-compose.yml
src/js/vendor/search-libs.min.js
src/sass/common/_global.scss
src/sass/components/common/_standard-container.scss
src/sass/components/membership/_membership.scss
src/sass/components/membership/_memberships-container.scss
src/sass/membership.scss
tag.hbs
```

## Version 2.0.1

> 21/02/2022

* Dutch (Netherlands) translations were added (by **Danny Bonte**)
* French translations were updated (by **Cédric Godart**)
* Small improvements in the way plans and subscriptions prices are displayed
* Fixes an issue where the text of buttons wouldn't be visible on hover under certain circustances in posts pages
* A code that attempted to modify the appearance of Ghost notifications and was generating an error in the browser console was removed

```
Added files:

locales/nl.json

Modified files:

README.md
locales/fr.json
members/account.hbs
package.json
partials/membership.hbs
src/js/app.js
src/js/helpers.js
src/sass/components/article/_content.scss
src/sass/components/common/_button.scss
```

## Version 2.0.0

> 07/01/2022

* Dark mode support 🎉
* Add full support for new content cards: [ghost.org/changelog/cardmas/](https://ghost.org/changelog/cardmas/)
* Custom settings support: [ghost.org/changelog/custom-design-settings/](https://ghost.org/changelog/custom-design-settings/)
* Update Docker Ghost image (development only)
* Bug fixes and improvements

```
Added files:

partials/theme-toggle.hbs
src/sass/components/header/_theme-toggle.scss

Modified files:

LICENSE
README.md
default.hbs
locales/de.json
locales/en.json
locales/es.json
locales/fr.json
package.json
partials/desktop-menu.hbs
partials/footer.hbs
partials/header.hbs
partials/hero.hbs
partials/logo.hbs
partials/mobile-menu.hbs
src/docker-compose.yml
src/js/post.js
src/sass/app.scss
src/sass/common/_icons.scss
src/sass/common/_theme.scss
src/sass/components/article/_content.scss
src/sass/components/common/_button.scss
src/sass/components/header/_logo.scss
src/sass/components/header/_mobile-menu.scss
src/sass/components/header/_submenu.scss
src/sass/fonts/firma/firma.eot
src/sass/fonts/firma/firma.svg
src/sass/fonts/firma/firma.ttf
src/sass/fonts/firma/firma.woff
src/sass/fonts/firma/firma.woff2
src/sass/post.scss
```

## Version 1.5.5

> 12/10/2021

* Support for feature image captions [https://ghost.org/changelog/feature-image-captions/](https://ghost.org/changelog/feature-image-captions/)
* Support for more subscriptions statuses 
* Remove Newsletter form and Members buttons if the corresponding setting is disabled in the Ghost Admin
* Update Ghost image (only for development)
* Bug fixes and improvements

```
Modified files:

README.md
author.hbs
custom-table-of-contents.hbs
index.hbs
locales/de.json
locales/en.json
locales/es.json
locales/fr.json
members/account.hbs
package.json
page-newsletter.hbs
page-search.hbs
page.hbs
partials/desktop-menu.hbs
partials/hero.hbs
partials/mobile-menu.hbs
partials/nav-post.hbs
partials/newsletter-form.hbs
partials/post-header.hbs
partials/share-post.hbs
post.hbs
src/docker-compose.yml
src/sass/common/_mixins.scss
src/sass/components/account/_subscription.scss
src/sass/components/article/_image.scss
src/sass/components/article/_toc.scss
tag.hbs
```

## Version 1.5.2

> 01/05/2021

* Public Previews support [https://ghost.org/help/public-previews/](https://ghost.org/help/public-previews/)
* German translations
* Update Ghost image (only for development)

```
Modified files:

README.md
custom-page-no-newsletter.hbs
custom-post-no-newsletter.hbs
custom-table-of-contents.hbs
custom-toc-no-newsletter.hbs
locales/de.json
package.json
page.hbs
post.hbs
src/docker-compose.yml
```

## Version 1.5.0

> 28/03/2021

* **Ghost 4 support** 🎉
* Accent color support
* Update dependencies
* Replace legacy code
* Bugfixes and improvements

```
Modified files:

.gitignore 
README.md                    
author.hbs 
custom-post-no-newsletter.hbs
custom-table-of-contents.hbs 
custom-toc-no-newsletter.hbs 
default.hbs 
index.hbs   
locales/en.json         
locales/es.json         
locales/fr.json         
members/account.hbs 
package.json            
page-search.hbs    
page.hbs  
partials/desktop-menu.hbs 
partials/featured-post.hbs 
partials/hero.hbs  
partials/latest-post.hbs 
partials/membership.hbs 
partials/mobile-menu.hbs
partials/nav-post.hbs   
partials/post-card.hbs   
partials/recent-post.hbs
partials/related-post.hbs
post.hbs
src/docker-compose.yml
src/js/app.js
src/js/helpers.js
src/js/vendor/search-libs.min.js
src/package-lock.json
src/package.json
src/sass/app.scss
src/sass/common/_variables.scss
src/sass/components/article/_content.scss
src/sass/components/auth/_form.scss
src/sass/components/header/_mobile-menu.scss
src/webpack.mix.js
tag.hbs

Removed files:

partials/notifications.hbs
src/sass/components/common/_notification.scss
```

## v1.0.1

> 18/01/2021

* Add French translations (by **Cédric Godart**)
* Add a trailing slash in the search url to make sure it works well on all Ghost Pro instances
* Change style of lists in post content
* Fix some styles in Bookmark cards
* Center text in Auth forms when there is no image
* Display related articles only if post has tags
* Add documentation about Portal in the Members docs
* Update Ghost image version (for theme development)
* Improve terminal logs for theme development

## v1.0.0

> 07/12/2020

* First release 🎉
