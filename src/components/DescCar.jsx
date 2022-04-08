import '../styles/DescCar.css';
import {Container, Card, Button, Image} from 'react-bootstrap';
import IconUsers from '../assets/fi_users.svg';
import IconSettings from  '../assets/fi_settings.svg';
import IconCalendar from '../assets/fi_calendar.svg';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';


const DescCar = () => {

    const { idCar } = useParams();
    const [datasCarDetail, setDatasCarDetail] = useState({});

    const reqDataCarDetail = async () => {
       const data = await axios.get(`https://rent-cars-api.herokuapp.com/admin/car/${idCar}`);
       setDatasCarDetail(data.data);
        console.log(data.data);
    }
    
    useEffect(() => {
        reqDataCarDetail();
    }, []);


    return(
        <Container fluid>
            <div className="wrapper-detail d-flex justify-content-center flex-column flex-md-row">
                <div className="description rounded">
                    <p className="title-desc">Tentang Paket</p>
                    <p className="sec-title">Include</p>
                    <ul className="first-ul">
                        <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                        <li>Sudah termasuk pajak</li> 
                    </ul>
                    <p className="sec-title">Exclude</p>
                    <ul className="sec-ul">
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>                    
                    </ul>
                    <p className="title-desc">Refund, Reschedule, Overtime</p>
                    <ul className="third-ul">
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li> 
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li> 
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li> 
                    </ul>
                </div>
                <Card className="card-cars" style={{ width: '330px' }}>
                <Card.Img variant="top" src={datasCarDetail.image} className="card-img"/>
                <Card.Body>
                    <Card.Text className="text-car-type">{datasCarDetail.name}</Card.Text>
                    <div className="d-flex">
                        <div className="d-flex card-icon">
                            <Image src={IconUsers}  className="img-detail icon-users" />
                            <Card.Text className="text-detail">4 orang</Card.Text>
                        </div>
                        <div className="d-flex card-icon">
                            <Image src={IconSettings} className="img-detail icon-else"/>
                            <Card.Text className="text-detail">Manual</Card.Text>
                        </div>
                        <div className="d-flex card-icon">
                            <Image src={IconCalendar} className="img-detail icon-else"/>
                            <Card.Text className="text-detail">Tahun 2020</Card.Text>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pricetag-wrapper">
                        <Card.Text className="text-total">Total</Card.Text>
                        <Card.Text className="text-pricetag">Rp {datasCarDetail.price}</Card.Text>
                    </div>
                    <Button className="btn-payment btn-pay-card">Lanjutkan Pembayaran</Button>
                </Card.Body>
                </Card>
            </div>
            <div className="d-flex justify-content-center">
            <Button className="btn-payment btn-pay-outside">Lanjutkan Pembayaran</Button>
            </div>
        </Container>
    )
}
export default DescCar;