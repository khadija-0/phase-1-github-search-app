const userList = document.getElementById('user-list')
const reposList = document.getElementById('repos-list')
console.log(reposList)
const searchForm = document.querySelector('#github-form')
const userName = document.querySelector('#search')
const userLi = document.querySelector('li')

// Fucntions
const renderUser = (users) => {
    if(users.login === userName.value) {
        const li = document.createElement('li')
        li.textContent = users.login
        li.addEventListener('click', () => {
            const a = document.createElement('a')
            a.title = "repos"
            a.href = users.repos_url
            a.textContent = `${users.login} repos`
            reposList.appendChild(a)   
        })
        const img = document.createElement('img')
        img.src = users.avatar_url
        userList.append(li, img)
    }
}

const searchUser = (e) => {
    e.preventDefault()
    fetch('https://api.github.com/users')
    .then(resp => resp.json())
    .then(users => users.forEach(renderUser))
}



searchForm.addEventListener('submit', searchUser)
