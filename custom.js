console.log('custom js loaded');

setTimeout(function() {


    console.log('DOM LOADED');

  var imgElements = document.getElementsByTagName('img');

    console.log(imgElements);

  if(imgElements.length > 0) {
    
    for(let i of imgElements) {

  var imgAttr = i.getAttribute('src');

  var newAttr = imgAttr.replace('/bharovikranti/', '');

  i.setAttribute('src', newAttr);

  console.log(i);
  }
  }
  


}, 2000)
