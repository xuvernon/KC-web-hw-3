
//let searchValue = document.getElementById(`inputsearch`).value search value use an if statment
// let SuggestionsValue = document.getElementById(`inputvalue`)
// let error0 = document.getElementById(`error`)

//button page1

function Submit(){
    let contactUs = document.getElementById(`contactus`)
        contactUs.innerHTML = `<h1>Thank You For Contacting Us!</h1>`
    // put a if statment --> when the input is empty show an error alert
}



//button
let cartbtn = document.getElementsByClassName(`cartbtn`)
//  let shopbox = document.getElementById(`shopbox`)
let addcart =[`Add To Cart`,`Add To Cart`,`Add To Cart`,`Add To Cart`,`Add To Cart`,`Add To Cart`,`Add To Cart`,`Add To Cart`,`Add To Cart`]


addcart.forEach(x => {
    cartbtn.innerHTML =`<button class ="btn" onclick ="btnc()">${x}</button>`  
});

function btnc() {

}

//navbar
window.onscroll = function() {stickynav()};
    
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
  
function stickynav() {
if (window.pageYOffset >= sticky) {
navbar.classList.add("sticky")
} else {
navbar.classList.remove("sticky");
}
}

