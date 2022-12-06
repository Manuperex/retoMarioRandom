const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value;

  if (text != "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;
    li.appendChild(p);
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
