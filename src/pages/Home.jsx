import Container from "../theme/Container";
import Button from "../components/button/Button";
import IconCoffeeBtn from "../components/icons/IconCoffeeBtn";
import IconGenuineCoffee from "../components/icons/IconGenuineCoffee";
import IconCoffeeDerivatives from "../components/icons/IconCoffeeDerivatives";
import IconIranianTea from "../components/icons/IconIranianTea";
import IconAccessories from "../components/icons/IconAccessories";
import IconMajorCoffee from "../components/icons/IconMajorCoffee";
import SpecialSale from "../components/special-sale/SpecialSale";
import NewProdSec from "../components/NewProdSec/NewProdSec";

import {
    IconPlant,
    IconPoint,
    IconStore,
    IconQuestion,
    IconChoose,
} from "../components/TailwindIcons/TailwindIcons";

const category = [
    { icon: <IconGenuineCoffee />, title: "قهوه اصیل", description: "ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است." },
    { icon: <IconCoffeeDerivatives />, title: "مشتقات قهوه", description: "ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است." },
    { icon: <IconIranianTea />, title: "چای ایرانی", description: "ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است." },
    { icon: <IconAccessories />, title: "اکسسوری ها", description: "ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است." },
    { icon: <IconMajorCoffee />, title: "قهوه عمده", description: "ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است." },
];

export default function HomePage() {
    return (
        <>
            <Container>

                {/* First section */}
                <div className="grid grid-cols-2 items-center my-10">
                    <div>
                        <h2 className="font-dana-light text-[#1b1b1d] text-3xl">آنلاین شاپ تخصصی</h2>
                        <h1 className="font-dana-bold text-[#1b1b1d] text-5xl my-5">انواع قـهوه و لـوازم کافـی شاپ</h1>
                        <p className="font-dana-regular text-[#1b1b1d] text-base">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز میباشد .
                        </p>
                        <div className="mt-5 flex items-center gap-x-5">
                            <Button
                                ownStyle={"bg-[#007e57] text-white"}
                                icon={<IconCoffeeBtn />}
                                text={"ترکیب سفارشی"}
                            />
                            <Button
                                ownStyle={"bg-white text-[#007e57]"}
                                icon={<IconStore />}
                                text={"خرید کنید"}
                            />
                        </div>
                    </div>
                    <div>
                        <figure>
                            <img src="./images/Coffee.webp" alt="..." />
                        </figure>
                    </div>
                </div>
                {/* First section */}

                {/* Category section */}
                <div className="bg-[#1b1b1d] p-5 rounded-3xl mb-52">
                    <div className="grid grid-cols-5 gap-x-8 text-white">
                        {category.map((item, index) => (
                            <div key={index}>
                                <div className="flex flex-col gap-y-3 items-center">
                                    {item.icon}
                                    <h3 className=" font-dana-thin text-2xl">{item.title}</h3>
                                    <p className=" font-dana-light text-xs text-center">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Category section */}

            </Container>

            <div className="bg-[#1b1b1d]">
                <Container>

                    {/* Special sales section */}
                    <SpecialSale />
                    {/* Special sales section */}

                    {/* About us section */}
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-8 justify-center">
                            <h3 className="font-dana-regular text-4xl text-white flex items-end gap-x-2">
                                <IconPlant />
                                درباره فروشگاه ما
                                <IconPoint />
                            </h3>
                            <p className="font-dana-thin text-white text-base text-justify">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی است.
                            </p>
                            <div className="flex items-center gap-x-5">
                                <Button
                                    ownStyle={"bg-[#007e57] text-white"}
                                    icon={<IconStore />}
                                    text={"فروشگاه ما"}
                                />
                                <Button
                                    ownStyle={"bg-white text-[#007e57]"}
                                    icon={<IconQuestion />}
                                    text={"سوالی دارید؟"}
                                />
                            </div>
                        </div>
                        <div className="px-10">
                            <figure>
                                <img src="/images/coffee.png" alt="..." />
                            </figure>
                        </div>
                        <div className="px-10">
                            <figure>
                                <img src="/images/coffee-2.png" alt="..." />
                            </figure>
                        </div>
                        <div className="flex flex-col gap-8 justify-center">
                            <h3 className="font-dana-regular text-4xl text-white flex items-end gap-x-2">
                                <IconPlant />
                                مناسب ترین انتخاب
                                <IconPoint />
                            </h3>
                            <ul className="font-dana-thin text-white text-base flex flex-col gap-5">
                                <li className="flex items-center gap-x-2">
                                    <span><IconChoose /></span>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                                </li>
                                <li className="flex items-center gap-x-2">
                                    <span className="text-[#007e57]"><IconChoose /></span>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                                </li>
                                <li className="flex items-center gap-x-2">
                                    <span><IconChoose /></span>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                                </li>
                                <li className="flex items-center gap-x-2">
                                    <span className="text-[#007e57]"><IconChoose /></span>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* About us section */}

                    {/* New products section */}
                    <NewProdSec />
                    {/* New products section */}

                </Container>
            </div>
        </>
    );
};