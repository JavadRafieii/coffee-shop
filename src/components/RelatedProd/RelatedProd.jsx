import { IconPlant, IconPoint } from "../TailwindIcons/TailwindIcons";

export default function RelatedProd() {
    return (
        <div className="my-10">
            <h4 className=" font-dana-regular text-4xl text-[#1b1b1d] flex items-end gap-x-2">
                <IconPlant />
                محصولات مرتبط
                <IconPoint />
            </h4>
        </div>
    );
};