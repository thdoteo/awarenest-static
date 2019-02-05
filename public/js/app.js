function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

function registerEmail(email) {
    var xhr = new XMLHttpRequest()
    xhr.open("POST", "registerEmail.php", true)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("email=" + email)
}

document.addEventListener('click', function(e) {
    let sendButton = e.target.closest('.button_send')

    if (sendButton) {
        let email = document.getElementById('email').value

        if (validateEmail(email)) {
            registerEmail(email)
            document.querySelector('.form').style.display = 'none'
            document.querySelector('.success').style.display = 'inline-block'
        }
        
    }
})