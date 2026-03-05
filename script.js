let cart=[];

function addToCart(name,price){
cart.push({name,price});
alert(name + " added to cart");
localStorage.setItem("cart",JSON.stringify(cart));
}

window.onload=function(){
let items=JSON.parse(localStorage.getItem("cart")) || [];
let cartDiv=document.getElementById("cartItems");
if(cartDiv){
items.forEach(item=>{
cartDiv.innerHTML+=`<p>${item.name} - ₹${item.price}</p>`;
});
}
}

// 
function placeOrder(){

    let popup = document.getElementById("successPopup");
    let sound = document.getElementById("successSound");

    popup.style.display = "flex";
    sound.play();

    localStorage.removeItem("cart");

    setTimeout(()=>{
        popup.style.display = "none";
        window.location.href="index.html";
    },3000);
}