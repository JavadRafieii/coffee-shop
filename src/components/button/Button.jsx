export default function Button({ ownStyle, icon, text, link }) {
    return (
        <button className={`${ownStyle} flex items-center gap-x-2 font-dana-regular text-base py-2 px-5 rounded-full`}>
            {icon}
            {text}
        </button>
    );
};