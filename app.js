// Problem: we need a simple way to look at Github profile
// Solution: Use NodeJS to connect to GitHub API to
// get Profile info and print out to the console

let profile = require('./profile.js')

let profiles = process.argv.slice(2)
profiles.map(profile.get)
