

window.addEvent('load', function() {
	var f = document.getElementById('foo');
	document.addEventListener('click', function(ev){
	   // f.style.left = (ev.clientX-25)+'px';
	   // f.style.top = (ev.clientY-25)+'px';
	   // f.style.width = '70px';
	   // f.style.height = '70px';
	},false);    


	document.getElementById("playButton").onclick = function () { 
		//alert('scale(1.5) ' + 'rotate(' + document.getElementById('rotation').value + 'deg)');

		var f = document.getElementById('foo');
		
		
		var transition_type = 'linear';
		if (document.getElementById('type1').checked) {
  			transition_type = document.getElementById('type1').value;
		}
		if (document.getElementById('type2').checked) {
  			transition_type = document.getElementById('type2').value;
		}
		f.style.transition =  'all ' +document.getElementById('time').value+'s '+ transition_type;
		f.style.left = document.getElementById('x').value + 'px';
		f.style.top = document.getElementById('y').value + 'px'; 
		f.style.transform = 'rotate(' + document.getElementById('rotation').value + 'deg)';
		

		f.style.opacity = document.getElementById('alpha').value; 
	};
});


   


function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function allowDrop(ev) {
    ev.preventDefault();
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}