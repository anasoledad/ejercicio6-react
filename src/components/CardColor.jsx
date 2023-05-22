import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardTitulo from './CardTitulo';
import CardImagen from './CardImagen';


function BasicExample() {
  return (
    <div className='col-6 col-sm-4 col-md-3 col-lg-2 mb-3'>
        <Card>
            <CardTitulo></CardTitulo>
            <CardImagen></CardImagen>
            <div className='d-flex justify-content-end mx-3 my-2'>
                <Button variant="danger">Borrar</Button>
            </div>
        </Card>
    </div>


  );
}

export default BasicExample;