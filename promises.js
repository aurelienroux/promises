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

/* get('http:/jsonplaceholder.typicode.com/users')
.then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
}) */

var catchError = (e) => {
    console.error(e);
}

/* var getPosts = () => {
    return new Promise((resolve, reject) => {
        get('http:/jsonplaceholder.typicode.com/users')
            .then((response) => {
                var users = JSON.parse(response)
                get('http:/jsonplaceholder.typicode.com/comments?usersId=' + users[0].id)
                    .then((response) => {
                        var posts = JSON.parse(response)
                        resolve(posts[0])
                    })
                    .catch(catchError)
            }).catch(catchError)
    })
} */

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
    .then((posts) => {
        console.log(posts[1]);
    })
    .catch(catchError)