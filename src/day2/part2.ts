import { paresInput } from './input';
import {calculateSafeReports} from "./calculateSafeReports.ts";
export const renderPart2 = (element: HTMLElement) => {
    element.innerHTML = `
  <div class="card">
    <h2>Problem Dampener :</h2>
    <button id="safeReportsDampener" type="button">Calculate safe reports</button>
  </div>
`;
    const buttonElement = document.querySelector<HTMLButtonElement>('#safeReportsDampener')!;


    const updateSafeLevelsWithTolerance = (inputText: string) => {
        try {
            const reports = paresInput(inputText);
            const safeReports = calculateSafeReports(reports, {tolerance: true});
            buttonElement.textContent = `safe reports with tolerance: ${safeReports}`;
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

    return updateSafeLevelsWithTolerance
}


