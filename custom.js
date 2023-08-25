setTimeout(() {
  document.addEventListener('DOMContentLoaded', function () {

  var imgElements = document.getElementsByTagName('img');

  if(imgElements.length > 0) {
    for(let i of imgElements) {

  var imgAttr = i.getAttribute('src');

  var newAttr = imgAttr.replace('/bharovikranti/', '');

  i.setAttribute('src', newAttr);

  console.log(i);
  }
  }
  
}, false);

}, 2000)
