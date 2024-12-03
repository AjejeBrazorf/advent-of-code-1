import { paresInput } from './input';

export const renderPart1 = (element: HTMLElement) => {
    element.innerHTML = `
  <div class="card">
    <h2>Safe levels:</h2>
    <button id="safeLevels" type="button">Calculate safe levels</button>
  </div>
`;
    const buttonElement = document.querySelector<HTMLButtonElement>('#safeLevels')!;

    const  calculateSafeLevels = (levels: number[][]): number => {
        const safeLevels = levels.filter(level => {
            if(level.length === 0) {
                return false
            }
            let isSafeDifference = true
            let isIncreasing = true
            let isDecreasing = true
            for(let i = 1; i < level.length; i++) {
                const diff = level[i] - level[i-1]
                const diffAbs = Math.abs(diff)
                isIncreasing = isIncreasing && diff >= 0
                isDecreasing = isDecreasing && diff <= 0
                isSafeDifference = isSafeDifference && diffAbs <= 3 && diffAbs > 0
            }
            const isDecreasingOrIncreasing = ((!isIncreasing && isDecreasing) ||
                (isIncreasing && !isDecreasing))
            return isSafeDifference && isDecreasingOrIncreasing
        })
        return safeLevels.length
    }


    const updateSafeLevels = (inputText: string) => {
        try {
            const levels = paresInput(inputText);
            const safeLevels = calculateSafeLevels(levels);
            buttonElement.textContent = `SafeLevels: ${safeLevels}`;
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


