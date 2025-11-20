import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import Incdec from "./pages/incdec"
import { CATS } from "../../Components/Server/server"
import { lazy, Suspense } from "react"


const Cats = lazy(()=> import("./pages/Cats"))
const Breeds = lazy(()=> import("./pages/Breeds"))
const LocalCats = lazy(()=> import("./pages/Localcats"))
const WildCats = lazy(()=> import("./pages/WildCats"))
const News = lazy(()=> import("./pages/News"))



function App(){
  return(
    <BrowserRouter>
        <Provider store={store}>
          <div className="flex flex-col min-h-screen">
            <Navbar />

              <main className="flex-grow">
                <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<Cats />}/>
                    <Route path="/cats" element={<Cats />}/>
                    <Route path="/breeds" element={<Breeds />}/>
                    <Route path="/localcats" element={<LocalCats />}/>
                    <Route path="/wildcats" element={<WildCats />}/>
                    <Route path="/news" element={<News />}/>
                  </Routes>
                </Suspense>
              </main>
              
            {/* <Incdec /> use useDispatch and useSelector inside the cats, breeds, footer, Navbar files also works*/}

            <Footer/>
          </div>
        </Provider>
    </BrowserRouter>
  )
}

export default App