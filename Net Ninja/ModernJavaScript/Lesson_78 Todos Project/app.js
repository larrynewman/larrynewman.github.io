// ADD TODO LIST ITEM

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
	const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
	list.innerHTML += html;
};

addForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const todo = addForm.add.value.trim().toLowerCase();

	if (todo.length) {
		generateTemplate(todo);
		addForm.reset();
	}
});

// DELETE TODO LIST ITEM (TRASH ICON)
// The target event property returns the element that triggered the event.

//The target property gets the element on which the event originally occurred//

list.addEventListener('click', (e) => {
	if (e.target.classList.contains('delete')) {
		e.target.parentElement.remove();
	}
});

// SEARCH
const filterTodos = (term) => {
	Array.from(list.children)
		.filter((todo) => !todo.textContent.toLowerCase().includes(term))
		.forEach((todo) => todo.classList.add('filtered'));

	Array.from(list.children)
		.filter((todo) => todo.textContent.toLowerCase().includes(term))
		.forEach((todo) => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
	const term = search.value.trim().toLowerCase();
	filterTodos(term);
});
