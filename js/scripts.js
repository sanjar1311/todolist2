var toDoList = [];

var $_ = function(selector, node = document) {
  return node.querySelector(selector);
}

var $$_ = function(selector, node = document) {
  return node.querySelectorAll(selector);
}

var createElement = function(element, elementClass, elementText) {
  var newElement = document.createElement(element);

  if(elementClass) {
    newElement.setAttribute('class', elementClass);
  }

  if(elementText) {
    newElement.textContent = elementText;
  }

  return newElement;
}

var elForm = $_('.js-form');
if(elForm) {
  var elInput = $_('.js-input', elForm);
var elCheckbox = $_('.js-checkbox', elForm);
}


var addTodo = function(todo, isImportant) {
  if(isImportant) {
    toDoList.unshift(todo);
  }else{
    toDoList.push(todo);
  }
}

elInput.focus();
elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var newToDo = {
    text: elInput.value,
    complated: false
  }

  var isImportant = elCheckbox.checked;

  addTodo(newToDo, isImportant);


   console.log(toDoList);
    elInput.value = '';
  });