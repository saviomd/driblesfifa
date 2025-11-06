import playStylesPlus from "../data/playStylesPlus";

const getPlayStylePlusByName = (name: string) =>
  playStylesPlus.find((item) => item.name === `${name}+`);

export default getPlayStylePlusByName;
