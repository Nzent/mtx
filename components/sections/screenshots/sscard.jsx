import Image from "next/image";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
export default function sscard({ src, playerName, date, time, map }) {
    return (
        <>
            <div className='bg-black bg-opacity-50 p-1 border rounded-md hover:shadow-md hover:scale-95 transform duration-200 cursor-pointer backdrop-filter backdrop-blur-md'>
                <div>
                    <Zoom transitionDuration={300}>
                        <Image src={src} layout='intrinsic' alt={src} width={960} height={540}/>
                    </Zoom>
                </div>
                <div className='text-md break text-center'>
                    <p><span className='text-yellow-400'> Player Name : </span> <span className='text-white font-sans font-bold'>{playerName}</span></p>
                    <p><span className='text-yellow-400'> Date : </span> <span className='text-white font-sans font-bold'>{date}</span></p>
                    <p><span className='text-yellow-400'> Time : </span> <span className='text-white font-sans font-bold'>{time}</span></p>
                    <p><span className='text-yellow-400'> Map : </span> <span className='text-white font-sans font-bold'>{map}</span></p>
                </div>
            </div>



        </>

    )
};
