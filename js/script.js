const $formAddTask = $('#formAddTask');
const $tasksList = $('#tasks-list');
const $modalAddTask = $('#modalAddTask');

$formAddTask.on('submit', function(event){
    event.preventDefault();

    let task = {
        id: new Date().getTime(),
        title: $('[name="title"]', this).val(),
        status: 1 // 1- toDo, 2 - inProgress, 3 - done
    };

    addTask(task.id, task);

    localStorage.setItem(task.id, JSON.stringify(task));

    $modalAddTask.modal('hide');

    this.reset();
});

for (let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) continue;
   
    const task = JSON.parse(localStorage[key]);

    addTask(task.id, task);
}