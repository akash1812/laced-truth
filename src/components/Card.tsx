import * as Icon from "@tabler/icons-react";
import Image from "next/image";

interface CardType {
    heading: string,
    icon: string,
    text: string
}

export default function Card({heading, icon, text}: CardType){
    const IconComponent = Icon[icon as keyof typeof Icon] as React.ElementType;
    return(
        <div className="w-60 h-[20rem] rounded-xl bg-black shadow-2xl shadow-slate-300 mt-4 p-2 flex flex-col">
            <h2 className=" text-center text-gray-300">{heading}</h2>
            <div className="flex items-center justify-center mt-2">
                {IconComponent && <IconComponent className="w-20 h-20 text-white" />}
            </div>
            <div className="bg-gradient-to-r from-slate-500 to-slate-800 flex-1 p-1 mt-2 rounded-lg border shadow-xl relative">
                <div className="absolute inset-0 h-full w-full overflow-hidden rounded-lg divide-y divide-neutral-200 text-black">
                    <div className="flex items-center justify-center text-center mt-2 ">
                        <p className="text-gray-200">{text} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}