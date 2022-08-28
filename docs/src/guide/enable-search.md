# Enable Search

## Ghost Native Search

As of Ghost 5.30.0 it's now possible to use the brand new native search functionality, you can learn more about it here: [ghost.org/changelog/search/](https://ghost.org/changelog/search/)

This feature is not enabled by default, if you prefer the native search over the custom search provided by the theme you have to enable it in the theme settings under the **Site-wide** section:

![](https://res.cloudinary.com/edev/image/upload/v1661687369/firma/CleanShot_2022-08-28_at_13.48.12.png)

Please note that unlike the theme custom search, **you don't need to generate a Content API Key** in order to make it work, you can leave that field as it is.

## Theme Custom Search

The custom search uses a Content API Key in order to work, that means the first thing you have to do is to generate a new Key, to do so please follow these steps:

### Generate your Content API Key

1. In the Ghost Admin head to the **Integrations** page and press the **Add custom integration** button. You can name it as you like but I recommend that you name it _Search_.

2. Copy the **Content API Key**.

### Save your Content API Key

If you're using Ghost 4.20.0 or later and Firma 2.0.0 or later you can simply paste the key in the theme design settings as shown bellow:

![](https://res.cloudinary.com/edev/image/upload/v1641467804/firma/CleanShot_2022-01-06_at_12.15.43.png)

::: warning
If you had previously added your key and now you prefer to add your key in the theme design settings please make sure to delete the code you injected otherwise an error will appear in the console because that variable had already been declared previously.
:::

If you're using a previous version please do the following instead:

Head to the **Code injection** page and paste the following code into the **Site Header** block:

```html
<script>
  const ghostSearchApiKey = 'YOUR_CONTENT_API_KEY_GOES_HERE';
</script>
```

Remember that you have to replace `YOUR_CONTENT_API_KEY_GOES_HERE` with the Content API Key that you got previously (please keep the single quotes).

### Create the Search Page

1. Head to the **Pages** page and press the **New page** button.

2. Name this page as _Search_.

3. Publish the page.

::: warning
It is important that the **Page URL** value in the page settings is `search`, otherwise it will not work properly.
:::
