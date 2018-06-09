var get = (url) => {
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            console.log(xhr.responseText);

        }
    }
    xhr.open('GET', url, true)
    xhr.send()
}

var getPosts = () => {
    var users = get('http:/jsonplaceholder.typicode.com/users')
}

console.log(getPosts());


