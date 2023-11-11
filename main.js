console.log("JavaScript is Working!")

document.addEventListener('DOMContentLoaded', function() { // dom-content-loader meaning the whole HTML content is fully loaded, then excecute the function
    const links = document.querySelectorAll('.navi a');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); //prevent default action after the event (prevent from jumping)

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    behavior: 'smooth',
                    top: targetElement.offsetTop
                });
            }
        });
    });
});


const checkThisOut = document.querySelector('SB');

document.getElementById('SB').addEventListener('click', function() {
    const screen2 = document.querySelector('.screen3');
    
    // Use smooth scrolling behavior
    screen2.scrollIntoView({ behavior: 'smooth' });
});



const allDrinksItem = document.querySelector('sl-menu-item[value="all-drinks"]');
const popularItem = document.querySelector('sl-menu-item[value="popular"]');
const trendingItem = document.querySelector('sl-menu-item[value="trending"]');
const carousel1 = document.querySelector('.carousel1');
const carousel2 = document.querySelector('.carousel2');
const carousel3 = document.querySelector('.carousel3');

allDrinksItem.addEventListener('click', () => {
    // Show Carousel 1 and hide Carousel 2
    carousel1.style.display = 'block';
    carousel2.style.display = 'none';
    carousel3.style.display = 'none';
});

popularItem.addEventListener('click', () => {
    // Show Carousel 2 and hide Carousel 1
    carousel1.style.display = 'none';
    carousel2.style.display = 'block';
    carousel3.style.display = 'none';
});

trendingItem.addEventListener('click',()=>{
    //show carousel 3 and hide carousel 1 and 2
    carousel1.style.display = 'none';
    carousel2.style.display = 'none';
    carousel3.style.display = 'block';
});


// a specific type of scrolling I would like by asking and referncing from ChatGPT
var scrollContainer = document.getElementById('scrollContainer');
var isAnimating = true;

scrollContainer.addEventListener('click', function() {
    if (isAnimating) {
        this.style.animation = 'none'; // Stop the animation on click
        this.style.overflowY = 'auto'; // Allow manual scrolling
    } else {
        this.style.animation = 'scrollAnimation 5s linear infinite'; // Resume the animation
        this.style.overflowY = 'hidden'; // Disable manual scrolling
    }
    
    isAnimating = !isAnimating; // Toggle the animation status
});


