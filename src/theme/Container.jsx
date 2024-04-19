export default function Container({ children }) {
    return ( 
        <section className="w-full max-w-[1300px] mx-auto px-5 lg:px-10 xl:px-0">
            {children} 
        </section>
     );
};