window.onload = function() {
  playButton();
  resetButton();
};

function playButton() { 
	var f = document.getElementById('box');
	var marker = document.getElementById('marker');
	var timeline = document.getElementById('timeline');
	

	timeline.style.width='100%';
	
	
	var transition_type = 'linear';
	if (document.getElementById('type1').checked) {
			transition_type = document.getElementById('type1').value;
	}
	if (document.getElementById('type2').checked) {
			transition_type = document.getElementById('type2').value;
	}
	if (document.getElementById('type3').checked) {
			transition_type = document.getElementById('type3').value;
	}
	if (document.getElementById('type4').checked) {
			transition_type = document.getElementById('type4').value;
	}
	if (document.getElementById('type5').checked) {
			transition_type = document.getElementById('type5').value;
	}

	f.style.transition =  'all ' +document.getElementById('time').value+'s '+ transition_type;
	f.style.left = document.getElementById('x').value + 'px';
	f.style.top = document.getElementById('y').value + 'px'; 
	f.style.transform = 'rotate(' + document.getElementById('rotation').value + 'deg) ' + 'scale(' + document.getElementById('size').value + ')';
	f.style.opacity = document.getElementById('alpha').value; 

	marker.style.transition =  'all ' +document.getElementById('time').value+'s linear';
	marker.style.left = timeline.style.width;
	};


function resetButton() { 
	var marker = document.getElementById('marker');
	var f = document.getElementById('box');

	f.style.transform = 'rotate(0deg) scale(1)';
	f.style.transition =  'all 0s linear';  
	marker.style.transition = 'all 0s linear';  
	marker.style.left = 0;
	
	document.getElementById('x').value=0;
	document.getElementById('y').value=0;
	document.getElementById('alpha').value=1;
	document.getElementById('size').value=1;
	document.getElementById('rotation').value=0;
	document.getElementById('type1').checked=true;

	f.style.left = '0px';
	f.style.top = '0px';
	f.style.opacity = 1;

	};

function clickTimeline(event) { 
	var f = document.getElementById('box');
	var marker = document.getElementById('marker');
	var timeline = document.getElementById('timeline');

	var xIni = f.style.left;
	var yIni = f.style.top;
	var alphaIni = 1;
	var sizeIni = 1;
	
	var markerpos = (event.x-timeline.getBoundingClientRect().left);
	var time = markerpos / timeline.getBoundingClientRect().width;
	//alert(alphaIni);

	f.style.transition =  'all 0s linear';
	f.style.left = ((document.getElementById('x').value)*time )+ 'px';
	f.style.top = ((document.getElementById('y').value) *time)+ 'px'; 
	f.style.transform = 'rotate(' + (document.getElementById('rotation').value*time) + 'deg) ' + 'scale(' + ((document.getElementById('size').value-1)*time+1) + ')';
	f.style.opacity = 1-(1-document.getElementById('alpha').value) * time; 

	marker.style.transition = 'all 0s linear';  
	marker.style.left =markerpos+'px';


	};

