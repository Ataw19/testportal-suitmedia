import Banner from "../components/Banner";
import IdeaCard from "../components/IdeaCard";
import SortFilterBar from "../components/FilterBar.jsx";
import Pagination from "../components/Pagination.jsx";
import { fetchIdeas } from "../apis/api.js";
import { useEffect, useState } from "react";

const Ideas = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState("-published_at");

  useEffect(() => {
    const loadIdeas = async () => {
      const response = await fetchIdeas({
        page: currentPage,
        size: itemsPerPage,
        sort: sortBy,
      });
      if (response && response.data) {
        setIdeas(response.data);
        setMeta(response.meta);
      }
      console.log("Fetched ideas:", response);
      setLoading(false);
    };

    loadIdeas();
  }, [currentPage, itemsPerPage, sortBy]);

  // Efek untuk mereset ke halaman 1 jika filter berubah
  useEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [itemsPerPage, sortBy]);

  return (
    <>
      <Banner />
      <SortFilterBar
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        sortBy={sortBy}
        setSortBy={setSortBy}
        totalItems={meta.total || 0}
        fromItem={meta.from || 0}
        toItem={meta.to || 0}
      />

      {loading ? (
        <p>Loading ideas...</p>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {ideas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={meta.last_page || 1}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default Ideas;
