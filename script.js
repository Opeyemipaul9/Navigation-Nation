const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

function toggleNav(){
    // Toggle Menu Bars open/closed
    menuBars.classList.toggle('change');
    
    // Toggle:Menu Active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        // Animate in-overlay
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');
    }
    else
    {
        // Animate out-Overlay
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
    }
    console.log('JAMES');
}


// Event Listeners


menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('clcick', toggleNav);
nav2.addEventListener('clcick', toggleNav);
nav3.addEventListener('clcick', toggleNav);
nav4.addEventListener('clcick', toggleNav);
nav5.addEventListener('clcick', toggleNav);