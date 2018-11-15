window.onload = function() {
  document
    .getElementById('outer')
    .addEventListener('click', outerDivClick, false);
    
  document
    .getElementById('middle')
    .addEventListener('click', middleDivClick, false);

  document
    .getElementById('inner')
    .addEventListener('click', innerDivClick, false);

  document
    .getElementById('clearButton')
    .addEventListener('click', clearList);
};

function outerDivClick() {
  appendText('outer Div Clicked');
}

function middleDivClick() {
  appendText('middle Div Clicked');
}

function innerDivClick() {
  appendText('inner Div Clicked');
  // window.event.cancelBubble = true;
}

function appendText(s) {
  var li = document.createElement('li');
  li.innerText = s;
  document.getElementById('eventOrder').appendChild(li);
}

function clearList() {
  var ol = document.createElement('ol');
  ol.id = 'eventOrder';
  var element = document.getElementById('eventOrder');
  element.parentNode.removeChild(element);
  var outerDiv = document.getElementById('list');
  outerDiv.appendChild(ol);
}
