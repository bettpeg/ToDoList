function addTask(id, task) {
    const $taskItem = $('<li>').addClass('list-group-item').text(task.title);

    $tasksList
        .find(`[data-status="${task.status}"]`)
        .append($taskItem);
}

function removeAll() {
	localStorage.clear();

	$lists.forEach((item) => item.empty());

	toDoCount.html(0);
	inProgressCount.html(0);
	doneCount.html(0);
}

function changeTasksCount(taskStatus) {
	switch(taskStatus) {
        case(1):
            $tasksCount.currCount += 1;
            $tasksCount.type = toDoCount;
            $tasksCount.type.html(`${$tasksCount.currCount}`);
            break;
         case(2):
            $tasksCount.currCount += 1;
            $tasksCount.type = inProgressCount;
            $tasksCount.type.html(`${$tasksCount.currCount}`);
            break;
         case(3):
            $tasksCount.currCount += 1;
            $tasksCount.type = doneCount;
            $tasksCount.type.html(`${$tasksCount.currCount}`);
            break;
    }
}