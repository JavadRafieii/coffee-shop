import { useSelector } from "react-redux";
import { selectSpecialProductIds } from "../../configuration-redux/productsSlice";
import ProductsCard from "../products-card/ProductsCard";
import { IconPlant, IconPoint } from "../TailwindIcons/TailwindIcons";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

export default function SpecialSale() {

    const productsById = useSelector(selectSpecialProductIds);

    console.log(productsById);

    return (
        <div className=" -translate-y-32">
            <h3 className="font-dana-regular text-4xl text-[#1b1b1d] flex items-end justify-center gap-x-2 mb-10">
                <IconPlant />
                فروش ویژه
                <IconPoint />
            </h3>
            {
                productsById.length !== 0
                && <Swiper
                    navigation={true}
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    speed={1000}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {productsById.map(productById => (
                        <SwiperSlide key={productById}>
                            <ProductsCard productId={productById} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            }
        </div>
    );
};