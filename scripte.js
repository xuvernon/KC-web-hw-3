
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

let cartbtn = document.getElementById(`cartbtn`)
 let shopbox = document.getElementById(`shopbox`)
function btnc() {
    coffeesArray.forEach(x => {

        shopbox.innerHTML += `
        <div class="boxs">
            <img src="./products/IcedTea.jpg" alt="" width="250px">
            <div class="center">
            <h1>${x}</h1>
            <p>2.000kwd</p>
            </div>
            <img src="./pics/trash.png" width="45px">
        </div>
    `
    });
   
    
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

