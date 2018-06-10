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

var getPosts = async () => {
    var response = await get('http:/jsonplaceholder.typicode.com/users')
    var users = JSON.parse(response);
    response = await get('http:/jsonplaceholder.typicode.com/comments?usersId=' + users[0].id)
    var posts = JSON.parse(response)
    return posts
}

// console.log(getPosts());

getPosts()
    .then((posts) => console.log(posts[1]))
    .catch(catchError)
    .then(() => console.log('requests ending'))