import { Suspense, useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import api from "../api/axiosInstance"
import "./Breeds.css"
import useInfiniteScroll from "../components/infiniteScroll";

export default function Breeds(){
    const [breeds, setBreeds] = useState([])
    const [page, setPage]=useState([])

    useEffect(() => {
        const fetchBreeds = useCallback(async () => {
            try {
                const res = await api.get("/breeds");
                setBreeds(res.data.slice(0,5));
            } catch (err) {
                console.error(err);
            }
            },[page]) 

        fetchBreeds();
    }, [fetchBreeds]);

    useInfiniteScroll(setPage((prev)=>prev +1))

    return (
        <section>
            <h1>Cat Breeds</h1>

            <Suspense fallback={<p>Loading...</p>}>
                <Swiper 
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                    autoplay={{delay:5000, disableOnInteraction: false}}
                    loop
                    style={{width:"100%", height:"500px"}}
                >

                    {breeds.map((breed) => (
                        <SwiperSlide key={breed.id}>
                                <div style={{position: "relative",width:"100%", height:"100%", borderRadius:"16px", overflow:"hidden"}} >
                                    <img src={breed.image?.url || null} alt="Image here" />
                                </div>
                                <div style={{display:"flex", alignItems:"center", justifyContent:"center", background:"#f4f4f4", height:"100%", color:"#555", fontSize:"1.2rem"}}>
                                <strong>{breed.name}</strong> - {breed.origins}
                                <br />
                                <small>{breed.temperament}</small>
                                <br />
                                <p>{breed.description}</p>
                                </div>          
                        </SwiperSlide>
                    ))}

                </Swiper>
            </Suspense>

            {/* <ul>
                {breeds.map(b=>(
                    <li key={b.id}>
                        <strong>{b.name}</strong> - {b.origin} ({b.temperament})
                    </li>
                ))}
            </ul> */}
        </section>
    )
}