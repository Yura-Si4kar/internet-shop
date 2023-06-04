import React, { useContext } from 'react'
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.svg';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';
import { Context } from '..';

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();
    const store = useContext(Context)

    const brandName = () => {
        const item = store.device.brands.find((item) => item.id === device.brandId);
        
        return item.name;
    }

    return (
        <Col md={3} className='p-1 mt-3' onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card className='p-1' style={{height: 100 + '%'}}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} style={{minWidth: 100 + '%', height: 'auto'}} />
                <div className='text-black-50 d-flex justify-content-between align-items-center mt-2'>
                    <div>{brandName()}</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image height={15} width={16} src={star}/>
                    </div>  
                </div>  
                <div>{device.name}</div>
            </Card>
        </Col>
    )
} 

export default DeviceItem