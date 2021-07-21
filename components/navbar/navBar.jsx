import Link from "next/link";
import ButtonsList from "./buttons";
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import Image from "next/image";
export default function navBar() {

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-white p-4 sticky top-0 shadow-lg pb-2 z-10">
                {/* Left */}
                <div className="flex items-center flex-shrink-0 text-black">
                    <Link href='/'><a className="font-semibold text-xl tracking-tight">Matrix</a></Link>
                </div>
                {/* Center */}
                <ul className="hidden md:flex text-center ">
                    <ButtonsList src='/icons/launch.svg' link='cod4://45.32.113.186:28960' tooltip='Launch' />
                    <ButtonsList src='/icons/ss.svg' link='/screen/screenshots' tooltip='Screenshots' />
                    <ButtonsList src='/icons/ban.svg' link='/screen/banandkick' tooltip='Ban And Kick' />
                    <ButtonsList src='/icons/top.svg' link='/screen/topplayers' tooltip='Top Players' />
                    <ButtonsList src='/icons/admin.svg' link='/screen/adminpanel' tooltip='Admin' />
                    <ButtonsList src='/icons/discord.svg' link=' https://discord.gg/mgfvPfEB' tooltip='Discord' />
                    <ButtonsList src='/icons/about.svg' link='/screen/about' tooltip='About' />
                </ul>
                {/* Dropdown */}
                <div className='text-left md:hidden inline-block relative m-0'>
                    <Menu menuButton={<MenuButton><div className='flex'><Image src="/icons/menu.svg" alt="" width={8} height={8} className='pr-2'/> Menu </div></MenuButton>}>
                        <MenuItem><Link href='cod4://45.32.113.186:28960'></Link><Image src='/icons/launch.svg' alt=""  width={8} height={8} className='pr-2' /> Launch </MenuItem>
                        <MenuItem><Link href='/screen/screenshots'></Link><Image src='/icons/ss.svg' alt="" width={8} height={8} className='pr-2'  /> Screenshots</MenuItem>
                        <MenuItem><Link href='/screen/banandkick'></Link><Image src='/icons/ban.svg' alt="" width={8} height={8} className='pr-2' /> Ban  and kick</MenuItem>
                        <MenuItem><Link href='/screen/topplayers'></Link><Image src='/icons/top.svg' alt="" width={8} height={8} className='pr-2' />  Top players</MenuItem>
                        <MenuItem><Link href='/screen/adminpanel'></Link><Image src='/icons/admin.svg' alt=""  width={8} height={8} className='pr-2' /> Admin</MenuItem>
                        <MenuItem><Link href='https://discord.gg/mgfvPfEB'></Link><Image src='/icons/discord.svg' alt=""  width={8} height={8} className='pr-2' /> Discord</MenuItem>
                        <MenuItem><Link href='/screen/about'></Link><Image src='/icons/about.svg' alt=""  width={8} height={8} className='pr-2' /> About</MenuItem>
                    </Menu>
                </div>
                {/* Right */}
                <div>
                    <Link href='/screen/auth'><a><Image src="/icons/auth.svg" alt="" width={20} height={20} /></a></Link>
                </div>
            </nav>
        </>
    )
};
