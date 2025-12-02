import React, { useState, useEffect, useCallback, Suspense } from "react";
import useInfiniteScroll from "../components/infiniteScroll";
const CatCard = React.lazy(() => import("../components/CatCard")); // Lazy Component

function Rough() {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(1);


  const fetchCats = useCallback(async () => {
      const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}`);
      const data = await res.json();
      setCats((prev) => [...prev, ...data]);
          }, [page]);
  

  useEffect(() => {
    fetchCats();
  }, [fetchCats]);

  useInfiniteScroll(() => setPage((prev) => prev + 1));

  return (
    <div>
      <h1>Cats Gallery</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <div className="grid"
          style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "8px",
                }}
        >
          {cats.map((cat, index) => (
            <CatCard key={index} url={cat.url} breed={cat.breeds?.[0]?.name || "Cat"} />
          ))}
        </div>
      </Suspense>

      <h3 style={{ textAlign: "center" }}>Loading more...</h3>
    </div>
  );
}

export default Rough;
