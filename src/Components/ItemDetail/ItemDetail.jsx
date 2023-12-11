import "./ItemDetail.css"

const ItemDetail = ({ id, title, image, category, description, price, count }) => {
    return (
        <div className="row text-center DP">
            <article className="col-4 DP">
                <header>
                    <h2>
                        {title}
                    </h2>
                </header>
                <picture>
                    <img className="img-fluid " src={image} alt={title} />
                </picture>
                <section>
                    <p>
                        <b>Categoria</b>: {category}
                    </p>
                    <p>
                        <b>Descripcion</b>: {description}
                    </p>
                    <p>
                        <b>Stock</b>: {count}
                    </p>
                    <p>
                        <b>Precio</b>: ${price}
                    </p>
                </section>
                <footer>
                    
                </footer>
            </article>
        </div>
    )
}

export default ItemDetail