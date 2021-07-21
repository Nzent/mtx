import { html } from "gridjs";
import { Grid } from "gridjs-react";
import Image from "next/image";

export default function adminpanel() {
    return (
        <>
            <section className='p-2'>
                {/* Page title */}
                <div className='w-full text-center text-2xl backdrop-blur-lg bg-black p-5 text-white bg-opacity-40'>
                <h1 className='text-center'><Image src="/icons/admin_w.svg" alt="" width={20} height={20}/> Admins</h1>
                </div>

                {/* Table */}
                <div className='overflow-x-scroll'>
                    <Grid
                        columns={['No', 'Country', 'IGN', 'Type', 'ID', 'Skill', 'Last Seen', 'Status']}
                        data={[
                            ['1', 'Sl', 'Be cool sl[100]', html("<div className='text-base bg-red-500'><h1>Super Admin</h1></div>"), '@1235', '2752.2', '07/21/21', html("<h1 className='text-red-400'>Offline</h1>")],
                            ['1', 'Sl', 'Edens Gate[80]', html(`<h1 className='text-base bg-red-500'>Senior Admin</h1>`), '@1235', '2752.2', '07/21/21', html("<h1 className='text-red-400'>Offline</h1>")],
                            ['1', 'Sl', 'Edens Gate[60]', html(`<h1 className='text-base bg-red-500'>Full Admin</h1>`), '@1235', '2752.2', '07/21/21', html("<h1 className='text-red-400'>Offline</h1>")],
                            ['1', 'Sl', 'Edens Gate[40]', html(`<h1 className='text-base bg-red-500'>Admin Admin</h1>`), '@1235', '2752.2', '07/21/21', html("<h1 className='text-red-400'>Offline</h1>")],
                            ['1', 'Sl', 'Edens Gate[20]', html(`<h1 className='text-base bg-red-500'>Moderator Admin</h1>`), '@1235', '2752.2', '07/21/21', html("<h1 className='text-red-400'>Offline</h1>")],
                            ['1', 'Sl', 'Edens Gate[20]', html(`<h1 className='text-base bg-red-500'>Moderator Admin</h1>`), '@1235', '2752.2', '07/21/21', html("<h1 className='text-red-400'>Offline</h1>")],
                        ]}
                        className={{ tr: 'bg-green-500', td: 'font-sans font-bold' }}
                        search={true}
                        pagination={{
                            enabled: true,
                            limit: 100,
                        }}

                    />
                </div>
            </section>
        </>
    )
};
