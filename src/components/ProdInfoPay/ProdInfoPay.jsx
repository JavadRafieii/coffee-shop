import { calculateDiscountedPrice, formatPriceWithComma } from "../../features/features";
import { IconTruck, IconCheck, IconBox, IconMoney, IconTick } from "../TailwindIcons/TailwindIcons";

export default function ProdInfoPay({ product }) {
    return (
        <>
            <h4 className="flex items-center gap-x-2 font-dana-regular text-base text-[#007e57] border-b-[1px] border-white pb-3">
                <IconTick />
                <span>محصول</span>
            </h4>
            <ul className="font-dana-Medium text-xs text-[#8D8D8D] flex flex-col gap-5 mt-3">
                <li className="flex items-center gap-x-2">
                    <IconTruck />
                    <span>ارسال توسط فروشگاه</span>
                </li>
                <li className="flex items-center gap-x-2">
                    <IconCheck />
                    <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
                </li>
                <li className="flex items-center gap-x-2">
                    <IconBox />
                    <span>ضمانت تعویض کالا</span>

                </li>
                <li className="flex items-center gap-x-2">
                    <IconMoney />
                    <span>هزینه حمل به عهده خریدار</span>
                </li>
            </ul>
            <div className="flex items-center justify-between">
                <div className="flex flex-col my-5 font-dana-fa-medium text-[#1b1b1d]">
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
                {
                    product.costs.off
                    && <span className="text-white font-dana-fa-medium text-sm bg-[#007e57] flex items-center justify-center rounded-lg w-10 h-8">
                        {product.costs.off}%
                    </span>
                }
            </div>
            <button className="w-full font-dana-Medium text-sm text-white bg-[#007e57] py-3 rounded-xl transition-[.5s] hover:bg-[#444444]">افزودن به سبد خرید</button>
        </>
    );
};