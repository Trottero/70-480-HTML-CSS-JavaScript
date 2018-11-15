window.onload = function() {
  var element = document.getElementById('innerDiv');
  alert(element.innerHTML);
};

function removeElement() {
  var element = document.getElementById('innerDiv');
  element.parentNode.removeChild(element);
  var afterRemove = document.getElementById('innerDiv');
  alert(afterRemove);
}

function createArticle() {
  var outerDiv = document.getElementById('outerDiv');
  var element = document.createElement('article');
  element.innerText = 'My new <article> element';
  outerDiv.appendChild(element);
}
