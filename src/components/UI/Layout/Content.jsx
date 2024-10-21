const Content = () => {
    return (
        <section className="px-5 lg:px-8 pb-5 lg:pb-10">
            <h1 className="text-2xl lg:text-3xl font-extrabold mb-8">Khám phá</h1>
            <div className="grid xl:grid-cols-3 2xl:grid-cols-4 xl:gap-8 courseSlider">
                <div className=" bg-white rounded-lg dark:bg-grayDark flex flex-col hover:shadow-sm transition-all relative borderDarkMode">
                    <a className="absolute inset-0 z-10" href="/"></a>
                    <div className="relative h-[180px] block group rounded-lg">
                        <img />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                        <h3 className="text-lg lg:text-xl font-bold mb-5 line-clamp-3 block">Minh hoạ vector bằng Adobe Illustrator cùng Rachelizmarvel</h3>
                        <div className="mt-auto">
                            <div className="flex items-center gap-3 mb-5 justify-between">
                                <div className="flex items-center gap-3 text-xs lg:text-sm font-medium text-gray-500 dark:text-white dark:text-opacity-60">
                                    <div className="flex items-center gap-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content;