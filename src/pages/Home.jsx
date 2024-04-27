import Container from "../theme/Container";
import Button from "../components/button/Button";
import IconCoffeeBtn from "../components/icons/IconCoffeeBtn";
import IconStore from "../components/icons/IconStore";
import IconGenuineCoffee from "../components/icons/IconGenuineCoffee";
import IconCoffeeDerivatives from "../components/icons/IconCoffeeDerivatives";
import IconIranianTea from "../components/icons/IconIranianTea";
import IconAccessories from "../components/icons/IconAccessories";
import IconMajorCoffee from "../components/icons/IconMajorCoffee";
import SpecialSale from "../components/special-sale/SpecialSale";

const category = [
    { icon: <IconGenuineCoffee />, title: "قهوه اصیل", description: "ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است." },
    { icon: <IconCoffeeDerivatives />, title: "مشتقات قهوه", description: "ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است." },
    { icon: <IconIranianTea />, title: "چای ایرانی", description: "ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است." },
    { icon: <IconAccessories />, title: "اکسسوری ها", description: "ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است." },
    { icon: <IconMajorCoffee />, title: "قهوه عمده", description: "ما رست هفتگی قهوه و ارسال از درب کارخانه قهوه ی عمده است." },
];

export default function HomePage() {
    return (
        <Container>
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
            <div className="bg-[#1b1b1d] p-5 rounded-3xl">
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

            <SpecialSale />
            
        </Container>
    );
};