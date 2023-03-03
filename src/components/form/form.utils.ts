export function submitPrompt(input: string) {
  return `List 4 keywords to target on a landing page of ${input}. Include keywords that customers would search to find this page`;
}

export function editPrompt(context: string[], index: number) {
  return `Context:
  ${context.map((item, i) => `${i + 1}. ${item}`)}
  Change keyword number ${index + 1} and print updated result`;
}
