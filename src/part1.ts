import './style.css'
import { paresInput } from './input';

export const renderPart1 = (element: HTMLElement) => {
    element.innerHTML = `
  <div class="card">
    <h2>Distance:</h2>
    <button id="distance" type="button">Calculate distance</button>
  </div>
`;
    const buttonElement = document.querySelector<HTMLButtonElement>('#distance')!;

    const  calculateDistance = (list1: number[], list2: number[]): number => {
        const sortedList1 = list1.sort((a, b) => a - b);
        const sortedList2 = list2.sort((a, b) => a - b);

        return sortedList1.reduce((previousValue, currentValue, currentIndex) => {
            return previousValue + Math.abs(currentValue - sortedList2[currentIndex],)
        }, 0);
    }


    const updateDistance = (inputText: string) => {
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
    buttonElement.addEventListener('click', copyToClipboard);

    return updateDistance
}


