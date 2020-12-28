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

elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var newToDo = {};

  newToDo.text = elInput.value;
  newToDo.complated = false;

  toDoList.push(newToDo);
  console.log(toDoList);
});