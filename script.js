const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate';
const app1 = "app2"

function animeScroll(){
    const windowTop = window.pageYOffset +500;
    target.forEach(function(element){
        if( (windowTop) > element.offsetTop){
            element.classList.add(animationClass);
            element.classList.add(app1);
        }
    })
}
window.addEventListener('scroll', function(){
    animeScroll()
})

const apps = document.querySelectorAll( "[data-scroll]");
const teste = "app2"

function Scroll(){
    apps.forEach((app) => {
        const sectionTOP = app.getBoundingClientRect().top +10;
        if (sectionTOP < 0){
            app.classList.add('teste')
        }

    })
}


window.addEventListener('scroll', Scroll())