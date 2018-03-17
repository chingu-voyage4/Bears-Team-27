var displayForm = document.getElementById('display-form');
var formContainer = document.getElementById('form-container');
var cancelForm = document.getElementById('cancel-form');
var addItem = document.getElementById('add-item');
var main = document.getElementById('main');



displayForm.addEventListener('click', function(){
	formContainer.classList.add('display-form');
	addItem.style.display = 'none';
	main.classList.add('muted-background');
});

cancelForm.addEventListener('click',function(){
	formContainer.classList.remove('display-form');
	addItem.style.display = 'block';
	main.classList.remove('muted-background');
})