#!/usr/bin/env node

var lang = 'en'
var general = require(`./${lang}/${lang}.json`)
var maker = require(`./${lang}/maker_${lang}.json`)
var daistats = require(`./${lang}/daistats_${lang}.json`)

var all = {...maker, ...daistats, ...general}

var ordered = {}

Object.keys(all).sort().forEach(key => ordered[key] = all[key])

console.log(ordered)
