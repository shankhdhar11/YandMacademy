let fullname=document.getElementById("fullname");
let phonenumber=document.getElementById("phonenumber");
let address=document.getElementById("address");
let reason=document.getElementById("textarea");
let nameerror=document.getElementById("nameerror");
let phonenumbererror=document.getElementById("phonenumbererror");
let addresserror=document.getElementById("addresserror");
let reasonerror=document.getElementById("reasonerror");
let formmessage=document.getElementById("formmessage");


const formvalidation=()=>{
    iserror=false;
    if(fullname.value==""){
        nameerror.innerHTML="please enter your name!";
        nameerror.style.color="red";
        iserror=true;
    }
    else{
        nameerror.innerHTML="";
    }
    if(phonenumber.value==""){
        phonenumbererror.innerHTML="please enter your phone number!";
        phonenumbererror.style.color="red";
        iserror=true;
    }
    else if(phonenumber.value.length<10){
        phonenumbererror.innerHTML="please enter a valid phone number!";
        phonenumbererror.style.color="red";
        iserror=true;
    }
    else{
        phonenumbererror.innerHTML="";
    }
    if(address.value==""){
        addresserror.innerHTML="please enter your address!";
        addresserror.style.color="red";
        iserror=true;
    }
    else{
        addresserror.innerHTML="";
    }
    if(reason.value==""){
        reasonerror.innerHTML="please enter a reason!";
        reasonerror.style.color="red";
        iserror=true;
    }
    else{
        reasonerror.innerHTML="";
    }

    if(iserror==true){
        formmessage.innerHTML="kindly fill the form properly!";
        formmessage.style.color="red";
    }
    
    else{
        let whatsappurl="https://wa.me/919897643508?text="
        +"New inquiry regarding academy %0a"
        +"Name of customer:"+fullname.value+"%0a"
        +"Phonenumber:"+phonenumber.value+"%0a"
        +"Address:"+address.value+"%0a"
        +"Reason to contact:"+reason.value;

        formmessage.innerHTML="Sending Message.....";
        formmessage.style.color="green";
    
        window.open(whatsappurl,"_blank").focus();

        fullname.value="";
        phonenumber.value="";
        address.value="";
        reason.value="";

        formmessage.innerHTML="";
    }

    
}