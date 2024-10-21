import LogoWhite from "../../../assets/image/logoCodemeIOWhite.png";


const Header = () => {
    return (
        <div className="top py-3 px-5 bgDarkMode flex items-center justify-between gap-5 static xl:fixed top-0 left-[300px] right-0 z-50 xl:h-16 shadow-sm" id="header">
            <a className="flex items-center gap-2 lg:hidden" href="/">
                <div className="bg-primary p-3 rounded-full size-10 flex-shrink-0">
                    <img alt="Codeme-IO" loading="lazy" width={48} height={48} decoding="async" data-nimg="1" className="object-contain max-h-full max-w-full" style={{ color: "transparent" }} srcSet={LogoWhite} src={LogoWhite} />
                </div>
                <span className="text-lg font-bold">Codeme-IO</span>
            </a>
            <div className="rounded-full gap-4 h-10 px-5 bgDarkMode w-[min(100%,390px)] items-center lg:flex hidden borderDarkMode">
                <input type="text" placeholder="Search..." className="bg-transparent w-full text-sm dark:text-white" />
                <button className="text-grayb2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="size-6"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className="flex items-center gap-3">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50 size-10 dark:bg-grayDarker dark:border-white dark:border-opacity-10" type="button" id="radix-:Renphja:" aria-invalid="menu" aria-expanded="false" data-state="closed">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        ></path>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.752 15.002A9.72 9.72 0 0118 15.75 9.75 9.75 0 018.25 6c0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25 9.75 9.75 0 0012.75 21a9.753 9.753 0 009.002-5.998z"
                        ></path>
                    </svg>
                    <span className="sr-only">Toggle theme</span>
                </button>
                <a className="py-3 flex items-center justify-center gap-2 lg:px-5 size-10 lg:w-auto rounded-lg bg-primary text-white font-semibold" href="/sign-up">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="size-6"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                        </svg>
                    </span>
                    <span className="hidden lg:inline">Đăng nhập</span>
                </a>
            </div>
        </div>
    )
}

export default Header;