import Aboutcard from "../../components/aboutcard";
import Image from 'next/image'
export default function about(params) {
    return (
        <>
            <section className='p-2'>
                {/* Page title */}
                <div className='w-full text-center text-2xl backdrop-blur-lg bg-black p-5 text-white bg-opacity-40 mb-2'>
                <h1 className='text-center'><Image src="/icons/about_w.svg" alt="" width={20} height={20}/> About</h1>
                </div>

                {/* About card */}
                <div className='flex justify-center'>
                    <Aboutcard />
                </div>
            </section>
        </>
    )
};
