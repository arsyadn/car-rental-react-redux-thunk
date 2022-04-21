import { Card, Button } from 'react-bootstrap';
import '../styles/CardCar.css';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import IconUsers from '../assets/fi_users.svg';
import IconSettings from  '../assets/fi_settings.svg';
import IconCalendar from '../assets/fi_calendar.svg';
import { useSelector } from 'react-redux';

const CardCar = () => {

    const {carData} = useSelector((globalStore) => globalStore.carReducer);

    const renderData = carData.map((data) => 
        <Card key={data.id} className="card-cars" style={{ width: '300px' }} >
        <Card.Img variant="top" src={data.image} className="card-img"/>
        <Card.Body className="card-body">
            <Card.Text className="text-car-type">{data.name}</Card.Text>
            <Card.Text className="car-pricetag">Rp {data.price} / hari</Card.Text>
            <Card.Text className="text-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Text>
            <div className="d-flex card-icon">
                <Image src={IconUsers} />
                <Card.Text className="text-detail">{data.passenger}</Card.Text>
            </div>
            <div className="d-flex card-icon">
                <Image src={IconSettings} />
                <Card.Text className="text-detail">{data.transmission}</Card.Text>
            </div>
            <div className="d-flex card-icon">
                <Image src={IconCalendar} />
                <Card.Text className="text-detail">{data.production}</Card.Text>
            </div>
            <Link to={`/detail/${data.id}`}><Button className="btn-cars">Pilih Mobil</Button></Link>
        </Card.Body>
        </Card>
    )
      

    return(
        <div className="card-wrapper d-flex flex-wrap justify-content-center">
        {renderData}
        </div>
   
    )
}
export default CardCar;