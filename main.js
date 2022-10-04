let cola_kaloria = 45;
let hamburger_kaloria = 207;
let hotdog_kaloria = 476;
let ossz =0;
function megjelenik(etelital, name){
    let show = document.getElementById('show');
    let input = document.createElement('input');
    show.value = "";
    show.textContent = name+' kalóriája: '
    input.type = 'number';
    input.readOnly = "true";
    input.style.border = '0';
    input.value = etelital;
    show.appendChild(input);
    kaloriaSum(input.value);


 
}

function kaloriaSum(num){

    let showsum = document.getElementById('showSum');
    let osszes = document.createElement('input');
    showsum.textContent = 'Össz kalória: ';
    osszes.value = (osszes.value + num);
    osszes.type = 'number';
    osszes.readOnly = "true";
    osszes.style.border = '0';
    showsum.appendChild(osszes);
}

function colaKatt(){
    megjelenik(cola_kaloria, 'Kóla');
}
function hotdogKatt(){
    megjelenik(hotdog_kaloria, 'Hot Dog');
}
function hamburgerKatt(){
    megjelenik(hamburger_kaloria, 'Hamburger');
}
function init(){
    document.getElementById('cola').addEventListener('click',colaKatt);
    document.getElementById('hotdog').addEventListener('click',hotdogKatt);
    document.getElementById('hamburger').addEventListener('click',hamburgerKatt);
}

document.addEventListener('DOMContentLoaded',init)