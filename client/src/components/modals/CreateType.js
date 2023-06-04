import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { createType } from '../../http/deviceApi'

const CreateType = ({ show, onHide }) => {
    const [value, setValue] = useState('')
    const addType = () => {
        createType({ name: value }).then(data => {
            setValue('')
            onHide()
        });
    }
  return (
    <Modal
        show={show}
        onHide={onHide}  
        size="lg"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Додати новий тип
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control 
                    value={value}  
                    placeholder='Введіть назву типу'
                    onChange={e => setValue(e.target.value)}  
                />  
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={'outline-danger'} onClick={onHide}>Закрити</Button>
            <Button variant={'outline-success'} onClick={addType}>Додати</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default CreateType