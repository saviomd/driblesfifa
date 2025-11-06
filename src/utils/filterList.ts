const filterList = ({ filter, list }) => {
  const filterFormatted = filter.toLowerCase().trim();
  return list.filter(
    (item) =>
      item.description?.toLowerCase().includes(filterFormatted) ||
      item.inspiredBy?.toLowerCase().includes(filterFormatted) ||
      item.name?.toLowerCase().includes(filterFormatted) ||
      item.type?.toLowerCase().includes(filterFormatted) ||
      item.stars?.toString() === filterFormatted
  );
};

export default filterList;
