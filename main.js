const theme = document.getElementById('theme');
const bodyClass = document.querySelector('body');

theme.addEventListener('click', () =>{
    bodyClass.classList.toggle('dark-theme');

    if(theme.checked == true){
        document.querySelector('#title').innerHTML = "Dark-Mode Style";
        document.querySelector('label').innerHTML = "Dark-Mode: Ativado.";
    }
    else{
        document.querySelector('#title').innerHTML = "Light-Mode Style";
        document.querySelector('label').innerHTML = "Dark-Mode: Desativado.";
    }
});

