export const paresInput = (input: string) => {
    return input.split(/\n+/)
        .map(e => e.split(' ')
            .map(el=> Number.parseInt(el))
            .filter(el => !Number.isNaN(el))
        )
}

export const renderInput = (element: HTMLElement) => {
    element.innerHTML = `
      <textarea id="inputText" rows="10" cols="30" placeholder="Insert input here..."></textarea>`;
    return document.querySelector<HTMLTextAreaElement>('#inputText')!
}
