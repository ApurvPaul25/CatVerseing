import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Cats from "./pages/Cats"
import Breeds from "./pages/Breeds"
import LocalCats from "./pages/Localcats"
import WildCats from "./pages/WildCats"
import News from "./pages/News"
import Footer from "./components/Footer"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import Incdec from "./pages/incdec"
import { CATS } from "../../Components/Server/server"


function App(){
  return(
    <BrowserRouter>
        <Provider store={store}>
          <div className="flex flex-col min-h-screen">
            <Navbar />

              <main className="flex-grow">
                <Routes>
                  <Route path="/cats" element={<Cats />}/>
                  <Route path="/breeds" element={<Breeds />}/>
                  <Route path="/localcats" element={<LocalCats />}/>
                  <Route path="/wildcats" element={<WildCats />}/>
                  <Route path="/news" element={<News />}/>
                </Routes>
              </main>

<<<<<<< HEAD
              {/* <CATS /> */}
=======
              <CATS />
>>>>>>> ec3f74237a3579ae35ef05d12f2049522a134ec3

              
              
            {/* <Incdec /> use useDispatch and useSelector inside the cats, breeds, footer, Navbar files also works*/}

            <Footer/>
          </div>
        </Provider>
    </BrowserRouter>
  )
}

export default App