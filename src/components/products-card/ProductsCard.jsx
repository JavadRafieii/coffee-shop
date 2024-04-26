import { useSelector } from "react-redux";
import IconBasket from "../icons/IconBasket";
import { selectProduct } from "../../configuration-redux/productsSlice";


function calculateDiscountedPrice(price, off) {
    const discountedPrice = price - (price * off / 100);
    const formattedPrice = discountedPrice.toLocaleString('en-US');
    return formattedPrice;
};

function formatPriceWithComma(price) {
    return price.toLocaleString('en-US');
};

export default function ProductsCard({ id }) {

    const product = useSelector(state => selectProduct(state, id));

    return (
        <div className="bg-[#efeff1] w-[300px] my-10 p-5 rounded-3xl">
            <a href="/">
                <figure className="relative">
                    <img src={`./images/${product.image}.png`} alt="..." className="h-48 mx-auto" />
                    {
                        product.costs.off
                        && <figcaption className="bg-white font-dana-fa-medium text-sm text-[#007e57] discount-percentage-box">
                            {product.costs.off}%
                        </figcaption>
                    }
                </figure>
            </a>
            <a href="/">
                <h4 className="font-dana-fa-medium text-base text-center my-5">
                    {product.titleFa.slice(0, 50)} ...
                </h4>
            </a>
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <span className={product.costs.off ? "font-dana-fa-medium text-sm text-[#1b1b1d] discount-line" : "font-dana-fa-Medium text-lg text-[#1b1b1d]"}>
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