export default function toggleFilterAction(text: string) {
  return {
    type: "products/toggleFilter",
    value: text,
  };
}
