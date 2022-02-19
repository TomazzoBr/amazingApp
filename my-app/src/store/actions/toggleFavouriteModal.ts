export default function toggleFavouriteModalAction(toggle: boolean) {
  return {
    type: "header/toggleFavouriteModal",
    flag: toggle,
  };
}
