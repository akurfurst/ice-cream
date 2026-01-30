const doc = document.getElementById("ice-cream-form");

doc.onsubmit = ()=>{
    clearErrors();
    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let flavor = document.getElementById("flavorSelect");
    
    //cones
    let waffle = document.getElementById("waffle").value;
    let sugar = document.getElementById("sugar").value;
    let cup = document.getElementById("cup").value;

    if(!name){
        document.getElementById("err-name").style.display = "block";

        isValid = false;
    }
    if(!email || email.indexOf('@') <0){
        //verifies a valid email
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    }
    if(flavor.value == "none"){
        document.getElementById("err-flavor").style.display = "block";
        isValid = false;
    }
    if(!waffle.value &&!cup.value &&!sugar.value){
        document.getElementById("err-cone").style.display = "block";
        isValid = false;
    }
    return false;
}


function clearErrors(){
    let errors = document.getElementsByClassName("err");
    for(er of errors){
        er.style.display = "none"
    }
}
