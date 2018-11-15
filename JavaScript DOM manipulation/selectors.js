window.onload = function() {
  var element = document.getElementById('outerDiv');
  // WITH QUERY SELECTOR
  // document.querySelector("#outerDiv");
  alert(element.innerHTML);
};

// BY TAGNAME
// window.onload = function() {
//   var paragraphs = document.getElementsByTagName('p');
//   alert(paragraphs.length);
// };

// BY CLASSNAME
// window.onload = function() {
//   var paragraphs = document.getElementsByClassName('subPara');
//   alert('<p> elements with class subPara: ' + paragraphs.length);
// };

// QUERY SELECTOR ALL
// window.onload = function() {
//   var paragraphs = document.querySelectorAll('p');
//   alert('<p> elements from query selectorAll: ' + paragraphs.length);
// };
