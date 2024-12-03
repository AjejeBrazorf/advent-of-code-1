import './style.css'
import { paresInput } from './input';

export const renderPart2 = (element: HTMLElement) => {
    element.innerHTML = `
  <div class="card">
    <h2>Similarity:</h2>
    <button id="similarity" type="button">Calculate similarity</button>
  </div>
`;
    const buttonElement = document.querySelector<HTMLButtonElement>('#similarity')!;
    const calculateSimilarity = (list1: number[], list2: number[]): number => {
        const sortedList1 = list1.sort((a, b) => a - b);

        const similarityMap = new Map<number, number>();
        list2.forEach((value) => {
            const count = (similarityMap.get(value) || 0) / value ;
            similarityMap.set(value, (count + 1) * value);
        })

        return sortedList1.reduce((previousValue, currentValue) => {
            return previousValue + (similarityMap.get(currentValue) || 0)
        }, 0);
    }

    const updateSimilarity = (inputText: string) => {
        try {
            const { list1, list2 } = paresInput(inputText);
            const similarity = calculateSimilarity(list1, list2);
            buttonElement.textContent = `Similarity: ${similarity}`;
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

    return updateSimilarity
}


