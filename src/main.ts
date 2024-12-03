import './style.css'
import aocLogo from '/aocLogo.jpeg';
import { renderPart1 } from './part1.ts'
import {renderInput} from "./input.ts";
import {renderPart2} from "./part2.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${aocLogo}" class="logo" alt="Vite logo" />
    <h1>Day 1: Historian Hysteria</h1>
    <div id="input"></div>
    <div id="part1"></div>
    <div id="part2"></div>
  </div>
`;

const inputElement = renderInput(document.querySelector<HTMLDivElement>('#input')!);
const updateDistance = renderPart1(document.querySelector<HTMLDivElement>('#part1')!);
const updateSimilarity = renderPart2(document.querySelector<HTMLDivElement>('#part2')!);

inputElement.addEventListener('change', () => {
    updateDistance(inputElement.value)
    updateSimilarity(inputElement.value)
});
