import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample() {
  return (
    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
        <Card className='bg-light'>
          <Card.Title className='p-3'>Nombre de color</Card.Title>
          <div  className='cuadroColorCard border border-1 border-dark mx-auto'>
              cuadro color
          </div>
  
          <div className='d-flex justify-content-end mx-3 my-4'>
              <Button variant="danger">Borrar</Button>
          </div>
        </Card>
    </div>

// background-color: color;
  );
}

export default BasicExample;