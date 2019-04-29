let send = document.getElementById("btn1");
let fields = document.getElementsByClassName("form-control");

function passwordLength() {
    if (fields[4].value.length < 8) {
        return alert('Password must have at least 8 characters');}
    }

function emptyInputs() {
    for (let el of fields){
    if ( el.value =="") 
        return alert('All fields must be filled');
    }}
function contains() {
    let RE = /[A-Z]+/g;
    let re1 = /[0-9]+/g;
    let pass = fields[4].value
    if (re1.test(pass) == false || RE.test(pass) == false) {
        return alert('Password must contain numbers and at least one capital letter');}
    }

send.addEventListener('click',()=>{emptyInputs();})
fields[4].addEventListener('change',()=>{passwordLength();contains();})
fields[3].addEventListener('change',()=>{validateEmail();})

function validateEmail() {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let email = fields[3].value
    if (re.test(email) == false) {
    return alert('E-mail not valid');}}
