function createElement(tagName, className, innerHTML) {
  const element = document.createElement(tagName);
  if (className) {
    element.classList.add(className);
  }
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
  return element;
}

function createButton(id, backgroundColor, textContent) {
  const button = createElement('button');
  button.id = id;
  button.style.backgroundColor = backgroundColor;
  button.textContent = textContent;
  return button;
}

function appendToCounterDiv(...elements) {
  const counterDiv = document.createElement('div');
  counterDiv.classList.add('row');
  document.body.appendChild(counterDiv);

  elements.forEach((element) => {
    counterDiv.appendChild(element);
  });
}

let counterValue = 0;
const counterElement = createElement('h1');
const incrementButton = createButton('btnplus', '#45eb53', '+');
const decrementButton = createButton('btnminus', '#eb4a4a', '-');

document.addEventListener('click', function (event) {
  if (event.target === incrementButton) {
    counterValue++;
  } else if (event.target === decrementButton) {
    counterValue--;
  }
  updateCounter();
});

function updateCounter() {
  counterElement.textContent = counterValue;
  if (counterValue < 0) {
    counterElement.style.color = '#eb4a4a';
    counterElement.textContent = "Past Nights: " + counterValue;
  } else if (counterValue > 0) {
    counterElement.style.color = '#45eb53';
    counterElement.textContent = "Next Nights: " + counterValue;
  } else {
    counterElement.style.color = '#000000';
    counterElement.textContent = "No Nights: " + counterValue;
  }
}

appendToCounterDiv(counterElement, incrementButton, decrementButton);
updateCounter();
