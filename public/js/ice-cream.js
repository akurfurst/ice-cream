const doc = document.getElementById("ice-cream-form");

doc.onsubmit = ()=>{
    clearErrors();
    let isValid = true;

    let name = document.getElementById("name");
    let email = document.getElementById("email");


    if(!name){
        document.getElementById("err-name").style.display = "block";
        isValid = false;
    }

    
    if(!email){
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    }
    return isValid;
}


function clearErrors(){
    let errors = document.getElementsByClassName("err");
    for(er of errors){
        er.style.display = "none"
    }
}
