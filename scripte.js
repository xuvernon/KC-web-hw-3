
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
let mystery = [` A Good Girl's Guide to Murder`,` A Forgotten Murder`,` Murder on the Orient Express`]
let classics = [ `The Great Gatsby`,`The Count of Monte Cristo`, `The Catcher in the Rye`] 
let fantasy = [`Six of Crow`, `The Lord of the Rings`,`Harry Potter and the Half-Blood Prince`]

let mysterybookname = document.getElementById(`mysterybookname`)
let classicsbookname = document.getElementById(`classicsbookname`)
let fantasybookname = document.getElementById(`fantasybookname`)


mystery.forEach(x => {
    mysterybookname.innerHTML += `      
  <div class="box">
        <h1>${x}</h1>
        <div id ="picture"></div>
        <h4>price</h4>
        <button id = "cartbtn" class ="btn">Add To Cart</button>
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
//coffees
let coffeesArray = [`Iced Americano`,`Matcha`,`Iced Tea`]
let coffeesArraypic = [`IcedAmericano.jpg`,`Matcha.jpg`,`IcedTea.jpg`]
coffeesArray.forEach(x => {

    coffees.innerHTML += `<div class="box">
        <h1>${x}</h1>
        <img src="./pics./basket.png" alt="coffee" >
        <h4>price</h4>
        <button id = "cartbtn" class ="btn">Add To Cart</button>
    </div>`
});






//navbar page2
window.onscroll = function() {stickynav()};
    
var navbar = document.getElementById("navbar2");
var sticky = navbar.offsetTop;
  
function stickynav() {
if (window.pageYOffset >= sticky) {
navbar.classList.add("sticky2")
} else {
navbar.classList.remove("sticky2");
}
}
