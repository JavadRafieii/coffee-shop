import { IconHeart } from "../TailwindIcons/TailwindIcons";

export default function ProdInfo({ product }) {
    return (
        <>
            <h4 className="font-dana-fa-medium text-lg text-[#007e57]">{product.titleFa}</h4>
            <div className='mb-2 flex items-center gap-2 mt-3'>
                <span className="block font-dana-medium text-xs text-[#979797]">{product.titleEn}</span>
                <span className='flex-auto h-[1px] bg-[#9797976f]'></span>
            </div>
            <div className="mt-3 flex items-center gap-x-2">
                <span className="font-dana-fa-medium text-xs text-[#979797]">(بدون دیدگاه)</span>
                <IconHeart />
            </div>
            <h4 className="font-dana-regular text-base text-[#007e57] mb-3 mt-5">توضیحات محصول</h4>
            <ul className="font-dana-fa-medium text-sm text-[#1b1b1d] flex flex-col gap-2 list-disc pr-5">
                <li>وزن: {product.attributes.weight} کیلوگرم</li>
                <li>ساخت: {product.attributes.made}</li>
                <li>ابعاد: {product.attributes.dimensions}</li>
                <li>کارکرد: {product.attributes.function}</li>
                <li>نوع: {product.attributes.type}</li>
            </ul>
        </>
    );
};