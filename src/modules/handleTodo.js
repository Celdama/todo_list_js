import { v4 as uuidv4 } from 'uuid';
import { format, compareAsc } from 'date-fns';

// je garde cette fonction jusqu'à la fin de mon developpment, je l'utilise pour
// créer les todos à la volée dans index.js (c'est ma première version de ma function
// factory, une fois le projet terminé je la supprimerais.)
const todoFactory = (title, description, dueDate = new Date(), project = 'inbox', priority = 'medium') => {
  const formatDueDate = format(new Date(dueDate), 'MM/dd/yyy');
  const x = 3;

  return {
    id: uuidv4(),
    title,
    description,
    dueDate: new Date(dueDate),
    project: project.toLowerCase(),
    priority,
  };
};

const todoFactory2 = (todo) => {
  const formatDueDate = format(new Date(todo.dueDate), 'dd/MM/yyy');
  // console.log(test);

  return {
    id: uuidv4(),
    title: todo.title,
    description: todo.description,
    dueDate: formatDueDate,
    project: todo.project.toLowerCase() || 'inbox',
    priority: todo.priority || 'medium',
  };
};

const handleTodoListModule = (() => {
  let todoList = [];

  const addTodo = (todo) => {
    todoList.push(todo);
  };

  const getTodo = (id) => {
    const todo = todoList.find((item) => item.id === id);
    return todo;
  };

  const updateTodo = (originalTodo, updatedTodoInfo) => {
    const updatedTodo = Object.assign(originalTodo, updatedTodoInfo);
    return updatedTodo;
  };

  const deleteTodo = (id) => {
    todoList = todoList.filter((item) => item.id !== id);
  };

  const deleteAllTodoFromDeletedProject = (projectName) => {
    todoList = todoList.filter((item) => item.project !== projectName);
  };

  const getTodoList = () => {
    console.table(todoList);
    return todoList;
  };

  const updateTodoPriority = (todo, newPriorityValue) => {
    const todoPriorityValueUpdated = {
      priority: newPriorityValue,
    };

    Object.assign(todo, todoPriorityValueUpdated);
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

  return {
    addTodo,
    getTodo,
    updateTodo,
    deleteTodo,
    deleteAllTodoFromDeletedProject,
    getTodoList,
    updateTodoPriority,
    sortDueDateAscOrder,
    sortDueDateDescOrder,
    getTodoOfCurrentDay,
  };
})();

export { todoFactory, todoFactory2, handleTodoListModule };
