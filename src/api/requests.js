export const getCards = (name, types, rarity) =>
  `https://api.magicthegathering.io/v1/cards?name=${name}?types=${types}?rarity=${rarity}`
export const getTypes = id => `https://api.magicthegathering.io/v1/types`
