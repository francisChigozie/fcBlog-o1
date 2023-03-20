// Form Blur Events Listeners
document.getElementById('user').addEventListener('blur', validateUser);

document.getElementById('sub').addEventListener('blur', validateSubject);

document.getElementById('mail').addEventListener('blur', validateEmail);

document.getElementById('mobile').addEventListener('blur', validatePhone);

document.getElementById('message').addEventListener('blur', validateMessage);

// Create all functions
function validateUser() {
    const user = document.getElementById('user');
    const re = /^[a-zA-Z]{2,50}$/;
    
    if(!re.test(user.value)){
    user.classList.add('is-invalid');
    }else{
     user.classList.remove('is-invalid');
    }
}

function validateSubject() {
    const sub = document.getElementById('sub');
    const re = /^[a-zA-Z]{2,20}$/;
    
    if(!re.test(sub.value)){
    sub.classList.add('is-invalid');
    }else{
     sub.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const mail = document.getElementById('mail');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,10})$/;
    
    if(!re.test(mail.value)){
    mail.classList.add('is-invalid');
    }else{
     mail.classList.remove('is-invalid');
    }
    
}

function validatePhone() {
    const mobile = document.getElementById('mobile');
    const re = /^(\d[0-9])\d$/;
    
    if(!re.test(mail.value)){
   mobile.classList.add('is-invalid');
    }else{
    mobile.classList.remove('is-invalid');
    }
     
}

function validateMessage() {
    const message = document.getElementById('message');
    const re = /^[a-zA-Z]{5}$/;
    
    if(!re.test(message.value)){
    message.classList.add('is-invalid');
    }else{
     message.classList.remove('is-invalid');
    }
};