
import svgSet from './svgSet';

function cardImputToggleEvent(button) {
  button.addEventListener('click', function () {
    let input = this.parentNode.parentNode.children[1]
    input.classList.toggle('additmVisible')
    if (input.classList.contains('additmVisible')) {
      input.firstChild.focus()
    }
  })
}

function createCatFunctionality() {
  let btn = document.querySelector('.showCatBtn');
  let btninput = document.querySelector('.category__btn');
  let input = document.querySelector('.category__input')
  svgSet(btninput, "icon-plus", "white");

  btn.addEventListener('click', () => {
    input.focus()
    let cat = document.querySelector('.category')
    function removeCurrent(curr) {
      let current = document.querySelector(`${curr}`).cloneNode(true)
      let clone = current.cloneNode(true);
      clone.style.fill = "white";
      btn.innerHTML = ""
      btn.appendChild(clone);
    }
    if (cat.classList.contains("display")) {
      removeCurrent(`.icon-plus`)

    } else {
      removeCurrent(`.icon-minus`)
    }
    cat.classList.toggle('display')
  });

}


function createCatBtn(createCard, lcStSetter) {
  let btninput = document.querySelector('.category__btn');
  let input = document.querySelector('.category__input')
  btninput.addEventListener('click', () => {
    if (input.value.length < 3){
      alert('Your category title is either empty or too short! Please try again')
    }else{      
      createCard(input.value)
      input.value = '';
      lcStSetter()
    }
  })

  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      btninput.click();
    }
  });
}


export { createCatFunctionality, cardImputToggleEvent, createCatBtn }
