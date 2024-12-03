import {renderInput} from "./input.ts";
import { renderPart1 } from './part1.ts'

export const renderDay2 = (element: HTMLElement) => {
    element.innerHTML = `
        <h1>Day 2: Red-Nosed Reports</h1>
        <div id="input"></div>
        <div id="part1"></div>
        <div id="part2"></div>
    `;

    const inputElement = renderInput(document.querySelector<HTMLDivElement>('#input')!);
    const updateSafeLevels = renderPart1(document.querySelector<HTMLDivElement>('#part1')!);
    // const updateSimilarity = renderPart2(document.querySelector<HTMLDivElement>('#part2')!);

    inputElement.addEventListener('change', () => {
        updateSafeLevels(inputElement.value)
    //    updateSimilarity(inputElement.value)
    });
}
