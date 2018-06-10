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

var getFirstPost = async (num) => {
    var post = await getPosts();
    return post[num];
}

getFirstPost(0)
    .then((post) => console.log(post))
    .catch(catchError)
    .then(() => console.log('requests ending'))