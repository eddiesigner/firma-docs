# Change Log

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
