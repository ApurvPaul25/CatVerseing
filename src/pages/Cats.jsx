import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "./rough"
import "swiper/css/navigation";
import "swiper/css/pagination";
import api from "../api/axiosInstance"
import "./Cats.css"

export default function Cats(){

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    const fetchCats = async()=>{
      try{
        const res = await api.get("/cats")
        setData(res.data)
        console.log("API response:", res.data);

      }catch(err){
        console.error("Error fetching cats:", err)
        setError("Failed to load cat data")
      }finally{
        setLoading(false)
      }
    }
    fetchCats()
  },[])

  if(loading) return <p>Loading dAtA...</p>
  if(error) return <p>{error}</p>

  const breeds = data?.breeds || []
  const localCats = data?.localCats || []
  const wildCats = data?.wildCats || []
  const news = data?.news || []


  return(

    <div className="cats-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        style={{ width: "100%", height: "full" }}
      >
        {breeds.length > 0 ? (
          breeds.map((b) => (
            <SwiperSlide key={b.id}>
              <section className="cat-section">
                <div className="card">
                  <img
                    src={b.image || "https://via.placeholder.com/400"}
                    alt={b.name}
                  />
                  <div className="content">
                    <h3>{b.name}</h3>
                    <p id="origin">{b.origin}</p>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <p>Loading breeds...</p>
          </SwiperSlide>
        )}
      </Swiper>
      

      <section className="cat-section1">
        <h2>Wild Cats</h2>
        <div className="grid1">
          {wildCats && wildCats.map((w, i) => (
            <div key={i} className="card1">
              {w.image && <img src={w.image} alt={w.title} />}
              <h3>{w.title}</h3>
              <p>{w.description}</p>
            </div>
          ))}
        </div>

        <a href = '#'>Collections</a>
      </section>

      <section className="cat-section2">
        <h2>Local Cats</h2>
        <div className="grid2">
          {localCats?.map(c=>(
           <div key={c.id} className="card2">
            <img src={c.url} alt={`Local cat ${c.id}`} />
           </div>
          ))}
        </div>

        <a href = '#'>Collections</a>
      </section>


    
    </div>
     
  )
}




