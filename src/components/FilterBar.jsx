const SortFilterBar = ({
  itemsPerPage,
  setItemsPerPage,
  sortBy,
  setSortBy,
  totalItems,
  fromItem,
  toItem,
}) => {
  return (
    <div className="flex flex-row justify-between mx-6 my-10 mb-10">
      <div>
        <p className="text-black text-sm">
          Showing {fromItem}-{toItem} of {totalItems}
        </p>
      </div>

      <div className="flex flex-row gap-10">
        <div>
          <label className="text-black text-sm mr-2">Items per page:</label>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="border border-gray-300 rounded-full p-2"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div>
          <label className="text-black text-sm mr-2">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-full p-2"
          >
            <option value="-published_at">Newest</option>
            <option value="published_at">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortFilterBar;
