import Link from "next/link";

export default function aboutcard() {
    return(
        <>
            <div className='bg-white p-4 rounded-md text-center shadow-lg w-6/12'>
                <h1 className='text-2xl'>Join with MATRIX clan today !</h1>
                   <div>
                       <h1 className='text-yellow-400'>LINKS</h1>
                       <div>MATRIX TDM - <Link href='cod4://45.32.113.186:28960'><a className='text-yellow-400'>JOIN</a></Link></div>
                       <div>MATRIX SnD - <Link href='cod4://45.32.113.186:28962'><a className='text-yellow-400'>JOIN</a></Link></div>
                       <div>MATRIX Discord - <Link href='https://discord.gg/mgfvPfEB'><a className='text-yellow-400'>JOIN</a></Link></div>
                       <div>MATRIX WhatsApp - <Link href='https://chat.whatsapp.com/Eb4kituMzXPHmuqmTQ5pBc'><a className='text-yellow-400'>JOIN</a></Link></div>
                       <h1 className='text-yellow-400'>Board of MTX</h1>
                       <div>Be cool sl <span className='bg-yellow-400'>[Head]</span>- <Link href='https://www.facebook.com/tharakasampath'><a className='text-yellow-400'>Contact</a></Link></div>
                       <div>Eden&apos;s Gate <span className='bg-yellow-400'>[WebDev]</span>- <Link href='https://www.facebook.com/nirvanzentinal'><a className='text-yellow-400'>Contact</a></Link></div>
                       <div>SLDS Ghost <span className='bg-yellow-400'>[Dev]</span>- <Link href='https://www.facebook.com/'><a className='text-yellow-400'>Contact</a></Link></div>
                       <div>Demon Gayya <span className='bg-yellow-400'>[Dev]</span>- <Link href='https://www.facebook.com/'><a className='text-yellow-400'>Contact</a></Link></div>
                       <div>Grama Sewaka <span className='bg-yellow-400'>[Admin]</span>- <Link href='https://www.facebook.com/'><a className='text-yellow-400'>Contact</a></Link></div>
                   </div>
            </div>
        </>
    )
};
