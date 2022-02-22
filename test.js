const btn = document.getElementById('btn');
const img = document.querySelector('label img');
const anim = 'anim';

function adc(){
        header.classList.toggle('anim');
        main.classList.toggle('anim');
        if (header.classList.contains('anim') && main.classList.contains('anim')){
            img.setAttribute('src', 'https://laboratoriodaalana.netlify.app/img/moon.png');
        }else{
            img.setAttribute('src', 'https://laboratoriodaalana.netlify.app/img/sun.png');
        }
}


btn.addEventListener('change', adc);
