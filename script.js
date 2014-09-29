function playButton() { 
	var f = document.getElementById('box');
	var marker = document.getElementById('marker');
	var timeline = document.getElementById('timeline');
	

	timeline.style.width='100%';
	//alert(timeline.style.width+'px');
	
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

	marker.style.transition =  'all ' +document.getElementById('time').value+'s linear';
	marker.style.left = timeline.style.width;
	};


function resetButton() { 
	var marker = document.getElementById('marker');
	var f = document.getElementById('box');

	f.style.transform = 'rotate(0deg)';
	f.style.transition =  'all 0s linear';  
	marker.style.transition = 'all 0s linear';  
	marker.style.left = 0;
	
	document.getElementById('x').value=0;
	document.getElementById('y').value=0;
	document.getElementById('alpha').value=1;
	document.getElementById('rotation').value=0;
	document.getElementById('type1').checked=true;

	f.style.left = '0px';
	f.style.top = '0px';
	};

window.onload = function() {
  playButton();
  resetButton();
};


