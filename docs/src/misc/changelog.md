# Change Log

## Version 1.5.2

> May 1th 2021

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
> Mar 28th 2021

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

> Release on 18 Jan 2021

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

> Release on 07 Dec 2020

* First release
