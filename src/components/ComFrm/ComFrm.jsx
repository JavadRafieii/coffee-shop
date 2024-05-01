export default function ComFrm() {
    return (
        <form className="w-full">
            <label htmlFor="text" className="block font-dana-Medium text-sm my-2.5">نام و نام خانوادگی:</label>
            <input id="text" type="text" className="w-full p-2.5 mb-2.5 font-dana-regular text-sm bg-[#f4f4f4] rounded-xl focus:outline-[#007e57]" />
            <label htmlFor="email" className="block font-dana-Medium text-sm mb-2.5">آدرس ایمیل:</label>
            <input id="email" type="email" className="w-full p-2.5 mb-2.5 font-dana-regular text-sm bg-[#f4f4f4] rounded-xl focus:outline-[#007e57]" />
            <label htmlFor="message" className="block font-dana-Medium text-sm mb-2.5">دیدگاه شما:</label>
            <textarea id="message" rows="4" className="w-full p-2.5 mb-2.5 font-dana-regular text-sm bg-[#f4f4f4] rounded-xl focus:outline-[#007e57]"></textarea>
            <button className="w-full font-dana-Medium text-sm text-white bg-[#007e57] py-3 rounded-xl transition-[.5s] hover:bg-[#444444]">ثبت نظر</button>
        </form>
    );
};