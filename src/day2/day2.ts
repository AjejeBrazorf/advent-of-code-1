import {renderInput} from "./input.ts";
import { renderPart1 } from './part1.ts'
import {renderPart2} from "./part2.ts";

export const renderDay2 = (element: HTMLElement) => {
    element.innerHTML = `
        <h1>Day 2: Red-Nosed Reports</h1>
        <div id="input"></div>
        <div id="part1"></div>
        <div id="part2"></div>
    `;

    const inputElement = renderInput(document.querySelector<HTMLDivElement>('#input')!);
    const updateSafeLevels = renderPart1(document.querySelector<HTMLDivElement>('#part1')!);
    const updateSafeLevelsWithTolerance = renderPart2(document.querySelector<HTMLDivElement>('#part2')!);

    const inputElementChanged = () => {
        updateSafeLevels(inputElement.value)
        updateSafeLevelsWithTolerance(inputElement.value)
    }

    inputElement.addEventListener('input', inputElementChanged);

    const mockInput ='7 6 4 2 1\n' +
        '1 2 7 8 9\n' +
        '9 7 6 2 1\n' +
        '1 3 2 4 5\n' +
        '8 6 4 4 1\n' +
        '1 3 6 7 9'

    inputElement.textContent = mockInput
    inputElementChanged()
}
