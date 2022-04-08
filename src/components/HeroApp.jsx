import Image from 'react-bootstrap/Image';
import CarImage from '../assets/img_car.svg';
import '../styles/CarRental.css';

const HeroApp = () => {
    return(
    <div className="relative">        
        <div className="hero d-flex justify-content-end w-100 flex-column flex-md-row">
        <div className="hero-text w-100 d-flex flex-column align-items-start">
            <h1 className="hero-bold">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p className="hero-light w-75">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        </div>
        <div className="hero-img w-100 w-sm-50 d-flex align-items-end">
            <Image src={CarImage} className="img-fluid"/>
        </div>
        </div>
    </div>
    )
}
export default HeroApp;