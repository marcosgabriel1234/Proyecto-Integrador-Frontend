

let menu = document.getElementById('menu');

let Open = document.getElementById('open-menu');
let Close = document.getElementById('close-menu');

Open.addEventListener('click', ToggleMenu);
Close.addEventListener('click', ToggleMenu);

function ToggleMenu(){
    menu.classList.toggle('show-menu');

    if( menu.classList.contains('show-menu')){
        Open.style.display= 'none';
        Close.style.display= 'block';
    }
    else{
        Open.style.display= 'block';
        Close.style.display= 'none';
    }
}