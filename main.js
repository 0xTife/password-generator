function getpassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
    let passlength = 16;
    let pass = "";
    let database = [];
    for (var i = 0; i < passlength; i++) {
        var randomnumber = Math.floor(Math.random() * chars.length);
        pass += chars.substring(randomnumber, randomnumber + 1);
        document.getElementById("password").value = pass;
    }
    database.push(pass);
    console.log(database);
    database.forEach((genpass) => {
        console.log(genpass);
    });
}