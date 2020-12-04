# Theme Development

If you have knowledge in web development and want to make deeper changes in the theme or if you want to create a theme based on Firma you can follow this guide to learn how to setup a development environment easily.

## Development Mode

The following steps will guide you so that you can have a development environment on your machine without having to install Ghost locally:

1. Install [Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/).

2. Install [Nodejs](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm).

3. Make a backup of the theme folder, just in case.

4. Open a terminal and change to the `firma/src` directory.

5. Run `npm install`.

6. Run `npm run get-database` to get the Ghost database dump.

7. Start Docker.

8. Run `npm run docker-watch`.

If all goes well, a tab will open in your browser with this URL: `http://localhost:3000`. From that moment on you can start making changes in the templates, stylesheets and Javascript files and your changes will be automatically reflected in the browser, cool right?

To access the Ghost Admin just enter this URL in your browser: `http://localhost:3000/ghost`. The credentials are:

```
Email address: firma@example.com
Password: 0123456789
```

You might need to run `docker-compose restart` after adding new files, this is because (from Ghost documentation):

> If you add any new files to your theme during development, you'll need to restart Ghost to see the changes take effect.

::: warning
Please ignore the following error if it appears after running `npm install`:
```
fatal: not a git repository (or any of the parent directories): .git
husky > Failed to install
```
:::

::: warning
If after a few seconds the page does not load, please wait a little longer or refresh the page several times, it will load ;)
:::

## Production Mode

When you are done making all your changes you can run `npm run production` ( within the `src` directory) to build your theme in production mode.

`npm run production` will concatenate, minify, optimize and compress all your files and finally will generate the file `firma.zip` in the root of the theme folder.

Now you can upload this file in the Ghost Admin and you're ready to go!
