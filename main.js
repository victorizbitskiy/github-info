import { addGitHubInfoToHtml } from "./module/githubInfo.js"

const requestURL = 'https://api.github.com/users/victorizbitskiy'

async function sendRequest(method, url) {
  const response = await fetch(url, {
    method: method,
  })
  if (response.ok) {
    return response.json()
  }
  const error = await response.json()
  const e = new Error('Что-то пошло не так...')
  e.data = error
  throw e
}

sendRequest('GET', requestURL)
  .then(data => {
    const body = document.getElementById('body')
    console.log(data)
    addGitHubInfoToHtml('GitHub info', data)
  })
