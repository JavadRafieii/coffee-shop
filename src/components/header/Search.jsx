import IconSearch from "../icons/IconSearch";

export default function Search() {
    return (
        <div className="relative text-gray-600">
            <input type="search" name="serch" placeholder="جستجو ..." className="h-12 w-72 px-5 pl-10 rounded-full text-sm focus:outline-none font-dana-regular" />
            <button type="submit" className="absolute left-0 top-0 mt-3 ml-4">
                <IconSearch />
            </button> 
        </div>
    );
};