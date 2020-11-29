addEventListener('DOMContentLoaded', () => {
	const btn_menu = document.querySelector('.btn_menu');
	if (btn_menu) {
		btn_menu.addEventListener('click', () => {
			const li_right = document.querySelector('.li_right');
			li_right.classList.toggle('show');
		});
	}
});