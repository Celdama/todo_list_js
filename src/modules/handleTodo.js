import { v4 as uuidv4 } from 'uuid';
import { format, isThisMonth } from 'date-fns';
import { handleProjectListModule } from './handleProject';

const todoFactory = (todo) => ({
  id: uuidv4(),
  title: todo.title,
  description: todo.description,
  dueDate: todo.dueDate,
  project: todo.project.toLowerCase() || 'inbox',
  priority: todo.priority.toLowerCase() || 'medium',
  isComplete: todo.isComplete || false,
});

const handleTodoListModule = (() => {
  let todoList = [];
  const completedTodo = [];

  const addNewTodo = (todo) => {
    todoList.push(todo);
    saveTodoListInLocalStorage();
  };

  const saveTodoListInLocalStorage = () => {
    localStorage.setItem('todoListInLocalStorage', JSON.stringify(todoList));
  };

  const saveCompletedTodoInLocalStorage = () => {
    localStorage.setItem('completedTodoInLocalStorage', JSON.stringify(completedTodo));
  };

  const retrieveTodoListFromLocalStorage = () => {
    todoList = localStorage.getItem('todoListInLocalStorage');
    todoList = JSON.parse(todoList);

    if (todoList === null) {
      todoList = [];
    }

    todoList.forEach((todo) => {
      handleProjectListModule.addTodoToProject(todo.project, todo);
    });
  };

  const toggleCompleteTodoState = (todo) => {
    const todoCompleteValueUpdated = {
      isComplete: !todo.isComplete,
    };

    Object.assign(todo, todoCompleteValueUpdated);
    if (todo.isComplete) {
      completedTodo.push(todo);
    }

    saveCompletedTodoInLocalStorage();

    return todo;
  };

  const getCompleteTodoList = () => completedTodo;

  const getTodo = (id) => {
    const todo = todoList.find((item) => item.id === id);

    return todo;
  };

  const updateTodo = (originalTodo, updatedTodoInfo) => {
    const updatedTodo = Object.assign(originalTodo, updatedTodoInfo);
    saveTodoListInLocalStorage();

    return updatedTodo;
  };

  const deleteThisTodo = (id) => {
    todoList = todoList.filter((item) => item.id !== id);
    saveTodoListInLocalStorage();
  };

  const deleteAllTodoFromDeletedProject = (projectName) => {
    todoList = todoList.filter((item) => item.project !== projectName);
    saveTodoListInLocalStorage();
  };

  const getTodoList = () => todoList;

  const updateTodoPriority = (todo, newPriorityValue) => {
    const todoPriorityValueUpdated = {
      priority: newPriorityValue,
    };

    const updatedTodo = todoList.find((item) => item.id === todo.id);
    Object.assign(updatedTodo, todoPriorityValueUpdated);
    handleProjectListModule.updateTodoInProject(todo.project, updatedTodo);

    saveTodoListInLocalStorage();
  };

  const sortDueDateAscOrder = () => {
    const sortAscTodoList = [...todoList];
    sortAscTodoList.sort((a, b) => {
      if (a.dueDate > b.dueDate) return 1;
      if (a.dueDate < b.dueDate) return -1;
      return 0;
    });

    return sortAscTodoList;
  };

  const sortDueDateDescOrder = () => {
    const sortDescTodoList = [...todoList];

    sortDescTodoList.sort((a, b) => {
      if (a.dueDate > b.dueDate) return -1;
      if (a.dueDate < b.dueDate) return 1;
      return 0;
    });

    return sortDescTodoList;
  };

  const getTodoOfCurrentDay = () => {
    const currentDay = format(new Date(), 'ccc dd MMM yyyy');
    const todoOfCurrentDay = [];

    todoList.forEach((todo) => {
      const todoDueDate = format(new Date(todo.dueDate), 'ccc dd MMM yyyy');
      if (currentDay === todoDueDate) {
        todoOfCurrentDay.push(todo);
      }
    });

    return todoOfCurrentDay;
  };

  const getTodoOfCurrentMonth = () => {
    const todoOfCurrentMonth = [];

    todoList.forEach((todo) => {
      const result = isThisMonth(new Date(todo.dueDate));
      if (result) {
        todoOfCurrentMonth.push(todo);
      }
    });
    return todoOfCurrentMonth;
  };

  const initTodoListFromLocalStorage = () => {
    retrieveTodoListFromLocalStorage();
  };

  return {
    addNewTodo,
    getTodo,
    updateTodo,
    toggleCompleteTodoState,
    deleteThisTodo,
    deleteAllTodoFromDeletedProject,
    getCompleteTodoList,
    getTodoList,
    updateTodoPriority,
    sortDueDateAscOrder,
    sortDueDateDescOrder,
    getTodoOfCurrentDay,
    getTodoOfCurrentMonth,
    initTodoListFromLocalStorage,
  };
})();

export { todoFactory, handleTodoListModule };
