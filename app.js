// Problem: we need a simple way to look at Github profile
// Solution: Use NodeJS to connect to GitHub API to
// get Profile info and print out to the console

// TODO: Connect to GitHub API
let https = require('https')

const username = 'rizafahmi'
const options = {
  hostname: 'api.github.com',
  port: 443,
  path: `/users/${username}`,
  method: 'GET',
  headers: {
    'user-agent': 'nodejs'
  }
}
// TODO: [x] Read the data
let request = https.request(options, (response) => {
  let body = ''
  response.on('data', (data) => {
    body = body + data
  })
  response.on('end', ()=>{
    let profile = JSON.parse(body)
    if (response.statusCode === 200) {
      // TODO: Parse the data
      // Convert String to JSON (Javascript Object)

      //console.log(profile.login + 'owns ' + )
      // TODO: Print th data out
      console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} follower(s)`)
    } else {
      console.log(`Profile with username '${username}' not found`)
    }

  })

})

request.end()

request.on('error', (e) => {
  console.error(e)
})
