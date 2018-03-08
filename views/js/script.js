var editButtons = document.querySelectorAll('.edit');
var saveButtons = document.querySelectorAll('.save');
var backButtons = document.querySelectorAll('.back');
var deleteButtons = document.querySelectorAll('.delete')

for (let i = 0; i < editButtons.length; i++){
	editButtons[i].addEventListener('click', function(){
		toggleHidden(i);
	})
}


for (let j = 0; j < backButtons.length; j++){
	backButtons[j].addEventListener('click', function(){
		toggleHidden(j);
	})
}

for (let k = 0; k < saveButtons.length; k++){
	saveButtons[k].addEventListener('click', function(){
		toggleHidden(k);
	})
}

for (let h = 0; h < deleteButtons.length; h++){
	deleteButtons[h].addEventListener('click', function(e){
		var parent = e.target.parentElement.parentElement.parentElement;
		var element = e.target.parentElement.parentElement;
		parent.removeChild(element);
	})
}



function toggleHidden(i){
	editButtons[i].classList.toggle('hidden');
	saveButtons[i].classList.toggle('hidden');
	backButtons[i].classList.toggle('hidden');
}