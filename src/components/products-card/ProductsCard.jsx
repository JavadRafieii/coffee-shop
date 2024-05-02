import { useSelector } from "react-redux";
import IconBasket from "../icons/IconBasket";
import { selectProduct } from "../../configuration-redux/productsSlice";
import { Link } from "react-router-dom";
import { calculateDiscountedPrice, formatPriceWithComma } from "../../features/features";

export default function ProductsCard({ productId }) {

    const product = useSelector(state => selectProduct(state, productId));

    return (
        <div className="h-full bg-[#efeff1] p-5 rounded-3xl">
            <Link to={`product/${productId}`}>
                <figure className="relative">
                    <img src={`./images/${product.image}.png`} alt="..." className="h-48 mx-auto" />
                    {
                        product.costs.off
                        && <figcaption className="bg-white font-dana-fa-medium text-sm text-[#007e57] discount-percentage-box">
                            {product.costs.off}%
                        </figcaption>
                    }
                </figure>
            </Link>
            <Link to={`product/${productId}`}>
                <h4 className="font-dana-fa-medium text-base text-center my-5">
                    {product.titleFa.slice(0, 50)} ...
                </h4>
            </Link>
            <div className="flex items-center justify-between font-dana-fa-medium text-[#1b1b1d]">
                <div className="flex flex-col">
                    <span className={product.costs.off ? "text-sm discount-line" : "text-lg"}>
                        {formatPriceWithComma(product.costs.price)}
                        {!product.costs.off && <span className="text-sm">تومان</span>}
                    </span>
                    {
                        product.costs.off
                        && <span className="font-dana-fa-medium text-lg text-[#1b1b1d]">
                            {calculateDiscountedPrice(product.costs.price, product.costs.off)}
                            <span className="text-sm">تومان</span>
                        </span>
                    }
                </div>
                <button className="bg-[#007e57] text-white font-dana-Medium text-sm px-2 h-8 rounded-full flex items-center gap-x-2 transition-[.5s] hover:bg-[#444444]">
                    افزودن به
                    <IconBasket />
                </button>
            </div>
        </div>
    );
};