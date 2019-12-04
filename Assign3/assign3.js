let home = document.getElementById("home")
let div1 = document.getElementById("div1")
let table = document.getElementById("ltable")
let img = document.getElementById("img")
home.addEventListener('click', function () {
    div1.className = "removeDiv"
    table.className = "removeDiv"
    img.className="addDiv1"

});




let ca = document.getElementById("ca")

ca.addEventListener('click', function () {
    div1.className = "addDiv"
    table.className = "removeDiv"
    img.className="removeDiv"


});

let sa = document.getElementById("sa")
console.log(sa)

sa.addEventListener('click', function () {
    table.className = "addDiv"
    img.className="removeDiv"

    userdataArray = JSON.parse(localStorage.getItem("userdata"))
    for (const key in userdataArray) {
        const { username, password, phoneno } = userdataArray[key]
        let newRow = regtable.insertRow(regtable.rows.length);
        let newCell1 = newRow.insertCell(0);
        let username1 = username
        let newText1 = document.createTextNode(username1);
        newCell1.appendChild(newText1);

        let newCell2 = newRow.insertCell(1);
        let password1 = password
        let newText2 = document.createTextNode(password1);
        newCell2.appendChild(newText2);



        let newCell3 = newRow.insertCell(2);
        let phno = phoneno
        let newText3 = document.createTextNode(phno);
        newCell3.appendChild(newText3);

    }
    div1.className = "removeDiv"



});


let create = document.getElementById("create")

create.addEventListener('click', function () {
    const userForm = document.forms["userform"]
    const userNameElement = userForm.username
    const passwordElement = userForm.password
    const phnoNameElement = userForm.phno




    const username = userNameElement.value
    const password = passwordElement.value
    const phno = phnoNameElement.value
    console.log("username is", username)
    console.log("password is", password)




    let pUserName = document.getElementById("pusername")
    // only albhabets 
    var uname = /^[A-Za-z]{3,14}$/
    if (username.match(uname)) {
        pUserName.className = "removeStyle"
        bUserName = true;
    }
    else {
        pUserName.className = "addStyle"
        bUserName = false;
    }


    let pPassword = document.getElementById("ppassword")
    // only albhabets 
    let upass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (password.match(upass)) {
        pPassword.className = "removeStyle"
        bPassword = true;
    }
    else {
        pPassword.className = "addStyle"
        bPassword = false;
    }


    let pPhno = document.getElementById("pphno")
    // only albhabets 
    let phoneno = /^\d{10}$/;
    if (phno.match(phoneno)) {
        pPhno.className = "removeStyle"
        bPhno = true;
    }
    else {
        pPhno.className = "addStyle"
        bPhno = false;
    }



    if (bUserName == true && bPassword == true && bPhno == true) {
        var user = { username: username, password: password, phoneno: phno }

        if (localStorage.getItem("userdata")) {
            userdataArray = JSON.parse(localStorage.getItem("userdata"))
            userdataArray.push(user)
            localStorage.setItem("userdata", JSON.stringify(userdataArray))
        }
        else {
            localStorage.setItem("userdata", JSON.stringify([user]))
        }
        userForm.reset();
        alert("submitted successufully");
    }



})
let clear = document.getElementById("clear")

clear.addEventListener('click', function () {
    localStorage.clear();
})