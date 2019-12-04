let register = document.getElementById("reg")

register.addEventListener('click', function () {
    const userForm = document.forms["userform"]
    const userNameElement = userForm.username
    const ageElement = userForm.age
    const emailElement = userForm.email
    const phnoNameElement = userForm.phno
      


  
    const username = userNameElement.value
    const age = ageElement.value
    const email= emailElement.value
    const phno = phnoNameElement.value
    console.log("username is", username)
    console.log("password is", age)
    


    let pUserName = document.getElementById("pusername")
    // only albhabets 
    var uname = /^[A-Za-z]{3,14}$/
    if (username.match(uname)) {
        pUserName.className = "removeStyle"
        bUserName= true;
    }
    else {
        pUserName.className = "addStyle"
        bUserName= false;
    }

    let pAge = document.getElementById("page")
    var x = parseInt(age, 10) // its the value from the input box;
    if (isNaN(x) || x < 1 || x > 150) {
        
        pAge.className = "addStyle"
        bAge= false;
    }
    else {
        pAge.className = "removeStyle"
        bAge= true
    }

    let pEmail = document.getElementById("pemail")
    // only albhabets 
    let uemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (email.match(uemail)) {
        pEmail.className = "removeStyle"
        bEmail= true;
    }
    else {
        pEmail.className = "addStyle"
        bEmail= false;
    }

    
    let pPhno = document.getElementById("pphno")
    // only albhabets 
    let phoneno = /^\d{10}$/;
    if (phno.match(phoneno)) {
        pPhno.className = "removeStyle"
        bPhno= true;
    }
    else {
        pPhno.className = "addStyle"
        bPhno= false;
    }

    if(bUserName==true && bAge==true && bEmail==true && bPhno==true)
    {
        var user = {username:username,age:age,email:email,phoneno:phno}
        
        if(localStorage.getItem("userdata")) {
            userdataArray = JSON.parse(localStorage.getItem("userdata"))
            userdataArray.push(user)
            localStorage.setItem("userdata",JSON.stringify(userdataArray))
        }
        else {
            localStorage.setItem("userdata",JSON.stringify([user]))
        }
        userForm.reset();
        userdataArray = JSON.parse(localStorage.getItem("userdata"))
        let div2=document.getElementById("div2");
        div2.className="add"

for (const key in userdataArray)
{
    const {username,age,email,phoneno}=userdataArray[key] 
    
let newRow=regtable.insertRow(regtable.rows.length );
let newCell1  = newRow.insertCell(0);
let username1 = username
let newText1  = document.createTextNode(username1);
newCell1.appendChild(newText1);

let newCell2 = newRow.insertCell(1);
let age1 = age
let newText2  = document.createTextNode(age1);
newCell2.appendChild(newText2);

let newCell3 = newRow.insertCell(2);
let email1 = email
let newText3  = document.createTextNode(email1);
newCell3.appendChild(newText3);

let newCell4= newRow.insertCell(3);
let phno = phoneno
let newText4  = document.createTextNode(phno);
newCell4.appendChild(newText4);

}
    }


  
})
let clear = document.getElementById("clear")

clear.addEventListener('click', function () {
    localStorage.clear();
    
})
