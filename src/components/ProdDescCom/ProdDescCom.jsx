import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ComFrm from "../ComFrm/ComFrm";

export default function ProdDescCom({ discription, title }) {
    return (
        <div className="bg-white p-5 rounded-xl">
            <Tabs>
                <TabList className="flex items-center border-b-[1px] border-[#9797976f]">
                    <Tab className="px-4 font-dana-fa-medium text-base py-3 outline-none cursor-pointer">توضیحات</Tab>
                    <Tab className="px-4 font-dana-fa-medium text-base py-3 outline-none cursor-pointer">نظرات (0)</Tab>
                </TabList>
                <TabPanel>
                    <div className="p-5">
                        <h4 className="font-dana-regular text-base text-[#007e57] mb-3">توضیحات</h4>
                        <p className="font-dana-light text-base">{discription}</p>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-2 gap-5 p-5">
                        <div>
                            <h4 className="font-dana-regular text-base text-[#007e57] mb-3">نقد و بررسی‌ها</h4>
                            <p className="font-dana-light text-base">هنوز بررسی‌ای ثبت نشده است.</p>
                        </div>
                        <div>
                            <h4 className="font-dana-fa-medium text-base text-[#007e57] mb-5">
                                <span className="text-[#1b1b1d]">دیدگاهی برای</span>
                                "{title}"
                                <span className="text-[#1b1b1d]">بنویسید.</span>
                            </h4>
                            <ComFrm />
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};