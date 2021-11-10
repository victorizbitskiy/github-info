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
    addStatsToHtml('Статистика GitHub', data)
  })
//   .cath(err => console.log(err))

function addStatsToHtml(title, content) {

  document.body.innerHTML = `
    <h1 class="title">${title}</h1>
    <img class="avatar" src="${content.avatar_url}"/>
    <div class="stats">
      <div class="attribute"> login: <span class="attributeValue">${content.login}</span></div>
      <div class="attribute"> name: <span class="attributeValue">${content.name}</span></div>
      <div class="attribute"> bio: <span class="attributeValue">${content.bio}</span></div>
      <div class="attribute"> blog: <span class="attributeValue">${content.blog}</span></div>
      <div class="attribute"> followers: <span class="attributeValue">${content.followers}</span></div>
      <div class="attribute"> following: <span class="attributeValue">${content.following}</span></div>
    </div>
    `
}