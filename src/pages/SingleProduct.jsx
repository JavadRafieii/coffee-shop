import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectProduct } from '../configuration-redux/productsSlice';
import Container from '../theme/Container';
import SinglProductImg from '../components/single-product-img/SingleProductImg';
import ProductInfo from '../components/product-info/ProductInfo';
import ProductInfoPay from '../components/product-info-pay/ProductInfoPay';

export default function SingleProduct() {

    let { productId } = useParams();

    const product = useSelector(state => selectProduct(state, productId));

    return (
        <Container>
            {
                product
                &&
                <div className="grid grid-cols-12 gap-5 my-10">
                    <div className="col-span-4 bg-white rounded-2xl overflow-hidden">
                        <SinglProductImg img={product.image} />
                    </div>
                    <div className="col-span-8 bg-white p-5 rounded-2xl">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-7">
                                <ProductInfo product={product} />
                            </div>
                            <div className="col-span-5 bg-[#F4F4F4] rounded-2xl p-5">
                                <ProductInfoPay product={product} />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Container>
    );
};