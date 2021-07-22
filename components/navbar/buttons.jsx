import Link from "next/link";
import Image from "next/image";
import Tooltip from "react-simple-tooltip"
export default function buttons({ tooltip, src, link }) {
    return (
        <>
            <li className="mr-6">
                <Link href={link} passHref>
                    <a>
                        <Tooltip content={tooltip} placement='bottom'>
                            <Image src={src} alt={tooltip} width={20} height={20} />
                        </Tooltip>
                    </a>
                </Link>
            </li>
        </>
    )

};
