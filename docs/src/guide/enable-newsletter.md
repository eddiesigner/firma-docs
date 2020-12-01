# Enable Newsletter

To enable the Newsletter in your website please head to the Ghost Admin, click on the **Labs** menu and then enable the **Members** option.

![Members option](https://res.cloudinary.com/edev/image/upload/v1606856650/firma/CleanShot_2020-12-01_at_22.03.18_2x.png)

The other options are irrelevant for the Newsletter so don't worry about them.

The previous action will enable the Newsletter form in multiple pages across your website. Additionally you can also enable the Newsletter page, to do so please follow these steps:

1. In the Ghost Admin head to the **Pages** page and press the **New page** button.

2. Give it a title (e.g. _Newsletter_).

3. You can also add a featured image in the page settings.

3. Publish the page.

::: tip
You do not need to add content to this page as it is automatically generated.
:::

::: warning
If you decide to use another title for this page it is important that you manually change the **Page URL** in the page settings so that the value is `newsletter`, otherwise it will not work.
:::

::: warning
If you want to use a different URL, `subscribe` for example, you have to unzip the theme folder, rename the file `page-newsletter.hbs` to `page-subscribe.hbs`, zip the theme folder and upload it again.
:::
