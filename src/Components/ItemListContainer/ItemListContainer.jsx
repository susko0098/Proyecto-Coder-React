import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory  } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response) 
            })
            .catch(Error => {
                console.error(Error)
            })
    }, [categoryId])

    return (
        <div className="container">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

