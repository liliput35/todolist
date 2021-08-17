const addBtn = document.getElementById('addtodo-el');
const itemList = document.getElementById('ul-el');
const inputEl = document.getElementById('input-el')
addBtn.addEventListener('click', addItem)
itemList.addEventListener('click', removeItem)

function addItem(){
  //get input value
  newItem = document.getElementById('input-el').value;
  //get div
  let todoDiv = document.createElement('div');
  todoDiv.classList.add('list-div')
  todoDiv.setAttribute('id', 'div-el')
  //create li
  let li = document.createElement('li');
  li.textContent = newItem;
  //append to div
  todoDiv.appendChild(li)
  //buttons
  let checkBtn = document.createElement('button')
  checkBtn.setAttribute('id', 'check-el')
  checkBtn.textContent = '✓'
  checkBtn.classList.add('check-btn')
  todoDiv.appendChild(checkBtn)
  let deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'X'
  deleteBtn.classList.add('delete-btn')
  todoDiv.appendChild(deleteBtn)

  itemList.appendChild(todoDiv)
  inputEl.value = ''
}

function removeItem(e){
  if(e.target.classList.contains('delete-btn')){
    let div = e.target.parentElement;
    itemList.removeChild(div);
  }
  if(e.target.classList.contains('check-btn')){
    let div = e.target.parentElement;
    div.style.background = '#b4b4b4';
    let li = e.target.previousElementSibling;
    li.style.textDecoration = 'line-through'
  }
}

