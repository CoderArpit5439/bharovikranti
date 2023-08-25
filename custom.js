var imgElements = document.getElementsByTagName('img');

for(let i of imgElements) {

  var imgAttr = i.getAttribute('src');

  var newAttr = imgAttr.replace('/bharovikranti/', '');

  i.setAttribute('src', newAttr);

  console.log(i);
  
}
