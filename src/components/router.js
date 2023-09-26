import { BrowserRouter, HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import CardHeroiPronto from "./CardHeroiPronto/CardHeroiPronto";

function ScrollToTop() {
    const { pathname} = useLocation();

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    }, [pathname]);
    return null;
}
const RouterApp = () => {
    return(
        <>
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/heroicriado" element={<CardHeroiPronto/>}/>
            </Routes>
        </BrowserRouter>
        </>

    )
}

export default RouterApp




