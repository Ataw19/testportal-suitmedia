import Banner from "../components/Banner";
import IdeaCard from "../components/IdeaCard";
import { fetchIdeas } from "../apis/api.js";
import { useEffect, useState } from "react";

const Ideas = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadIdeas = async () => {
      const response = await fetchIdeas({ page: 1, size: 8 });
      console.log("Fetched ideas:", response);
      setIdeas(response.data);
      setLoading(false);
    };

    loadIdeas();
  }, []);

  return (
    <>
      <Banner />
      {loading ? (
        <p>Loading ideas...</p>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {ideas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      )}
    </>
  );
};

export default Ideas;
