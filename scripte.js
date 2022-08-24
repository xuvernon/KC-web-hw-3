
//let searchValue = document.getElementById(`inputsearch`).value search value use an if statment
// let SuggestionsValue = document.getElementById(`inputvalue`)
// let error0 = document.getElementById(`error`)

//button page1

function Submit(){
    let contactUs = document.getElementById(`contactus`)
        contactUs.innerHTML = `<h1>Thank You For Contacting Us!</h1>`
    // put a if statment --> when the input is empty show an error alert
}


//products
// let mystery = [`A Good Girl's Guide to Murder`,` A Forgotten Murder`,` Murder on the Orient Express`]
// let classics = [ `The Great Gatsby`,`Pride and Prejudice`, `The Catcher in the Rye`] 
// let fantasy = [`Six of Crow`, `The Lord of the Rings`,`Harry Potter and the Half-Blood Prince`]

let mystery = [
{name:`A Good Girl's Guide to Murder`, img:`./products/goodgirlsguide.jpg`, price:`2.400`,btn:`Add To Cart`},
 {name:`A Forgotten Murder`, img:`.`, price:``,btn:``},
 {name:`Murder on the Orient Express`, img:`./products/aforgottenmurder.jpg`, price:`1.500`,btn:`Add To Cart`},
]
let classics = [ 
     {name:`The Great Gatsby`, img:`./products/The_Great_Gatsby_Cover_1925_Retouched`, price:``,btn:`Add To Cart`},
      {name:`Pride and Prejudice`, img:``, price:``,btn:`Add To Cart`},
       {name:`The Catcher in the Rye`, img:``, price:``,btn:`Add To Cart`},
]
let fantasy = [
    
 {name:`Six of Crow`, img:``, price:``,btn:`Add To Cart`},
  {name:`The Lord of the Rings`, img:``, price:``,btn:`Add To Cart`},
   {name:`Harry Potter and the Half-Blood Prince`, img:``, price:``,btn:`Add To Cart`},
]
let mysterybookname = document.getElementById(`mysterybookname`)
let classicsbookname = document.getElementById(`classicsbookname`)
let fantasybookname = document.getElementById(`fantasybookname`)











mystery.forEach(x => {
    mysterybookname.innerHTML += `      
  <div class="box">
        <h1>${x}</h1>
        <img src="${x}" alt="book" width="200px">
        <h4>price</h4>
        <button id = "cartbtn" class ="btn" onclick = "btnc()">Add To Cart</button>
    </div>`
});
classics.forEach(x => {
    classicsbookname.innerHTML += `      
  <div class="box">
        <h1>${x}</h1>
        <img src="${x}" alt="book" width="200px">
        <h4>price</h4>
        <button id = "cartbtn" class ="btn">Add To Cart</button>
    </div>`
});
fantasy.forEach(x => {
    fantasybookname.innerHTML += `      
  <div class="box">
        <h1>${x}</h1>
        <img src="${x}" alt="book" width="200px">
        <h4>price</h4>
        <button id = "cartbtn" class ="btn">Add To Cart</button>
    </div>`
});















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

