#!/usr/bin/env node

const lang = process.argv[2] || 'en'

const all = {
    ...require(`./${lang}/maker.json`), 
    ...require(`./${lang}/daistats.json`), 
    ...require(`./${lang}/general.json`)
}

const ordered = {}

Object.keys(all).sort().forEach(key => ordered[key] = all[key])

console.log(ordered)
