import CardColor from './CardColor';

const ContenedorCard = ({colores}) => {
    return (
        
        <section className='row'>
            
            {colores.map((color, index) =>  <CardColor key={index} color={color} ></CardColor> )}

        </section>
    );
};

export default ContenedorCard;
