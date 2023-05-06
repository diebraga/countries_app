export const getCursorStyle = (isCountryItemPage: boolean) => {
  if (isCountryItemPage) return { cursor: "not-allowed" }
  else return {}
}
