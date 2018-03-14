var openLocationButton = document.getElementById('open-location-modal');
var closeLocationModal = document.getElementById('close-location-modal')
var locationModal = document.getElementById('location-modal');
var main = document.getElementById('main');
var locations = document.getElementById('locations');
var locationSubmitButton = document.getElementById('location-submit');

/* ==== event listeners ======= */

openLocationButton.addEventListener('click', openModal);
closeLocationModal.addEventListener('click', function(){
	closeModal();
	clearInput();
});

locationSubmitButton.addEventListener('click', function(){
	var locationValue = document.getElementById('location-input').value;
	clearInput();
	closeModal();

	createLocation(locationValue);
});

// same as above, in the event that user presses enter rather than clicking the submit button
document.addEventListener('keypress', function(e){

	if (e.keycode === 13 || e.which === 13){
		var locationValue = document.getElementById('location-input').value;
		clearInput();
		closeModal();

		createLocation(locationValue);
	}
});


/* =========== functions ========= */

function clearInput(){
	document.getElementById('location-input').value = '';
}

function closeModal(){
	locationModal.style.display = 'none';
}

function openModal(){
	locationModal.style.display = 'flex';
}

function createLocation(value){
	var locationDiv = document.createElement('DIV');
	var locationTitleHeading = document.createElement('H4');
	var locationTitle = document.createTextNode(value);

	locationDiv.appendChild(locationTitleHeading);

	locationDiv.className += 'location-div';
	locationTitleHeading.appendChild(locationTitle);
	locations.appendChild(locationDiv);

	var addSpan = document.createElement('SPAN');
	var addIcon = document.createElement('I');
	addSpan.appendChild(addIcon);
	addIcon.className += 'fas fa-plus';
	addIcon.classList.add('add');
	locationDiv.appendChild(addSpan);

	var editSpan = document.createElement('SPAN');
	var editIcon = document.createElement('I');
	editSpan.appendChild(editIcon);
	editIcon.className += 'far fa-edit';
	editIcon.classList.add('edit');
	locationDiv.appendChild(editSpan);

	var deleteSpan = document.createElement('SPAN');
	var deleteIcon = document.createElement('I');
	deleteSpan.appendChild(deleteIcon);
	deleteIcon.className += 'fas fa-trash-alt';
	deleteIcon.classList.add('delete');
	locationDiv.appendChild(deleteSpan);
}












