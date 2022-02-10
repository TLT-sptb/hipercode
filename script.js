
//Inicio da animação com Scroll
const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset +500;
    target.forEach(function(element){
        if( (windowTop) > element.offsetTop){
            element.classList.add(animationClass);
            
        }
    })
}
window.addEventListener('scroll', function(){
    animeScroll()
})
// Fim da Animação com Scroll



// Inicio da animação "Escrita"
    function typeW(elemento){
        const hArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        hArray.forEach((letra, i) =>{
            setTimeout(function (){
                elemento.innerHTML += letra;
            },75 * i)
        })
    }
const h = document.querySelector(".h1");

typeW(h);

//Fim da animação Escrita


//Cookies

