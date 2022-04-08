import { Routes, Route, BrowserRouter } from "react-router-dom";
// import CarRental from '../Pages/CarRental';
// import DetailCar from '../Pages/DetailCar';
import CarRental from '../Pages/CarRental';
import DetailCar from '../Pages/DetailCar';

const RouteApp = () => {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<CarRental/>}/>
            <Route path="/detail/:idCar" element={<DetailCar/>}/>
            <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default RouteApp;