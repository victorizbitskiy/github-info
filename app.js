const requestURL = 'https://api.github.com/users/victorizbitskiy'
const headers = {
  'Content-Type': 'application/json'
}

function sendRequest(method, url) {
  return fetch(url, {
    method: method,
    // headers: headers
  }).then(response => {
    if (response.ok) {
      return response.json()
    }

    return response.json().then(error => {
      const e = new Error('Что-то пошло не так...')
      e.data = error
      throw e
    })

  })
}

sendRequest('GET', requestURL)
  .then(data => {
    const body = document.getElementById('body')
    console.log(data);
    addStatsToHtml('Статистика', data)
  })
//   .cath(err => console.log(err))

function addStatsToHtml(title, content) {

  document.body.innerHTML = `
    <h1>${title}</h1>
    <div class="stats">id: ${content.id}</div>
    <div class="stats">name:${content.name}</div>
    <div class="stats">followers:${content.followers}</div>
    <div class="stats">following:${content.following}</div>

  `

}
