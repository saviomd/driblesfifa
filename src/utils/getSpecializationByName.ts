import specializations from "../data/specializations";

const getSpecializationByName = (name: string) =>
  specializations.find((item) => item.name === name);

export default getSpecializationByName;
