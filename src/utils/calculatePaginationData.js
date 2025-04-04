export const calculatePaginationData = (count, perPage, page) => {
  const totalPages = Math.ceil(count / perPage);
  const hasNextPage = Boolean(totalPages - page);
  const hasPreviousPage = Boolean(page - 1);

  return {
    page,
    perPage,
    totalItem: count,
    totalPages,
    hasPreviousPage,
    hasNextPage,
  };
};
