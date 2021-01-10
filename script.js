const form = document.getElementById('form_content');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const company = document.getElementById('company');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const radioSection = document.getElementById('radio_section');
const firstRadioBtn = document.getElementById('first_btn');
const secondRadioBtn = document.getElementById('second_btn');
const thirdRadioBtn = document.getElementById('third_btn');
const fourthRadioBtn = document.getElementById('fourth_btn');
const lastMsg = document.getElementById('last');
const errorMessage = document.querySelectorAll('.error_msg');
const submitBtn = document.getElementById('submit_btn');

form.addEventListener('submit', (el) => {
    
    //won't submit form
    el.preventDefault();

    validateInput();
    redirectPage();
});

const validateInput = () => {

    if(firstName.value.trim() === ''){
        let fNameErr = document.getElementById('fname_err');
        const fNameErrIcon = document.getElementById('fname_err_icon');
        fNameErr.innerHTML = "First Name is required";
        fNameErr.style.visibility = "visible"; 
        firstName.classList.add('error');
        fNameErrIcon.style.visibility = "visible";
        fNameErrIcon.classList.add('error');
    } else {
        firstName.classList.add('success');
        const fNameSuccess = document.getElementById('fname_success_icon');
        fNameSuccess.style.visibility= "visible";
        fNameSuccess.classList.add('success');
    }

    if(lastName.value.trim() === ''){
        let lNameErr = document.getElementById('lname_err');
        const lNameErrIcon = document.getElementById('lname_err_icon');
        lNameErr.innerHTML = "Last Name is required";
        lNameErr.style.visibility = "visible"; 
        lastName.classList.add('error');
        lNameErrIcon.style.visibility = "visible";
        lNameErrIcon.classList.add('error');
    } else {
        lastName.classList.add('success');
        const lNameSuccess = document.getElementById('lname_success_icon');
        lNameSuccess.style.visibility= "visible";
        lNameSuccess.classList.add('success');
    }
    
    if(email.value.trim() === ''){
        let emailErr = document.getElementById('email_err');
        const emailErrIcon = document.getElementById('email_err_icon');
        emailErr.innerHTML = "Email is required";
        emailErr.style.visibility = "visible"; 
        email.classList.add('error');
        emailErrIcon.style.visibility = "visible";
        emailErrIcon.classList.add('error');
    } else {
        email.classList.add('success');
        const emailSuccess = document.getElementById('email_success_icon');
        emailSuccess.style.visibility= "visible";
        emailSuccess.classList.add('success');
    }

    if(company.value.trim() === ''){
        let companyErr = document.getElementById('company_err');
        const companyErrIcon = document.getElementById('company_err_icon');
        companyErr.innerHTML = "Company is required";
        companyErr.style.visibility = "visible"; 
        company.classList.add('error');
        companyErrIcon.style.visibility = "visible";
        companyErrIcon.classList.add('error');
    } else {
        company.classList.add('success');
        const companySuccess = document.getElementById('company_success_icon');
        companySuccess.style.visibility= "visible";
        companySuccess.classList.add('success');
    }

    if(message.value === ''){
        let messageErr = document.getElementById('message_err');
        const messageErrIcon = document.getElementById('message_err_icon');
        messageErr.innerHTML = "Message is required";
        messageErr.style.visibility = "visible"; 
        message.classList.add('error');
        messageErrIcon.style.visibility = "visible";
        messageErrIcon.classList.add('error');
    } else {
        message.classList.add('success');
        const messageSuccess = document.getElementById('message_success_icon');
        messageSuccess.style.visibility= "visible";
        messageSuccess.classList.add('success');
    }

    if(firstRadioBtn.checked==false && secondRadioBtn.checked==false && thirdRadioBtn.checked==false && fourthRadioBtn.checked ==false ){
        let radioErr = document.getElementById('radio_err');
        const radioErrIcon = document.getElementById('radio_err_icon');
        radioErr.innerHTML = "Input is required";
        radioErr.style.visibility = "visible"; 
    }

    if(lastMsg.value === ''){
        let lastMsgErr = document.getElementById('lastmsg_err');
        let lastMsgErrIcon = document.getElementById('lastmsg_err_icon');
        lastMsgErr.innerHTML = "Message is required";
        lastMsgErr.style.visibility = "visible"; 
        lastMsg.classList.add('error');
        lastMsgErrIcon.style.visibility = "visible";
        lastMsgErrIcon.classList.add('error');
    } else {
        lastMsg.classList.add('success');
        let lastMsgSuccess = document.getElementById('lastmsg_success_icon');
        lastMsgSuccess.style.visibility= "visible";
        lastMsgSuccess.classList.add('success');
    }
}

const redirectPage = () => {

    if(firstName.value.trim() && lastName.value.trim() && email.value.trim() && company.value.trim() && message.value.trim() && lastMsg.value.trim() ){
        window.location.href = 'redirect.html';
    }
}   