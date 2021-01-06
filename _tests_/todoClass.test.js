const todo = require('../src/components/todoClass');


describe('Expect to create todoClass', () => {
  let todos;

  beforeEach(() => {
    todos = new todo.Todo('Item');
  });

  it('It is expected to create a todo Instance', () => {
    expect(todos).toBeInstanceOf(todo.Todo);
  });

  it('It is expected to create a todo Instance', () => {
    expect(todos.title).toBe('Item');
  });

  it('should have a checked set to false', () => {
    expect(todos.checked).toBe(false);
  });

  it('should have an empty description', () => {
    expect(todos.description).toBe('');
  });
});
