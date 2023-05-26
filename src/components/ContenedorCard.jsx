import CardColor from './CardColor';

const ContenedorCard = ({colores, borrarCard}) => {
    return (
        
        <section className='row'>  
            {colores.map((color, index) =>  <CardColor key={index} color={color} borrarCard={borrarCard}></CardColor> )}
        </section>
    );
};

export default ContenedorCard;
