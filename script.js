let button = document.getElementById('btn');

function checkEmail(){
    let email = document.getElementById('emailField').value;
    if(!email.includes('@')){
        alert("There is not @");
    }else if(!email.includes('.')){
        alert('There is not .');
    }else{
        alert('Alright');
    }
}

button.addEventListener('click', () => {
    checkEmail();
});

