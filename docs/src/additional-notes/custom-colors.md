# Custom Colors

Firma has a well defined color palette, these are the colors used in all the stylesheets of the theme, this means that if you want to change some colors to adapt it to the identity of your brand it is only a matter of changing these values, that simple.

The list of color variables is as follows:

```css
:root {
  --button-text-color: #ffffff;
  --button-background-color: #471aff;
  --alt-text-color: #333333;
  --mask-color: #f6f9fc;
  --accent-color: #471aff;
  --border-color: #ebeaeb;
  --background-color: #ffffff;
  --background-color-transparent: rgba(255, 255, 255, 0);
  --foreground-color: #111439;
  --secondary-text-color: #425466;
  --placeholder-color: #9f9f9f;
  --text-color: #555555;
  --hero-background-color: #13131e;
  --footer-text-color: #eaeaea;
  --blob-shape-color: #d1d8e0;
  --error-color: #c21919;
  --mobile-menu-shadow-opacity: 0.4;
  --submenu-shadow-opacity: 0.2;
  --post-card-shadow-opacity: 0.12;
}
```

For example, if you want to change the accent color and the background of the primary buttons you can simply use a different color value in `--button-background-color` and `--accent-color`.

To do so just open the Ghost Admin and head to the **Code injection** page and paste the following code into the **Site Header** block:

```html
<style>
:root {
  --button-background-color: #471aff;
  --accent-color: #471aff;
}
</style>
```

Save the changes and that's it! With those simple changes you can change the look of your website and go from this:

![Firma default colors](https://res.cloudinary.com/edev/image/upload/v1606987140/firma/Screenshot_2020-1s2-03_Membership.png)

To this:

![Firma modified colors](https://res.cloudinary.com/edev/image/upload/v1606987135/firma/Screenshot_2020-12-03_Membership.png)

::: warning
Be careful not to change the names of the variables, they should remain as they are.
:::

Additionally, there are other color variables that you can also modify if you wish:

```css
:root {
  --featured-main-color: #ffffff;
  --background-text-color: #aebecf;
  --success-text-color: #1e5c5b;
  --success-background-color: #ecfdfa;
  --focus-color: #90cdf4;
  --loading-color: #ffffff;
  --highlighting-color: #ffff00;
}
```
