import IconLogo from "../icons/IconLogo";
import IconHome from "../icons/IconHome";
import IconStore from "../icons/IconStore";
import IconCoffee from "../icons/IconCoffee";
import IconBlog from "../icons/IconBlog";
import IconAbout from "../icons/IconAbout";
import IconCall from "../icons/IconCall";
import Badge from '@mui/material/Badge';
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
                <Badge color="success" overlap="circular">
                    <div className="w-10 h-10 bg-[#331603] rounded-full flex items-center justify-center">
                        <IconUser />
                    </div>
                </Badge>
                <Badge color="success" overlap="circular" badgeContent="0">
                    <div className="w-10 h-10 bg-[#331603] rounded-full flex items-center justify-center">
                        <IconBasket />
                    </div>
                </Badge>
            </div>
        </nav>
    );
};