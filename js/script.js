const $formAddTask = $('#formAddTask');
const $tasksList = $('#tasks-list');
const $modalAddTask = $('#modalAddTask');
const $lists = [$('#todo'), $('#inprogress'), $('#done')];
const removeBtn = $('#remove-all');
const toDoCount = $('#todo-count');
const inProgressCount = $('#inprogress-count');
const doneCount = $('#done-count');
const $tasksCount = {
    type: '',
    currCount: 0
};


$formAddTask.on('submit', function(event){
    event.preventDefault();

    let task = {
        id: new Date().getTime(),
        title: $('[name="title"]', this).val(),
        status: 3 // 1- toDo, 2 - inProgress, 3 - done
    };

    addTask(task.id, task);

    localStorage.setItem(task.id, JSON.stringify(task));

    $modalAddTask.modal('hide');

    this.reset();

    changeTasksCount(task.status);

});

for (let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) continue;
   
    const task = JSON.parse(localStorage[key]);

    addTask(task.id, task);

    const currStatus = task.status;

    changeTasksCount(currStatus);
    
}

removeBtn.on('click', removeAll);