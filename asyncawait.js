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
    try {
        var response = await get('http:/jsonplaceholder.typicode.com/users')
        var users = JSON.parse(response);
        response = await get('http:/jsonplaceholder.typicode.com/comments?usersId=' + users[0].id)
        var posts = JSON.parse(response)
    } catch (error) {
        console.log('try catch error', error);
    }
    return posts
}

var getFirstPost = async (num) => {
    var post = await getPosts();
    return post[num];
}

var demo = async () => {
    var arr = await Promise.all([getPosts(), getFirstPost(0)])
    console.log(arr);
}

demo()