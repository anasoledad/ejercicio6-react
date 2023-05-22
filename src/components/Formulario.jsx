import {Form, Button} from 'react-bootstrap'
import ContenedorCard from './ContenedorCard';

const Formulario = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3" controlId="tarea">
          <Form.Control type="texto" placeholder="Ingrese un color ej Blue" />
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