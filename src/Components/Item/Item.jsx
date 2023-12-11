import './Item.css'
import { Link } from 'react-router-dom'

export const Item = ({ id, title, image, price, count }) => {

    return (
            <div className="col-3 Card text-center">
                <header>
                    <h2 className="Name">
                        {title}
                    </h2>
                </header>
                <picture>
                    <img className="img-fluid" src={image} alt={title} />
                </picture>
                <section>
                    <p>
                        <b>Precio</b>: ${price}
                    </p>
                    <p>
                        <b>Stock disponible</b>: {count}
                    </p>
                </section>
                <footer className='Space'>
                    <Link to={`/item/${id}`} className="Prueba">Ver detalle</Link>
                </footer>
            </div>
    )
}

