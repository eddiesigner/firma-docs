# Publication Settings

After installing the theme you will most likely want to configure the following basic settings in your publication:

## Title & Description

In the **General Settings** of the Ghost Admin you can change the name of your publication and enter a description, as you can see in the following screenshot:

![General settings](https://res.cloudinary.com/edev/image/upload/v1607258202/firma/CleanShot_2020-12-06_at_13.35.54_2x.png)

The theme uses this information in a variety of places, for example in the first section of the home page, so if you want to display other content in that section, these are the settings you will need to change.

## Social Accounts

Ghost allows you to add social accounts links for Facebook and Twitter. By default it includes links from their own social accounts.

To change these links just delete them and enter yours in the **Social Accounts** section at the bottom of the **General Settings** page:

![Social accounts](https://res.cloudinary.com/edev/image/upload/v1607259926/firma/CleanShot_2020-12-06_at_14.04.53_2x.png)

If you don't want to show Facebook and Twitter links just delete the default links and save the changes.

## Branding

In the **Branding Settings** of the Ghost Admin you can change the Publication icon and the Publication logo as well.

**Accent Color**

This is the primary color that the theme uses to highlight certain elements such as buttons, indicators, hover states and others. To change the color you can enter a hexadecimal value or you can click on the small square that appears in the options to select it visually.

For example, Firma uses `#471aff` as the primary color in the live demo.

**Publication Icon**

The icon or _favicon_ is a small image that can be seen in the browser tab, next to the title. You can change the icon in this section.

**Publication Logo**

Ghost by default includes a white logo, I recommend you to remove it and upload your own logo. You can do this in the **Publication logo** field located in this section.

In case you delete the default logo and don't upload any logo of your own, the theme will show the publication title instead.

**Publication Cover**

You can also change the cover which is shown in the first section of the home page. To change it just delete the default image in the **Publication Cover** field and upload the image you want.

Here's a screenshot of these settings:

![Publication identity](https://res.cloudinary.com/edev/image/upload/v1616887152/firma/CleanShot_2021-03-28_at_00.17.07_2x_1.png)

::: warning
If you decide to use the dark version you may need to upload a new logo that has enough contrast with the dark background.
:::

## Posts Per Page

By default Firma shows up to 9 entries on each page listing, if you wish to change that number please follow these steps:

1. Unzip the theme folder.

2. Open the file `package.json` with a text editor.

3. Locate the following line of code and change the number to the one you prefer:

```
"posts_per_page": 9,
```

4. Save the changes.

5. Zip the theme folder and upload it again in the Ghost Admin.
