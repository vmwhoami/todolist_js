const category = require('../src/components/categoryClass');

describe('expect the Category to be a class', () => {
  let cat;
  beforeEach(() => {
    cat = new category.Category('the best thing');
  });

  it('It expects to create a category instance', () => {
    expect(cat).toBeInstanceOf(category.Category);
  });

  it('it expect that a category should have array of items', () => {
    cat.items.push('hello');
    expect(cat.items[0]).toBe('hello');
  });
});
