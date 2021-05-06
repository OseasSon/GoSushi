function validate(){

    var password = document.getElementById('password').value;
    
    var regx = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,64})/;

    if (regx.test(password)){
        document.getElementById('invalid').style.display = "none";
        document.getElementById('valid').style.display = "inline";
    }
    else{
        document.getElementById('valid').style.display = "none";
        document.getElementById('invalid').style.display = "inline";
    }

}