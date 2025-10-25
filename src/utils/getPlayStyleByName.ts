import playStyles from "../data/playStyles";

const getPlayStyleByName = (name: string) =>
  playStyles.find((item) => item.name === name);

export default getPlayStyleByName;
