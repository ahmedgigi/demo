var ahmed = new Object();
ahmed.styleElement = function (element, prop, val) {
  element.style.setProperty(prop, val);
};
ahmed.toggleShow = function (sel) {
  var i, x = ahmed.getElements(sel), l = x.length;
  for (i = 0; i < l; i++) {    
    if (x[i].style.display == "none") {
      ahmed.styleElement(x[i], "display", "block");
    } else {
      ahmed.styleElement(x[i], "display", "none");
    }
  }
};

ahmed.getElements = function (id) {
  if (typeof id == "object") {
    return [id];
  } else {
    return document.querySelectorAll(id);
  }
};
	
ahmed.iets = function (e) {

	var io = document.getElementById("onderstefoto");
	var relativeX = (e.clientX - io.style.left);
	var relativeY = (e.clientY - io.style.top);
	
	var img = document.getElementById("bovenstefoto");
	if (relativeX>300 && relativeY>50) {
		img.style.left = e.clientX - 50 + "px"; 
		img.style.top = e.clientY - 50 + "px";
		img.style.backgroundPosition = "" + (325-relativeX) + "px " + (155-relativeY) + "px";
	}
	var img_x = img.style.left;
	var img_y = img.style.top;
}


