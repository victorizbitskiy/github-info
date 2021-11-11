export function addGitHubInfoToHtml(title, content) {

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