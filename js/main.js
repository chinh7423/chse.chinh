let activator = document.querySelector('.active-menu');
let dropdown = document.querySelectorAll('.chinh7423');

activator.addEventListener('click',function(){
	for(element of dropdown) {
		if (element.classList.contains('shown-block')) {
		element.classList.remove('shown-block');
	} else {
		element.classList.add('shown-block');
	}
	}
})
// activator.addEventListener('mouseleave',function(){
// 	dropdown.classList.remove('shown-flex');
// })
