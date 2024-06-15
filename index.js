require('dotenv').config


const express = require('express')
const app = express()
const port = 4000
const githubData = {
  
    "login": "tanishkabalooni",
    "id": 93896371,
    "node_id": "U_kgDOBZi-sw",
    "avatar_url": "https://avatars.githubusercontent.com/u/93896371?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/tanishkabalooni",
    "html_url": "https://github.com/tanishkabalooni",
    "followers_url": "https://api.github.com/users/tanishkabalooni/followers",
    "following_url": "https://api.github.com/users/tanishkabalooni/following{/other_user}",
    "gists_url": "https://api.github.com/users/tanishkabalooni/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/tanishkabalooni/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/tanishkabalooni/subscriptions",
    "organizations_url": "https://api.github.com/users/tanishkabalooni/orgs",
    "repos_url": "https://api.github.com/users/tanishkabalooni/repos",
    "events_url": "https://api.github.com/users/tanishkabalooni/events{/privacy}",
    "received_events_url": "https://api.github.com/users/tanishkabalooni/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-11-08T03:47:57Z",
    "updated_at": "2024-06-15T06:47:21Z"
  };


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('baloonitanishka')
})

app.get('/login', (req,res)=>{
    res.send('<h1> please login at Chai </h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/github', (req,res)=>{
  res.json(githubData)
})