const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const marioContainer = document.querySelector(".mario-container");
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value;

  if (text != "") {
    const li = document.createElement("li");
    // const p = document.createElement("p");
    // p.className = "parrafo-li";
    li.className = "li-name"
    // p.textContent = text;
    li.textContent = text;
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");
  const deleteImg = document.createElement("img");

  deleteImg.src = "../imagen/bomba.webp";
  deleteBtn.appendChild(deleteImg);
  deleteImg.className = "img-btn-delete";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    const item1 = item.parentElement
    ul.removeChild(item1);
  });

  return deleteBtn;
}

let arrayUser=[];
let nombreAleatorio ="";
const addBtnLet = document.querySelector(".btn-lets-go");
addBtnLet.addEventListener("click", (e) => { 
  arrayUser = [];
  const valor=document.querySelectorAll(".li-name") 
  for(let i=0; i<valor.length; i++){ 
    arrayUser.push(valor[i].textContent); 
  } 
  console.log(arrayUser); 
  // console.log(randomUser(arrayUser));
  e.preventDefault(); 
  nombreAleatorio = randomUser(arrayUser);
  console.log(nombreAleatorio);
  console.log(arrayUser);
  arrayUser = deleteUser(arrayUser, nombreAleatorio);
  e.preventDefault(); 
  // nombreAleatorio = randomUser(arrayUser);
  console.log(nombreAleatorio);
  console.log(arrayUser);
});

function randomUser(arrayUser){
  const aleatorio = arrayUser[Math.floor(Math.random() * arrayUser.length)];
  return aleatorio
}


function deleteUser(arrayUser, nombre){
  const filteredLibraries = arrayUser.filter((item) => item !== nombre)
  const valor = document.querySelectorAll(".li-name");
  if(valor.length === 1){
    swal ( "Ganaste " + nombre );
  }
  else{
    swal ( "Perdiste " + nombre );
  }
  for(let i=0; i<valor.length; i++){  
    // console.log(valor[i].textContent);
    if(nombre === valor[i].textContent){
      ul.removeChild(valor[i])
      
    }
  }
  return filteredLibraries
}
// const start = document.querySelector(".btn-lets-go-2");
// start.addEventListener("click", (e) => {
  
  
  

//   }
// );
// console.log(nombres.length)
// for (let i = 0; i <= nombres.length; i++) {
//   console.log(i)
//   console.log(nombres);
//   console.log(nombres.length);
//   let nameRandom = randomUser(nombres);
//   console.log(nameRandom);
//   nombres = deleteUser(nombres, nameRandom);
//   console.log(nombres);
// }


