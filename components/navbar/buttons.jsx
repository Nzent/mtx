import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import Link from "next/link";
import Image from "next/image";

export default function buttons({ tooltip, src ,link}) {
    return (
        <>
            <li className="mr-6">
                <Link href={link}><a>
                    <Tippy content={<span>{tooltip}</span>}>
                        <Image src={src} alt={tooltip} width={20} height={20} />
                    </Tippy>
                </a></Link>
            </li>
        </>
    )

};
