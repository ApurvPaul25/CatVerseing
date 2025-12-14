import { Suspense, useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import api from "../api/axiosInstance"
import "./Breeds.css"
import useInfiniteScroll from "../components/infiniteScroll";
import CatCard from "../components/CatCard";

export default function Breeds(){


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




    // const [breeds, setBreeds] = useState([])
    // const [page, setPage]=useState(1)


    // const fetchBreeds = useCallback(async () => {
    //         try {
    //             const res = await api.get("/breeds");
    //             setBreeds(res.data.slice(0,5));
    //         } catch (err) {
    //             console.error(err);
    //         }
    //         },[page]) 

    // useEffect(() => {
    //     fetchBreeds();
    // }, [fetchBreeds]);

    // useInfiniteScroll(()=> setPage((prev)=>prev +1))

    // return (
    //     <section>
    //         <h1>Cat Breeds</h1>

    //         <Suspense fallback={<p>Loading...</p>}>
    //             <Swiper 
    //                 modules={[Navigation, Pagination, Autoplay]}
    //                 spaceBetween={30}
    //                 slidesPerView={1}
    //                 navigation
    //                 pagination={{clickable: true}}
    //                 autoplay={{delay:5000, disableOnInteraction: false}}
    //                 loop
    //                 style={{width:"100%", height:"500px"}}
    //             >

    //                 {breeds.map((breed) => (
    //                     <SwiperSlide key={breed.id}>
    //                             <div style={{position: "relative",width:"100%", height:"100%", borderRadius:"16px", overflow:"hidden"}} >
    //                                 <img src={breed.image?.url || null} alt="Image here" />
    //                             </div>
    //                             <div style={{display:"flex", alignItems:"center", justifyContent:"center", background:"#f4f4f4", height:"100%", color:"#555", fontSize:"1.2rem"}}>
    //                             <strong>{breed.name}</strong> - {breed.origins}
    //                             <br />
    //                             <small>{breed.temperament}</small>
    //                             <br />
    //                             <p>{breed.description}</p>
    //                             </div>          
    //                     </SwiperSlide>
    //                 ))}

    //             </Swiper>
    //         </Suspense>

    //     </section>
    // )
}