const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show')
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show')
});

















// const input = document.querySelector('input');
// const addBtn = document.querySelector('.btn-add');
// const ul = document.querySelector('ul');
// const empty = document.querySelector('.empty');

// addBtn.addEventListener('click',(e) =>{
//     e.preventDefault();
//     const text = input.value  

//     if(text != ''){
    
//     const li = document.createElement('li');
//     const p = document.createElement('p');
//     p.textContent = text;

//     li.appendChild(p);
//     li.appendChild(addDeleteBtn());
//     ul.appendChild(li);

//     input.value = "";
//     empty.style.display = 'none';
//     }
// })

// function addDeleteBtn(){
//     const deleteBtn = document.createElement('button');

//     deleteBtn.textContent = 'X';
//     deleteBtn.className = 'btn-delete';

//     deleteBtn.addEventListener('click', (e) => {
//         const item = e.target.parentElement;
//         ul.removeChild(item);

//         const items = document.querySelectorAll('li');

//         if(items.length === 0){
//             empty.style.display = 'block';
//         }
//     })
//     return deleteBtn;
// }




















// let p1 = document.getElementById("parrafo1");

// p1.innerHTML = ("Hola mundo");

// let elementosClase = document.getElementsByClassName("parrafos");
// console.log(elementosClase.length);
// elementosClase[1].innerHTML = ("hola");

// let contador = document.getElementById("count");
// let aument = document.getElementById("suma");
// let disminuye = document.getElementById("resta");
// let reinicio = document.getElementById("inicio");
// let counter = 0;

// function again(){
//     for (let counter = 0; counter > 0 ; counter) {
//         counter = 0
//     }
// }

// function menos(){
//     counter--;
//     contador.innerHTML = ("El numero de clicks es: " + counter);
// }

// function aumentar(){
//     counter++
//     contador.innerHTML = ("El numero de clicks es: " + counter);
//     console.log("hola mundo");
// }

// aument.addEventListener('click', aumentar);
// disminuye.addEventListener('click', menos);
// reinicio.addEventListener('click', again);

