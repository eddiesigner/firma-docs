# Theme Translation

Firma is fully translatable and it comes with English and Spanish translations out of the box.

To change the language of your website just open the Ghost Admin, head to **General** and expand the **Publication language** section, now simply enter the [language locale](https://www.w3schools.com/tags/ref_language_codes.asp) that you prefer, for example `en` for English or `es` for Spanish.

If you want to use a different language you have to make a copy of `locales/en.json` and rename it to `[language_code].json`. The `[language_code]` part needs to be replaced with a valid [ISO Language Code](https://www.w3schools.com/tags/ref_language_codes.asp), for example `de.json` for German.

Then you have to edit that file with a text editor and replace all the translations with yours.

::: tip
To find more info about theme translation please head over the [Ghost documentation](https://ghost.org/docs/api/v3/handlebars-themes/helpers/translate/).
:::
