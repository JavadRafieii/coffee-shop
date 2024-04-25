import IconBasket from "../icons/IconBasket";

export default function ProductsCard() {
    return (
        <div className="bg-[#efeff1] w-[300px] my-10 p-5 rounded-3xl">
            <a href="/">
                <figure className="relative">
                    <img src="./images/product.png" alt="..." className="h-48 mx-auto" />
                    <figcaption className="bg-white font-dana-Medium text-sm text-[#007e57] discount-percentage-box">۱۸٪</figcaption>
                </figure>
            </a>
            <a href="/">
                <h4 className="font-dana-regular text-base text-center my-5">لورم ایپسوم متن ساختگی با تولید  متن ساختگی متن ساختگی ...</h4>
            </a>
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="font-dana-regular text-sm text-[#1b1b1d] discount-line">۱۹۵,۰۰۰</span>
                    <span className="font-dana-regular text-lg text-[#1b1b1d]">
                        ۱۹۵,۰۰۰
                        <span className="text-sm">تومان</span>
                    </span>
                </div>
                <button className="bg-[#007e57] text-white font-dana-Medium text-sm px-2 h-8 rounded-full flex items-center gap-x-2">
                    افزودن به
                    <IconBasket />
                </button>
            </div>
        </div>
    );
};