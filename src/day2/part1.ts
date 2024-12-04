import { paresInput } from './input';
import {calculateSafeReports} from "./calculateSafeReports.ts";

export const renderPart1 = (element: HTMLElement) => {
    element.innerHTML = `
  <div class="card">
    <h2>Safe reports:</h2>
    <button id="safeReports" type="button">Calculate safe reports</button>
  </div>
`;
    const buttonElement = document.querySelector<HTMLButtonElement>('#safeReports')!;




    const updateSafeLevels = (inputText: string) => {
        try {
            const reports = paresInput(inputText);
            const safeReports = calculateSafeReports(reports);
            buttonElement.textContent = `Safe Reports: ${safeReports}`;
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

    return updateSafeLevels
}


