const Content = () => {
    return (
        <section className="px-5 lg:px-8 pb-5 lg:pb-10">
            <h1 className="text-2xl lg:text-3xl font-extrabold mb-8">Khám phá</h1>
            <div className="grid xl:grid-cols-3 2xl:grid-cols-4 xl:gap-8 courseSlider">
                <div className=" bg-white rounded-lg dark:bg-grayDark flex flex-col hover:shadow-sm transition-all relative borderDarkMode">
                    <a className="absolute inset-0 z-10" href="/"></a>
                    <div className="relative h-[180px] block group rounded-lg">
                        <img width={800} height={600} decoding="async" data-nimg="1" className="w-full h-full object-cover rounded-lg transition-all" src="https://evonhub.dev/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F3779a16e-0a2e-4b74-9dac-bb38a74f5fb3-e841xn.png&w=640&q=75" fetchpriority="high" />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                        <h3 className="text-lg lg:text-xl font-bold mb-5 line-clamp-3 block">Minh hoạ vector bằng Adobe Illustrator cùng Rachelizmarvel</h3>
                        <div className="mt-auto">
                            <div className="flex items-center gap-3 mb-5 justify-between">
                                <div className="flex items-center gap-3 text-xs lg:text-sm font-medium text-gray-500 dark:text-white dark:text-opacity-60">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            className="size-4 stroke-current fill-transparent flex-shrink-0"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                            ></path>
                                        </svg>
                                        <span>5.0</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            className="size-4 stroke-current fill-transparent flex-shrink-0"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            ></path>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            ></path>
                                        </svg>
                                        <span>2851</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="text-sm lg:text-base font-bold text-secondary">499.000</div>
                                    </div>
                                </div>
                            </div>
                            <button className="whitespace-nowrap ring-offset-white focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 py-2 text-white bg-primary button-styles rounded-lg h-10 inline-flex items-center justify-center text-center px-5 font-bold min-w-[120px] transition-all text-sm flex-shrink-0 w-full">Xem chi tiết</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content;