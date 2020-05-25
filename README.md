![defi18n logo](logo.png "Logo")

**defi** - Decentralized Finance

**i18n** - Internationalization

## An attempt at bringing Decentralized Finance to everyone.

## What is it

A collection of translation strings that you can use freely on your project or dapp so that more people can be exposed to the world of Ethereum and Decentralized Finance.

### How to use

Code is available at [https://github.com/nanexcool/defi18n](https://github.com/nanexcool/defi18n)

To install on a `node` project:

```
yarn add defi18n // or npm i defi18n

// require the strings according to your locale
const locale = 'en' // there's 'en', 'es', 'fr, and 'id'
const messages = require(`defi18n/${locale}/general.json`)
```

Or copy what you need from the `en`, `es`, `fr`, and `id` folders (more to come I hope!)

Use your favorite i18n tool to manage the translation strings.

Currently there's English, Spanish, French, and Indonesian files for:

- General
- Dai Stats
- Maker

While defi18n will never rival a professional translation service, my hope is it can provide a good enough starting point for small teams and solo devs.

### Help me translate!

Submit PRs if you can translate one of the files to a different language, or can add a new category.

### Todo

- [ ] Translate this site obviously...
- [ ] More languages
- [ ] More categories
- [ ] CLI tool to mix packages together?
- [ ] Make NPM package


This project is licensed under the Creative Commons CC0 License, which is about as permissive as you can get.

Created by Mariano Conti [@nanexcool](https://twitter.com/nanexcool)
