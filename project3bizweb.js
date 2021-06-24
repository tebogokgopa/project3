function placeOrder() {
    var orderForm = document.getElementById("my-form");
    results = "<h3>Success! </h3> Here is your order.";
    results += "<br>Name : " + orderForm.elements["my-name"].value;
    results += "<br>Address : " + orderForm.elements["my-address"].value;
    results += "<br>I would like to order : " + orderForm.elements["my-drink"].value;
    results += "<br>Quantity : " + orderForm.elements["my-qty"].value;
    var orderResults = document.getElementById("my-order");
    orderResults.style.display = "block";
    orderResults.innerHTML = results;
}

function overridehomecss() {
    var controlhome = document.getElementById("navlist");
    

    if (document.getElementById("homelink")) {
        controlhome.style.position = "initial";
    }else if (document.getElementById("serviceslink")) {
        controlhome.style.position = "fixed";
    } else {
        
        controlhome.style.position = "fixed"; 
    }
    
}