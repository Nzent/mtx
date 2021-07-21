import Image from "next/image";
import Link from 'next/link'
export default function homeBtns({ src, link }) {
    return (
        <>
            <Link href={link} passHref>
                <div className='cursor-pointer hover:shadow-md hover:opacity-80 opacity-100 duration-200 transform'>
                    <Image src={src} width={208} height={40} alt={src}/>
                    </div>
            </Link>
        </>
    )
};
