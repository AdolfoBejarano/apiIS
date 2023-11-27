async function githubUsers() {
            let response = await fetch('https://api.github.com/users')
            let users = await response.json()
            console.log(users)
    }

githubUsers()