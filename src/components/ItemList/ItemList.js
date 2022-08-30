import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({ products }) => {
    return (
        <div className="grid-products">
            {/*map method for products*/}
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList