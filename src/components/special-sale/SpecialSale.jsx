import { useSelector } from "react-redux";
import { selectProductsIds } from "../../configuration-redux/productsSlice";
import ProductsCard from "../products-card/ProductsCard";

export default function SpecialSale() {

    const productsById = useSelector(selectProductsIds);

    return (
        <div>
            {
                productsById.length !== 0
                && productsById.map(productByid => <ProductsCard key={productByid} id={productByid} />)
            }
        </div>
    );
};