/* 
Javascript for lowry nakamura's portfolio

*/

// comment from console log
console.log(`This Lowry Nakamura's Portfolio site`)

/* 

Toggle nav btn

*/
// toggle nav
let toggleNav = document.getElementById('showHide')
toggleNav.addEventListener('click', function(e) {
    e.preventDefault()
    let showHideNav = document.getElementById('siteNav')
    if(showHideNav.style.display === 'none' || '') {
        showHideNav.style.display = 'flex'
        showHideNav.style.transition = '05s ease-in-out;'
    } else {
        showHideNav.style.display = 'none'
    }
})



/* 

Back to top btn

*/
// show back to top link
//Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton.style.transition = " ease-in-out 1000ms"
    mybutton.style.color = "#ffffff"
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}