# Enable Search

The search uses a Content API Key in order to work, that means the first thing you have to do is to generate a new Key, to do so please follow these steps:

1. In the Ghost Admin head to the **Integrations** page and press the **Add custom integration** button. You can name it as you like but I recommend that you name it _Search_.

2. Copy the **Content API Key**.

3. Then head to the **Code injection** page and paste the following code into the **Site Header** block:

```html
<script>
  const ghostSearchApiKey = 'YOUR_CONTENT_API_KEY_GOES_HERE'
</script>
```

Remember that you have to replace `YOUR_CONTENT_API_KEY_GOES_HERE` with the Content API Key that you got in step 2.

4. Now head to the **Pages** page and press the **New page** button.

5. Name this page as _Search_.

6. Publish the page.

::: warning
It is important that the **Page URL** value in the page settings is `search`, otherwise it will not work properly.
:::
