var imgElements = document.getElementsByTagName('img');

imgElements.forEach((img) {
  var imgAttr = img.getAttribute('src');

  imgAttr.replace("/bharovikranti/", "");

  img.setAttribute('src', imgAttr);

  consol.log(imgAttr);
  
  
})
