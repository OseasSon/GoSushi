/**
 * Check if the password entered is valid
 */

 $("#password").on("keyup", function(e) {

    if (e.which == 13) // the enter key ascii code
    {
        validate();
    }
});

var valid = "false";

function validate(){
    var password = document.getElementById('password').value;    
    var regx = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,64})/;
    
    if (regx.test(password)){
        document.getElementById('invalid').style.display = "none";
        document.getElementById('valid').style.display = "inline";
        valid = "true";
    }
    else{
        document.getElementById('valid').style.display = "none";
        document.getElementById('invalid').style.display = "inline";
    }
}

/**
 * Generate random customers
 */
 $("#getRandom").click(function(e) {
     if (valid == "true"){
         getRandom();
         $("#alert-message").text("Access granted").css({'color': 'green', 'font-weight': 'bold'});
     }
     else if (valid == "false") {
         $("#alert-message").text("Please, enter a valid password.").css({'color': 'red', 'font-weight': 'bold'});
     }
 });

function getRandom(){
    fetch('https://randomuser.me/api/?results=6')
    .then((res) => res.json())
    .then((data) => {
        let author = data.results;
        let output = ''
        console.log(data);
        author.forEach(function(user){
            output += `
                <div class="card jumbotron cardDiv" style="width:300px">
                    <div style="text-align:center">
                        <img class="card-img-top cardImg" src="${user.picture.large}" alt="Card image">
                    </div>    
                    <div class="card-body" style="text-align:left">
                        <h4 class="card-title">${user.name.title} ${user.name.last}</h4>
                        <p class="card-text">Age: ${user.dob.age}</p>
                        <p class="card-text">Gender: ${user.gender}</p>
                        <p class="card-text">From: ${user.location.country}</p>
                    </div>
                </div>
                `;
            });

        document.getElementById('output').innerHTML = output;

    })
}