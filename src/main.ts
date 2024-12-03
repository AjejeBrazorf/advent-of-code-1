import './style.css'
import aocLogo from '/aocLogo.jpeg';
import { paresInput } from './input';
import { calculateDistance } from './distance.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${aocLogo}" class="logo" alt="Vite logo" />
    <h1>Distance calculator</h1>
    <div class="card">
      <textarea id="inputText" rows="10" cols="30" placeholder="Insert input here..."></textarea>
    </div>
    <div class="card">
      <button id="distance" type="button">Calcolate distance</button>
    </div>
  </div>
`;

const buttonElement = document.querySelector<HTMLButtonElement>('#distance')!;
const inputElement = document.querySelector<HTMLTextAreaElement>('#inputText')!;

const updateDistance = () => {
    const inputText = inputElement.value;

    try {
        const { list1, list2 } = paresInput(inputText);
        const distance = calculateDistance(list1, list2);
        buttonElement.textContent = `Distance: ${distance}`;
    } catch (error) {
        buttonElement.textContent = 'Error parsing input';
    }
};

const copyToClipboard = () => {
    navigator.clipboard.writeText(buttonElement.textContent?.split(':')[1].trim() || '');
    const previousText = buttonElement.textContent;
    buttonElement.textContent = 'Copied to clipboard';
    setTimeout(() => {
        buttonElement.textContent = previousText;
    }, 2000);
}

inputElement.addEventListener('change', updateDistance);
buttonElement.addEventListener('click', copyToClipboard);
