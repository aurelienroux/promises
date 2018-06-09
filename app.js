var get = (url, success, error) => {
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status === 400) {
                success(xhr.responseText);
            } else {
                error(xhr.status)
            }
        }
    }
    xhr.open('GET', url, true)
    xhr.send()
}

var getPosts = () => {
    get('http:/jsonplaceholder.typicode.com/users', function(response) {
        console.log('this is success');
        var users = JSON.parse(response)
        console.log(users[0]);
    }, function(error) {
        console.log('this is error');
        console.log(error);
    })
}

console.log(getPosts());


