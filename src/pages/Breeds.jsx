import { use, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import api from "../api/axiosInstance"
import "./Breeds.css"

export default function Breeds(){
    const [breeds, setBreeds] = useState([])

    useEffect(()=>{
        api.get("/breeds")
            .then(res => setBreeds(res.data.slice(0, 5)))
            .catch(err => console.error(err))
    },[])

    return (
        <section>
            <h1>Cat Breeds</h1>

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

                {breeds.map((b) => (
                    <SwiperSlide key={b.id}>
                        <div style={{position: "relative",width:"100%", height:"100%", borderRadius:"16px", overflow:"hidden"}} >
                            <img src={b.image?.url || null} alt="Image here" />
                        </div>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"center", background:"#f4f4f4", height:"100%", color:"#555", fontSize:"1.2rem"}}>
                        <strong>{b.name}</strong> - {b.origins}
                        <br />
                        <small>{b.temperament}</small>
                        <br />
                        <p>{b.description}</p>
                        </div>
                   
                                
                            
                    </SwiperSlide>
                ))}

            </Swiper>

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