import Link from "next/link"
import { FaUserAltSlash } from "react-icons/fa";

const NoUser = ()=>{
    return(
        <div className="h-dvh w-full flex items-center justify-center flex-col px-4 lg:gap-4 gap-2">
            <FaUserAltSlash
            className="w-[40rem] h-20 lg:h-32  dark:text-white"
            />
            <p className="dark:text-white text-justify sm:text-xl ">Untuk menggunakan fitur ini, Anda perlu masuk ke dalam akun TKJ 2 dan melakukan login.</p>
            <Link href='/login' className="text-second underline sm:text-2xl">Masuk</Link>
        </div>
    )
}

export default NoUser