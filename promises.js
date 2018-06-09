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

get('http:/jsonplaceholder.typicode.com/users').then(function (response) {
    console.log(response);
})


/* var getPosts = (success, error) => {
    get('http:/jsonplaceholder.typicode.com/users', function(response) {
        var users = JSON.parse(response)
        console.log(users);
        get('http:/jsonplaceholder.typicode.com/commensssts?usersId=' + users[0].id, function(response) {
            var posts = JSON.parse(response)
            success(posts)
        }, function(e) {
            console.log('ajax error', e);
        })
    }, function(e) {
        console.log('ajax error', e);
    })
}

getPosts(function(posts) {
    console.log('premier', posts[0]);
}, function(error) {
    console.log(error);
}); */