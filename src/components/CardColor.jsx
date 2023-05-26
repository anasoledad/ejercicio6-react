import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardColor({color}) {
  return (
    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
        <Card className='bg-light h-100'>
          <Card.Title className='p-3 fs-5'>{color}</Card.Title>
          <Card.Body>
            <div  className='cuadroColorCard border border-1 border-dark mx-auto' style={{ backgroundColor: color }}>
              cuadro color
            </div>
            <div className='d-flex justify-content-end mx-3 my-4'>
              <Button variant="danger">Borrar</Button>
          </div>
          </Card.Body>
         
        </Card>
    </div>
  );
}

export default CardColor;