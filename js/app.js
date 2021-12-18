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

window.addEventListener('click', function(e) {
console.log(e)

})