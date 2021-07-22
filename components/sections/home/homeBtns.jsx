import Image from "next/image";
import Link from 'next/link'
export default function homeBtns({ src, link }) {
    return (
        <>
            <Link href={link} passHref>
                <a>
                    <div className='cursor-pointer hover:scale-105 hover:opacity-80 opacity-100 duration-200 transform'>
                        <Image src={src} width={208} height={40} alt={src} />
                    </div>
                </a>
            </Link>
        </>
    )
};
