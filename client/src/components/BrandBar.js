import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite'
import { Card, Col } from 'react-bootstrap';
import { Context } from '..';

const BrandBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <Col className='d-flex flex-wrap'>
            {device.brands.map(brand =>
                <Card
                    style={{cursor: 'pointer'}}
                    className='p-3 ms-1 me-1'
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}
                >
                    {brand.name}
                </Card>
            )}
        </Col>
    )
})

export default BrandBar