# Todo List

The first "big" application in my github. A todo liste application. Todo lists are a staple in beginning webdev tutorials because they can be very simple. There is, however, a lot of room for improvement and many features that can be added.

# Description

This application had to meet several requirements, which are the following:

- the todo's item are going to be objects that I want to dynamically create, so I used factories to generate them.

- my item must have a defined property list : `id`, `tile`, `description`, `dueDate`, `project`, `priority`, `isComplete`.

- my todo list should habe projects or separate lists of todos. When a user first opens the app, there should be some sort of 'default' project (in my case it's `inbox` project) to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.

- I have to searate my application logic  (i.e. creating new todos, setting todos as complete, changing todo priority, etc.) from the DOM-related stuff, so I keep all of those things in separate modules; `UI.js`, `handleProject.js`, `handleTodo.js`.

- for the look of the User Interface, the user should be able to do the following :
  1. view all projects
  2. view all todos in each project
  3. edit todo (`title`, `description`, `dueDate`, `priority`, `project`)
  4. delete a todo
  5. delete a project
  6. complete a todo and see list of complete todo.

- for inspiration, i was greatly inspired, very very inspired by [todoist](https://todoist.com/app/today).

- use localStorage to save user's projects and todos between sessions.

- since i have already use webpack, adding external libraries to take a little more in hand webpack and its operation, as weel as the use of libraries with npm : i used the [date-fns](https://date-fns.org/) library for formatting and manipulating dates and times.

All these instructions have been respected. I met a lot of difficulties during this project that forced me to go out of my comfort zone to find a solution. Indeed, the first complication was to manage each todo item according to the project to which it belongs, whether it is for the creation of todo, the modification of the project of a todo as well as the saving of each todo item in the good project.
