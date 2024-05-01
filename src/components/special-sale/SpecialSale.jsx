import { useSelector } from "react-redux";
import { selectProductsIds } from "../../configuration-redux/productsSlice";
import ProductsCard from "../products-card/ProductsCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Navigation } from 'swiper/modules';

export default function SpecialSale() {

    const productsById = useSelector(selectProductsIds);

    return (
        <div className="max-w-[1300px] absolute -top-56">
            {
                productsById.length !== 0
                && <Swiper
                        navigation={true}
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                        modules={[Navigation]}
                    className="mySwiper"
                >
                    {productsById.map(productByid => (
                        <SwiperSlide key={productByid}>
                            <ProductsCard productId={productByid} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            }
        </div>
    );
};