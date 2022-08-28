
//let searchValue = document.getElementById(`inputsearch`).value search value use an if statment
let SuggestionsValue = document.getElementById(`inputvalue`);
// let error0 = document.getElementById(`error`)
//button page1

function Submit(){
    let contactUs = document.getElementById(`contactus`);
        // contactUs.innerHTML = `<h1>Thank You For Contacting Us!</h1>`
    if (SuggestionsValue == 0 ){
        alert(`please fill the seggestions box`);
        }else{
              contactUs.innerHTML = `<h1>Thank You For Contacting Us!</h1>`
        }
        
}


//products
let mystery = [
{name:`A Good Girl's Guide to Murder`, img:`./products/goodgirlsguide.jpg`, price:`2.400kwd`},
 {name:`A Forgotten Murder`, img:`./products/aforgottenmurder.jpg`, price:`1.500kwd`},
 {name:`Murder on the Orient Express`, img:`./products/Murder-on-the-Orient-Express.jpg`, price:`4.500kwd`},
]
let classics = [ 
     {name:`The Great Gatsby`, img:`./products/The_Great_Gatsby_Cover_1925_Retouched.jpg`, price:`7.000kwd`},
      {name:`Pride and Prejudice`, img:`./products/prideandprejudice.jpg`, price:`6.050kwd`,},
       {name:`The Catcher in the Rye`, img:`./products/catcherintheray.jpg`, price:`4.000kwd`},
]
let fantasy = [
 {name:`Six of Crow`, img:`./products/SixofCrows.jpg`, price:`3.500kwd`},
  {name:`The Lord of the Rings`, img:`./products/TheLordoftheRings.jpg`, price:`8.000kwd`},
   {name:`Harry Potter and the Half-Blood Prince`, img:`./products/harrypotter.jpg`, price:`8.500kwd`},
]
let mysterybookname = document.getElementById(`mysterybookname`);
let classicsbookname = document.getElementById(`classicsbookname`);
let fantasybookname = document.getElementById(`fantasybookname`);


mystery.forEach(x => {
    mysterybookname.innerHTML += `      
  <div class="box">
        <h1>${x.name}</h1>
        <img src="${x.img}" alt="book" width="100px">
        <h4>${x.price}</h4>
        <button  class ="btn" onclick = "btnm()">Add To Cart</button>
    </div>`
});
classics.forEach(x => {
    classicsbookname.innerHTML += `      
  <div class="box">
        <h1>${x.name}</h1>
        <img src="${x.img}" alt="book" width="100px">
        <h4>${x.price}</h4>
        <button class ="btn"  onclick = "btnc()">Add To Cart</button>
    </div>`
});
fantasy.forEach(x => {
    fantasybookname.innerHTML += `      
  <div class="box">
        <h1>${x.name}</h1>
        <img src="${x.img}" alt="book" width="100px">
        <h4>${x.price}</h4>
        <button class ="btn"  onclick = "btnf()">Add To Cart</button>
    </div>`
});



//button
let addtocart = document.getElementById(`addtocart`);
let addcart = document.getElementById(`addcart`);
let newcart = document.getElementById(`newcart`);

function btnm() {
    mystery.forEach(x => {

        addtocart.innerHTML +=  `
        <div class="boxs">
        <img src="${x.img}" alt="" width="150px">
        <div class="center">
        <h1>${x.name}</h1> 
        <p>${x.price}</p>
        </div> 
       <img src="./pics/trash.png" width="45px" onclick ="removem()"> 
        </div>`;
     });
}




function btnc() {
    classics.forEach(x => {

        addcart.innerHTML +=  `
        <div class="boxs">
        <img src="${x.img}" alt="" width="150px">
        <div class="center">
        <h1>${x.name}</h1>
        <p>${x.price}</p>
        </div> 
        <img src="./pics/trash.png" width="45px" onclick ="removec()"> 
        </div>`;
     });
}
function btnf() {
    fantasy.forEach(x => {

        newcart.innerHTML +=  `
        <div class="boxs">
        <img src="${x.img}" alt="" width="150px">
        <div class="center">
        <h1>${x.name}</h1>
         <p>${x.price}</p>
        </div> 
        <img src="./pics/trash.png" width="45px" onclick ="removef()"> 
        </div>`;
     });
}
function removem(){
    addtocart.innerHTML ="";
    

 }
 function removec(){

       addcart.innerHTML ="";
 


 }
 function removef(){
   
       newcart.innerHTML = "";


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

