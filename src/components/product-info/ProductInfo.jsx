import Rating from '@mui/material/Rating';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

export default function ProductInformation({ product }) {
    return (
        <>
            <h4 className="font-dana-fa-medium text-lg text-[#007e57]">{product.titleFa}</h4>
            <div className='mb-2 flex items-center gap-2 my-3'>
                <span className="block font-dana-medium text-xs text-[#979797]">{product.titleEn}</span>
                <span className='flex-auto h-[1px] bg-[#9797976f]'></span>
            </div>
            <div className="flex items-center gap-x-2 mt-3">
                <Rating name="read-only" value={product.stars} readOnly style={{ fontSize: "20px" }} />
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite style={{ color: "red" }} />} size="small" style={{ padding: 0 }} />
                <Checkbox icon={<SwapHorizIcon />} checkedIcon={<SwapHorizIcon style={{ color: "#007e57" }} />} style={{ padding: 0 }} />
            </div>
            <h4 className="font-dana-regular text-base text-[#007e57] mb-3 mt-5">توضیحات محصول</h4>
            <ul className="font-dana-fa-medium text-sm flex flex-col gap-2 list-disc pr-5">
                <li>وزن: {product.attributes.weight} کیلوگرم</li>
                <li>ساخت: {product.attributes.made}</li>
                <li>ابعاد: {product.attributes.dimensions}</li>
                <li>کارکرد: {product.attributes.function}</li>
                <li>نوع: {product.attributes.type}</li>
            </ul>
        </>
    );
};