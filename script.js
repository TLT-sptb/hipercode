
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
// window.addEventListener('scroll', function(){
//     animeScroll()
// })
window.addEventListener('scroll', animeScroll);
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
// const p = document.querySelector(".p"); Usar se necessário
typeW(h);
// typeW(p);



//Fim da animação Escrita


