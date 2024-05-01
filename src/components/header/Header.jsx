import IconLogo from "../icons/IconLogo";
import IconHome from "../icons/IconHome";
import IconStore from "../icons/IconStore";
import IconCoffee from "../icons/IconCoffee";
import IconBlog from "../icons/IconBlog";
import IconAbout from "../icons/IconAbout";
import IconCall from "../icons/IconCall";
import IconBasket from "../icons/IconBasket";
import IconUser from "../icons/IconUser";
import Search from "./Search";

const navigationItems = [
    { icon: <IconHome />, title: "صفحه اصلی" },
    { icon: <IconStore />, title: "فروشگاه" },
    { icon: <IconCoffee />, title: "سفارش قهوه" },
    { icon: <IconBlog />, title: "وبلاگ" },
    { icon: <IconAbout />, title: "درباره ما" },
    { icon: <IconCall />, title: "تماس با ما" },
];

export default function Header() {
    return (
        <nav className="flex items-center justify-between bg-[#efeff1] py-3 px-5 rounded-full mt-5">
            <div className="flex items-center gap-x-10">
                <IconLogo />
                <ul className="flex items-center gap-x-10 font-dana-Medium text-sm">
                    {navigationItems.map((item, index) => (
                        <li key={index}>
                            <a href="/" className="flex items-center gap-x-1">
                                {item.icon}
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-x-3">
                <Search />
            </div>
        </nav>
    );
};