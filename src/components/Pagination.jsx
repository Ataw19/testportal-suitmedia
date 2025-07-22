const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    // Jika total halaman 5 atau kurang, tampilkan semua halaman
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = new Set();

    // Selalu tampilkan halaman pertama dan terakhir
    pages.add(1);
    pages.add(totalPages);

    // Logika untuk menampilkan 3 angka di tengah
    if (currentPage <= 3) {
      // Kasus: Berada di dekat halaman awal
      pages.add(2);
      pages.add(3);
      pages.add(4);
    } else if (currentPage >= totalPages - 2) {
      // Kasus: Berada di dekat halaman akhir
      pages.add(totalPages - 3);
      pages.add(totalPages - 2);
      pages.add(totalPages - 1);
    } else {
      // Kasus: Berada di tengah
      pages.add(currentPage - 1);
      pages.add(currentPage);
      pages.add(currentPage + 1);
    }

    // Kembalikan array angka yang sudah diurutkan
    return Array.from(pages).sort((a, b) => a - b);
  };

  const pagesToRender = getPageNumbers();

  return (
    <div className="flex justify-center items-center space-x-1 my-10 text-sm">
      {/* Tombol ke Halaman Pertama */}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-2 py-1 rounded disabled:text-gray-400 hover:bg-gray-200"
      >
        &laquo;
      </button>

      {/* Tombol Halaman Sebelumnya */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 rounded disabled:text-gray-400 hover:bg-gray-200"
      >
        &lsaquo;
      </button>

      {/* Nomor Halaman */}
      {pagesToRender.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded ${
            page === currentPage
              ? "bg-orange-500 text-white font-semibold"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Tombol Halaman Berikutnya */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 rounded disabled:text-gray-400 hover:bg-gray-200"
      >
        &rsaquo;
      </button>

      {/* Tombol ke Halaman Terakhir */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 rounded disabled:text-gray-400 hover:bg-gray-200"
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
