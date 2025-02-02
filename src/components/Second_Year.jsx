const SecondYearSection = () => {
    return (
        <section id="second-year" className="flex flex-col items-start justify-start w-full min-h-screen p-10 pl-16 mt-6 rounded-md">
            <h2 className="mb-8 font-bold text-7xl">Second Year</h2>
            <p className="mb-12 text-4xl">Started my Full Stack Web Dev Journey</p>

            {/* First Row: Simon Says & Drum Kit */}
            <div className="flex w-full gap-8 mb-8">
                
                {/* Simon Says Game */}
                <div className="flex flex-col w-1/2 h-[600px] bg-black p-6 rounded-lg shadow-lg">
                    <div className="h-[80%] w-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
                        <a href="https://aneket-burman.github.io/simon-says/" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="./src/assets/Simon_Says.png" 
                                alt="Simon Says Game" 
                                className="w-full h-full object-cover rounded-lg aspect-[16/9] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                            />
                        </a>
                    </div>
                    <div className="h-[20%] bg-black mt-4 rounded-lg flex items-center justify-center text-2xl font-semibold text-white p-3 text-center">
                        Built Simon Says Game using JavaScript, improving my DOM & event handling skills.
                    </div>
                </div>

                {/* Drum Kit */}
                <div className="flex flex-col w-1/2 h-[600px] bg-black p-6 rounded-lg shadow-lg">
                    <div className="h-[80%] w-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
                        <a href="https://aneket-burman.github.io/drum-kit/" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="./src/assets/Drum_Kit.png" 
                                alt="Drum Kit Game" 
                                className="w-full h-full object-cover rounded-lg aspect-[16/9] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                            />
                        </a>
                    </div>
                    <div className="h-[20%] bg-black mt-4 rounded-lg flex items-center justify-center text-2xl font-semibold text-white p-3 text-center">
                        Created a Drum Kit using JavaScript - Play sounds by clicking or pressing keys!
                    </div>
                </div>

            </div>

            {/* Second Row: LeetCode & Angela Yu Course */}
            <div className="flex w-full gap-8">
                
                {/* LeetCode */}
                <div className="flex flex-col w-1/2 h-[600px] bg-black p-6 rounded-lg shadow-lg">
                    <div className="h-[80%] w-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
                        <a href="https://leetcode.com/u/Aneket_Burman/" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="./src/assets/LC_Profile.png" 
                                alt="LeetCode DSA" 
                                className="w-full h-full object-cover rounded-lg aspect-[16/9] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                            />
                        </a>
                    </div>
                    <div className="h-[20%] bg-black mt-4 rounded-lg flex items-center justify-center text-2xl font-semibold text-white p-3 text-center">
                        Started solving DSA problems on LeetCode, sharpening my problem-solving skills.
                    </div>
                </div>

                {/* Angela Yu Web Dev Course */}
                <div className="flex flex-col w-1/2 h-[600px] bg-black p-6 rounded-lg shadow-lg">
                    <div className="h-[80%] w-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
                        <a href="https://www.udemy.com/certificate/UC-94a554ab-cc8e-4612-b8cc-c2a1205a0229/" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="./src/assets/angela_yu.png" 
                                alt="Angela Yu Web Dev Course" 
                                className="w-full h-full object-cover rounded-lg aspect-[16/9] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                            />
                        </a>
                    </div>
                    <div className="h-[20%] bg-black mt-4 rounded-lg flex items-center justify-center text-2xl font-semibold text-white p-3 text-center">
                        Completed Angela Yu’s Web Dev Bootcamp, mastering HTML, CSS, JS, and backend development.
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SecondYearSection;
