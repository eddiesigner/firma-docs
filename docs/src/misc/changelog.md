# Change Log

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
