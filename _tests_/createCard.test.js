import { createCard, createItem } from '../src/components/createCard';
describe("Test card creation function", () => {

  beforeEach(() => {
    createCard("thetest title")
  })

  test("createCard to be defined", () => {
    expect(createCard).toBeDefined()
  })

  test("createCard not to be undefinedefined", () => {
    expect(createCard).not.toBeUndefined()
  })

  test("createCard function to create a card with a title", () => {
    let title = document.querySelector('.card__h3')
    expect(title.textContent).toBe("thetest title");
  })

  test("createCard function to create a card with a title", () => {
    let title = document.querySelector('.card__h3')
    expect(title.textContent).not.toBe("another title");
  })

  test("On every invocation the function should create a card", () => {
    let title = document.querySelectorAll('.card__h3')
    expect(title.length).not.toBe(3);
  })

  test("On every invocation the function should create a card", () => {
    let title = document.querySelectorAll('.card__h3')
    expect(title.length).toBe(6);
  })

  test("Expect the created card to clone svg ", () => {
    let svg = document.querySelector('.card__delete').childNodes
    expect(svg[0].nodeName).toBe("svg");
  })
});