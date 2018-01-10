var ahmed = new Object();

var ahmed_right = 50;
var ahmed_down = 50;
var ahmed_left = 325;
var ahmed_up = 155;

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
		img.style.left = e.clientX - ahmed_right + "px"; 
		img.style.top = e.clientY - ahmed_down + "px";
		img.style.backgroundPosition = "" + (ahmed_left-relativeX) + "px " + (ahmed_up-relativeY) + "px";
	}
	var img_x = img.style.left;
	var img_y = img.style.top;
}


