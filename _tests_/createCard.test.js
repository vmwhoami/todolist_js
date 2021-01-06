import { createCard, createItem } from '../src/components/createCard';
describe("Test card creation function", () => {

  beforeEach(() => {
    createCard("thetest title")
  })

  test("createCard to be defined", () => {
    expect(createCard).toBeDefined()
  })

  test("createCard function to create a card with a title", () => {
    let title = document.querySelector('.card__h3')
    expect(title.textContent).toBe("thetest title");
  })

  test("createCard function to create a card with a title", () => {
    let title = document.querySelectorAll('.card__h3')
    expect(title.length).toBe(3);
  })
});