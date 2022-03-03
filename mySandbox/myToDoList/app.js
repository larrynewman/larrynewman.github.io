// ADD
const addForm = document.querySelector('.add');
addForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const todo = addForm.add.value.trim();

	if (todo.length) {
		generateTemplate(todo);
		addForm.reset();
	}
});
const list = document.querySelector('.todos');

const generateTemplate = (todo) => {
	const html = `
        <li>
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>
        `;
	list.innerHTML += html;
};

// DELETE
const delete = document.querySelector('.delete');
const deleteTemplate = (deleteItem) => {
    list.innerHTML(delete);
}
delete.addEventListener('click', (e) => {
    deleteTemplate(deleteItem);
});
