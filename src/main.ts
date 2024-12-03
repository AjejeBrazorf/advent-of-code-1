import './style.css'
import aocLogo from '/aocLogo.jpeg';
import {renderDay1} from "./day1/day1.ts";
import {renderDay2} from "./day2/day2.ts";

type Range<Start extends number, End extends number, Acc extends number[] = []> =
    Acc['length'] extends End
        ? [...Acc, Acc['length']][number] // Include the `End`
        : Range<Start, End, [...Acc, Acc['length']]>;

type DAY_RANGE<Start extends number, End extends number> = `/day${Range<Start, End>}`;

// Define the PATHS type
type PATHS = DAY_RANGE<1, 25>;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${aocLogo}" class="logo" alt="Vite logo" />
    <div id="day"></div>
  </div>
`;

const dayElement = document.querySelector<HTMLDivElement>('#day')!;
renderDay1(dayElement)

const url = new URL(window.location.href);
const pathname = url.pathname as PATHS;
switch (pathname) {
    case '/day1':
    case '/day0':
        renderDay1(dayElement);
        break;
    case '/day2':
        renderDay2(dayElement);
        break;
    default:
        renderDay1(dayElement)
        break;
}
