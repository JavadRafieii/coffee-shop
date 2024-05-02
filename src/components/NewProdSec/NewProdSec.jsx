import { useSelector } from "react-redux";
import { selectProductsIds } from "../../configuration-redux/productsSlice";
import ProductsCard from "../products-card/ProductsCard";
import { IconPlant, IconPoint } from "../TailwindIcons/TailwindIcons";
import Button from "../button/Button";

export default function NewProdSec() {

    const productsById = useSelector(selectProductsIds);

    return (
        <div className=" translate-y-32">
            <h3 className="font-dana-regular text-4xl text-white flex items-end justify-center gap-x-2 mb-10">
                <IconPlant />
                جدیدترین محصولات
                <IconPoint />
            </h3>
            <div className="grid grid-cols-4 gap-8">
                {productsById.length !== 0
                    && productsById.map(productById => (
                        <div key={productById}>
                            <ProductsCard productId={productById} />
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center mt-10">
                <Button
                    ownStyle={"bg-[#007e57] text-white"}
                    text={"مشاهده محصولات"}
                />
            </div>
        </div>
    );
};