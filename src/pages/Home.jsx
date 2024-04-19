import Container from "../theme/Container";
import Button from "../components/button/Button";
import IconCoffee from "../components/icons/IconCoffee";
import IconStore from "../components/icons/IconStore";

export default function HomePage() {
    return (
        <Container>
            <div className="grid grid-cols-2 items-center mt-10">
                <div>
                    <h2 className="font-dana-light text-[#1b1b1d] text-3xl">آنلاین شاپ تخصصی</h2>
                    <h1 className="font-dana-bold text-[#1b1b1d] text-5xl my-5">انواع قـهوه و لـوازم کافـی شاپ</h1>
                    <p className="font-dana-regular text-[#1b1b1d] text-base">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز میباشد .
                    </p>
                    <div className="mt-5 flex items-center gap-x-5">
                        <Button
                            ownStyle={"bg-[#007e57] text-white"}
                            icon={<IconCoffee />}
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
                        <img src="./images/Coffee.webp" alt="" />
                    </figure>
                </div>
            </div>
        </Container>
    );
};