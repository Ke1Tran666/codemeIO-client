import LogoWhite from "../../../assets/image/logoCodemeIOWhite.png";

const Navbar = () => {
    return (
        <aside className="fixed top-0 left-0 pb-8 px-5 hidden xl:block bgDarkMode bottom-0 w-[300px] z-50 sidebar border-r border-gray-200 dark:border-opacity-10">
            <a className="flex items-center gap-2 py-3 mb-5 h-20" href="/">
                <div className="bg-primary p-3 rounded-full size-10 flex-shrink-0">
                    <img alt="Codeme-IO" loading="lazy" width={48} height={48} decoding="async" data-nimg="1" className="max-h-full max-w-full object-contain" style={{ color: "transparent" }} srcSet={LogoWhite} src={LogoWhite} />
                </div>
                <span className="text-xl font-bold">Codeme-IO</span>
            </a>
            <ul className="flex flex-col gap-3">
                <li>
                    <a className="flex items-center gap-3 py-2.5 px-3 rounded-lg transition-all font-medium text-gray70 dark:text-slate-500 hover:bg-opacity-10 hover:bg-primary hover:text-primary dark:hover:text-primary" href="/">
                        <div className="size-5 flex items-center justify-center">
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
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                                ></path>
                            </svg>
                        </div>
                        <span>Khám phá</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center gap-3 py-2.5 px-3 rounded-lg transition-all font-medium text-gray70 dark:text-slate-500 hover:bg-opacity-10 hover:bg-primary hover:text-primary dark:hover:text-primary" href="/study">
                        <div className="size-5 flex items-center justify-center">
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
                                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                                ></path>
                            </svg>
                        </div>
                        <span>Khu vực học tập</span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Navbar;