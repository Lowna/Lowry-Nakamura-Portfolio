// comment from console log
console.log(`This Lowry Nakamura's Portfolio site`)

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

// show back to top link

let showTopScroll = document.getElementById('topUp')