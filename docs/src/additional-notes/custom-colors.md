# Custom Colors

Firma has a well defined color palette, these are the colors used in all the stylesheets of the theme, this means that if you want to change some colors to adapt it to the identity of your brand it is only a matter of changing these values, that simple.

The list of color variables is as follows:

```html
<style>
  :root {
    --button-text-color: #ffffff;
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
  }
</style>
```

For example, if you want to change the accent color you can simply use a different color value in `--accent-color`.

To do so just open the Ghost Admin, go to **Settings**, click on **Code injection** and paste the following code into the **Site Header** section:

```html
<style>
:root {
  --accent-color: #471aff;
}
</style>
```

Save the changes and that's it! With those simple changes you can change the look of your website and go from this:

![Firma default colors](https://res.cloudinary.com/edev/image/upload/v1606987140/firma/Screenshot_2020-1s2-03_Membership.png)

To this:

![Firma modified colors](https://res.cloudinary.com/edev/image/upload/v1606987135/firma/Screenshot_2020-12-03_Membership.png)

::: tip
From Ghost 4 onwards if you only want to change the accent color, it is better to do it  in the [Branding settings](/guide/publication-settings.html#branding) since the accent color defined there takes precedence.
:::

::: warning
Be careful not to change the names of the variables, they should remain as they are.
:::

## Dark Mode

It is also possible to modify the colors of the dark theme if you wish, below you can see the colors that the theme uses.

```html
<style>
  [theme-mode="dark"] {
    --button-text-color: #10101d;
    --alt-text-color: #dbd8e3;
    --mask-color: #10101d;
    --accent-color: #896bff;
    --border-color: #323549;
    --background-color: #1a1a2e;
    --background-color-transparent: rgba(26, 26, 46, 0);
    --foreground-color: #efedf6;
    --secondary-text-color: #dad5f3;
    --placeholder-color: #9f9f9f;
    --text-color: #eeeeee;
    --hero-background-color: #13131e;
    --footer-text-color: #eaeaea;
    --blob-shape-color: #dad5f3;
    --error-color: #c21919;
  }
</style>
```

If you want to change some colors you can also do it in the Ghost Admin, for example, if you want to change the background color you can inject the following code:

```html
<style>
[theme-mode="dark"] {
  --background-color: #030320;
}
</style>
```

## Other Colors

Additionally, there are other color variables that you can also modify if you wish:

```html
<style>
  :root {
    --featured-main-color: #ffffff;
    --background-text-color: #aebecf;
    --focus-color: #90cdf4;
    --loading-color: #ffffff;
    --highlighting-color: #ffff00;
  }
</style>
```
