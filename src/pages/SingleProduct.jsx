import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectProduct } from '../configuration-redux/productsSlice';
import Container from '../theme/Container';
import SProdImg from '../components/SProdImg/SProdImg';
import ProdInfo from '../components/ProdInfo/ProdInfo';
import ProdInfoPay from '../components/ProdInfoPay/ProdInfoPay';
import ProdDescCom from '../components/ProdDescCom/ProdDescCom';
import { IconSearch } from '../components/TailwindIcons/TailwindIcons';
import RelatedProd from '../components/RelatedProd/RelatedProd';

export default function SingleProduct() {

    let { productId } = useParams();

    const product = useSelector(state => selectProduct(state, productId));

    return (
        <Container>
            {
                product
                &&
                <>
                    <div className="bg-[#007e57] p-3 rounded-lg mt-10 font-dana-fa-medium text-white text-sm">
                        خانه/ محصول / {product.titleFa}
                    </div>

                    <div className="grid grid-cols-12 gap-5 my-10">
                        <div className="col-span-4 bg-white rounded-2xl overflow-hidden relative">
                            <span className="absolute left-5 top-5 z-10">
                                <IconSearch />
                            </span>
                            <SProdImg img={product.image} alt={product.titleFa} />
                        </div>
                        <div className="col-span-8 bg-white p-5 rounded-2xl">
                            <div className="grid grid-cols-12 gap-5">
                                <div className="col-span-7">
                                    <ProdInfo product={product} />
                                </div>
                                <div className="col-span-5 bg-[#F4F4F4] rounded-2xl p-5">
                                    <ProdInfoPay product={product} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <ProdDescCom discription={product.discription} title={product.titleFa} />

                    <RelatedProd/>
                </>
            }
        </Container>
    );
};