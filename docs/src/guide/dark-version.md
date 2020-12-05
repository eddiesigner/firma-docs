# Dark Version

By default Firma comes in light version but can be changed to dark version easily, [here](https://firma-dark.eduardogomez.io/) you can see a demo of how it looks.

To switch to the dark version please follow these steps:

1. Head to the **Code injection** page in the Ghost Admin.

2. Paste the following code into the **Site Header** block:

```html
<style>
:root {
  --button-text-color: #10101d;
  --button-background-color: #896bff;
  --alt-text-color: #dbd8e3;
  --mask-color: #10101d;
  --accent-color: #896bff;
  --border-color: #120d26;
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
  --mobile-menu-shadow-opacity: 0.8;
  --submenu-shadow-opacity: 0.35;
  --post-card-shadow-opacity: 0.40;
}
</style>
```

3. Save your changes.

::: tip
You can of course change any color you want to adapt the dark version to your needs, feel free to play with the color values, just remember not to change the name of the variables.
:::

::: warning
If you decide to use the dark version you may need to upload a new logo that has enough contrast with the dark background.
:::

::: warning
Firma does not include a button to switch between modes and does not automatically adapt to the mode of the operating system. This is because every website has different needs and it is not easy to design a functionality like this that behaves exactly as everyone wants it to.
:::
