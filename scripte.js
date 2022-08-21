let contactUs = document.getElementById(`contactus`)
let searchValue = document.getElementById(`inputsearch`).value //search value use an if statment
// let SuggestionsValue = document.getElementById(`inputvalue`)
// let error0 = document.getElementById(`error`)
let mystery = [` A Good Girl's Guide to Murder`,` A Forgotten Murder`,` Murder on the Orient Express`]
let classics = [ `The Great Gatsby`,`The Count of Monte Cristo`, `The Catcher in the Rye`] 
let fantasy = [`Six of Crow`, `The Lord of the Rings`,`Harry Potter and the Half-Blood Prince`]



let mysterybookname = document.getElementById(`mysterybookname`)
let classicsbookname = document.getElementById(`mysterybookname`)
let fantasybookname = document.getElementById(`mysterybookname`)


//button page1
function Submit(){
   
        contactUs.innerHTML = `<h1>Thank You For Contacting Us!</h1>`
    // put a if statment --> when the input is empty show an error alert
}
mystery.forEach(x => {
  bookname.innerHTML += `      
  <div class="box">
        <h1>${x}</h1>
     
        <h4>price</h4>
        <button id = "cartbtn" class ="btn">Add To Cart</button>
    </div>`
});
//    <img src="${x}" alt="book" width="200px">



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
