import {Form, Button} from 'react-bootstrap'
import ContenedorCard from './ContenedorCard';
import { useState } from 'react';

const Formulario = () => {

  const [color, setColor] = useState('');
  const [colores, setColores] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setColores([...colores, color]);
    setColor('');
  }

  return (
    <section className='mx-3 mx-md-5'>
      
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="color">
          <div className='d-flex'>
            <div className='cuadroColorForm border border-dark me-2 me-md-4'></div>
            <Form.Control type="texto" placeholder="Ingrese un color ej Blue" onChange={(e)=> setColor(e.target.value)}
          value={color}/>
          </div>

          <div className='d-flex justify-content-end'>
            <Button className='mt-3' variant="primary" type="submit">
                Guardar
            </Button>
          </div>
          
        </Form.Group>
      </Form>
      <ContenedorCard></ContenedorCard>
    </section>
  );
};

export default Formulario;