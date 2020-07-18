export function formValidate(data) {
    let emailError = "";
    let messageError = "";
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //Check email
    if (!data.email.match(mailformat)) {
        emailError = 'Invalid email address!';
        document.getElementById('emailError').innerHTML = emailError;
        console.log(emailError);
    }

    //Check message
    if (data.message.length < 30) {
        messageError = 'The message must be longer than 30 characters';
        document.getElementById('messageError').innerHTML = messageError;
        console.log(messageError);
    }

    if (emailError || messageError) {

        return false;
    }

    return true;
}


