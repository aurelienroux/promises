var get = (url, success) => {
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            success(xhr.responseText);
        }
    }
    xhr.open('GET', url, true)
    xhr.send()
}

var getPosts = () => {
    get('http:/jsonplaceholder.typicode.com/users', function(response) {
        console.log(response);
    })
}

console.log(getPosts());


