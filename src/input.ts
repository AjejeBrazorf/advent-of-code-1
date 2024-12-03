export const paresInput = (input: string) => {
    const inputStringLines = input.split(/\n+/)

    const list1 = inputStringLines.map( e => Number.parseInt(e.split(/(?: {3})+/)[0]))
    const list2 = inputStringLines.map( e => Number.parseInt(e.split(/(?: {3})+/)[1]))
    return {
        list1,
        list2
    }
}

export const renderInput = (element: HTMLElement) => {
    element.innerHTML = `
      <textarea id="inputText" rows="10" cols="30" placeholder="Insert input here..."></textarea>`;
    const inputElement = document.querySelector<HTMLTextAreaElement>('#inputText')!;
    return inputElement
}
