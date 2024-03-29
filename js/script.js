window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "d90noo0b",
    user_id: "1234",
    // email: "mytest.intercom@gmail.com", // User ID
    custom_launcher_selector:'#my_custom_link',
    hide_default_launcher: true,
    // user_hash: "fa8d4975081eda190c792e5f849746979271088989fc3fda1ef38bf278d1214e" // HMAC using SHA-256
  };

// We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/d90noo0b'
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/d90noo0b';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();


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
//--------------------------------------------------------------------------------------------------------------------------------//

/**
 * Generate random customers
 */

//check if password is valid and display a message beside the customer generator button
$("#getRandom").click(function(e) {
    if (valid == "true"){
        getRandom();
        $("#alert-message").text("Access granted").css({'color': 'green', 'font-weight': 'bold'});
    }
    else if (valid == "false") {
        $("#alert-message").text("Please, enter a valid password.").css({'color': 'red', 'font-weight': 'bold'});
    }
});

//takes data from randomuser.me API and displays it as cards on the screen
function getRandom(){
    //fetching data from the API (I limited it to 6 users using "?results=6")
    fetch('https://randomuser.me/api/?results=6')
    //check for a good response in json format
    .then((res) => res.json()) 
    //displays data
    .then((data) => { 
        let author = data.results;
        let output = ''
        console.log(data);
        //runs through each user and generate html code to display
        author.forEach(function(user){
            output += `
                <div class="card jumbotron cardDiv" style="width:300px">
                    <div style="text-align:center">
                        <img class="card-img-top cardImg" src="${user.picture.large}" alt="Card image">
                    </div>    
                    <div class="card-body" style="text-align:left">
                        <h4 class="card-title"> ${user.name.title} ${user.name.last}</h4>
                        <p class="card-text">Age: ${user.dob.age}</p>
                        <p class="card-text">Gender: ${user.gender}</p>
                        <p class="card-text">From: ${user.location.country}</p>
                    </div>
                </div>
                `;
            });
        //inserts the output variable into the dom
        document.getElementById('output').innerHTML = output;

    })
}
//--------------------------------------------------------------------------------------------------------------------------------//

/**
 * Calculates the menu total
 */
   
function CalculateItemsValue(){
 
    var total = 0;
    var totalWithVat = 0;
    var totalItems = 20;
    var sashimiTotal = 0;
    var nigiriTotal = 0;
    var hossomakiTotal = 0;
    var drinksTotal = 0;
    var uramakiTotal = 0;
    var vegTotal = 0;
    var nonVegTotal = 0;
    var vatInEuro = 0;

    //calculates subtotal
    for (var index = 1; index <= totalItems; index++) {
             
        itemID = document.getElementById("qnt_" + index);
        total = total + parseFloat(itemID.value) * parseFloat(itemID.getAttribute("data-price"));
    }

    //calculates sashimi total
    for (var index = 1; index <= 4; index++) {
             
        sashimi = document.getElementById("qnt_" + index);
        sashimiTotal = sashimiTotal + parseFloat(sashimi.value) * parseFloat(sashimi.getAttribute("data-price"));
    }

    //calculates nigiri total
    for (var index = 5; index <= 8; index++) {
             
        nigiri = document.getElementById("qnt_" + index);
        nigiriTotal = nigiriTotal + parseFloat(nigiri.value) * parseFloat(nigiri.getAttribute("data-price"));
    }

    //calculates hossomaki total
    for (var index = 9; index <= 12; index++) {
             
        hossomaki = document.getElementById("qnt_" + index);
        hossomakiTotal = hossomakiTotal + parseFloat(hossomaki.value) * parseFloat(hossomaki.getAttribute("data-price"));
    }

    //calculates drinks total
    for (var index = 13; index <= 16; index++) {
             
        drinks = document.getElementById("qnt_" + index);
        drinksTotal = drinksTotal + parseFloat(drinks.value) * parseFloat(drinks.getAttribute("data-price"));
    }

    //calculates uramaki total
    for (var index = 17; index <= 20; index++) {
             
        uramaki = document.getElementById("qnt_" + index);
        uramakiTotal = uramakiTotal + parseFloat(uramaki.value) * parseFloat(uramaki.getAttribute("data-price"));
    }

    //calculates veg total
    veg1 = document.getElementById('qnt_11');
    veg2 = document.getElementById('qnt_19');
    vegTotal = parseFloat(veg1.value) * parseFloat(veg1.getAttribute("data-price")) + parseFloat(veg2.value) * parseFloat(veg2.getAttribute("data-price"));

    //calculates total + vat
    totalWithVat = total + total * (parseFloat(document.getElementById('vat').getAttribute("value-percentage")) / 100);

    //calculates non-veg total
    nonVegTotal = total - vegTotal;

    //calculates vat paid in euro
    vatInEuro = total * (parseFloat(document.getElementById('vat').getAttribute("value-percentage")) / 100);

    //insert the values calculated inside the html element
    document.getElementById('subTotal').innerHTML = "€" + total.toFixed(2);
    document.getElementById('itemsTotal').innerHTML = "€" + totalWithVat.toFixed(2);
    document.getElementById('sashimi').innerHTML = "€" + sashimiTotal.toFixed(2);
    document.getElementById('nigiri').innerHTML = "€" + nigiriTotal.toFixed(2);
    document.getElementById('hossomaki').innerHTML = "€" + hossomakiTotal.toFixed(2);
    document.getElementById('drinks').innerHTML = "€" + drinksTotal.toFixed(2);
    document.getElementById('uramaki').innerHTML = "€" + uramakiTotal.toFixed(2);
    document.getElementById('veg').innerHTML = "€" + vegTotal.toFixed(2);
    document.getElementById('non-veg').innerHTML = "€" + nonVegTotal.toFixed(2);
    document.getElementById('vat-eu').innerHTML = "€" + vatInEuro.toFixed(2);
}

//calls the function when keyup
document.querySelectorAll('[id^="qnt_"]').forEach(item => {
 
    item.addEventListener('keyup', CalculateItemsValue);
});
//--------------------------------------------------------------------------------------------------------------------------------//
