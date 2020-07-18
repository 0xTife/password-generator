function getpassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
    let passlength = 16;
    let pass = "";
    for (var i = 0; i < passlength; i++) {
        let randnum = Math.floor(math.random() * chars.length);
        pass += chars.substring(randnum, randnum + 1);
        document.getElementById("password").value = pass;
    }
}