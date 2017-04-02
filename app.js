// Problem: we need a simple way to look at Github profile
// Solution: Use NodeJS to connect to GitHub API to
// get Profile info and print out to the console

// TODO: Connect to GitHub API
let https = require('https')

const options = {
  hostname: 'api.github.com',
  port: 443,
  path: '/users/yofri',
  method: 'GET',
  headers: {
    'user-agent': 'nodejs'
  }
}

let request = https.request(options, (response) => {
  let body = ''
  response.on('data', (data) => {
    body = body + data
  })
  response.on('end', ()=>{
    // TODO: Parse the data
    // Convert String to JSON (Javascript Object)
    let profile = JSON.parse(body)
    console.log(profile.avatar_url)
  })
  // TODO: Print th data out
})

request.end()

request.on('error', (e) => {
  console.error(e)
})
