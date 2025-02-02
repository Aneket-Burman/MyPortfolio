const FullStackProjectsSection = () => {
    return (
        <section id="full-stack-projects" className="flex flex-col items-start justify-start w-full min-h-screen p-10 pl-16 mt-6 rounded-md">
            <h2 className="mb-8 font-bold text-7xl">Third Year</h2>
            <p className="mb-12 text-4xl">Made Full Stack Projects</p>

            {/* First Row: SIH 2024 Project */}
            <div className="flex w-full gap-8 mb-8">
                
                {/* SIH 2024 Project - Navix */}
                <div className="flex flex-col w-1/2 h-[600px] bg-black p-6 rounded-lg shadow-lg">
                    <div className="h-[80%] w-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
                        <a href="https://github.com/Aneket-Burman/SIH-2024" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="../../src/assets/Navix.png" 
                                alt="SIH 2024 Project - Navix" 
                                className="w-full h-full object-cover rounded-lg aspect-[16/9] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                            />
                        </a>
                    </div>
                    <div className="h-[20%] bg-black mt-4 rounded-lg flex items-center justify-center text-2xl font-semibold text-white p-3 text-center">
                        SIH 2024 Project - Navix: An optimized ship routing solution.
                    </div>
                </div>

                {/* Empty Flexbox (For Future Use) */}
                <div className="flex flex-col w-1/2 h-[600px] bg-black p-6 rounded-lg shadow-lg"></div>

            </div>
        </section>
    );
};

export default FullStackProjectsSection;
