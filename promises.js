var get = (url) => {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr)
                }
            }
        }
        xhr.open('GET', url, true)
        xhr.send()
    })
}

var catchError = (e) => {
    console.error(e);
}

var getPosts = () => {
    return get('http:/jsonplaceholder.typicode.com/users')
        .then((resp) => {
            var users = JSON.parse(resp);
            return get('http:/jsonplaceholder.typicode.com/comments?usersId=' + users[0].id)
                .then((posts => {
                    var posts = JSON.parse(posts)
                    return posts
                }))
        })
}

getPosts()
    .then((posts) => console.log(posts[1]))
    .catch(catchError)
    .then(() => console.log('requests ending'))