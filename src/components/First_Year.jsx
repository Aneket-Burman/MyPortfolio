const FirstYearSection = () => {
    return (
        <section id="first-year" className="flex flex-col items-start justify-start w-full min-h-screen p-10 pl-16 mb-10 bg-black rounded-md">
            <h2 className="mb-6 text-6xl font-bold text-white">First Year</h2>
            <p className="mb-12 text-3xl text-white">Details about my first-year experiences and projects.</p>

            {/* Two Flexboxes in a Row */}
            <div className="flex w-full space-x-8">
                
                {/* First Flexbox (Travel Website) */}
                <div className="flex flex-col w-1/2 h-[600px] bg-black p-6 rounded-lg shadow-lg">
                    <div className="h-[75%] w-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
                        <a href="https://aneket-burman.github.io/AP_PROJECT/" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="public/src/assets/travel_website.png" 
                                alt="Travel Website" 
                                className="w-full h-full object-cover rounded-lg aspect-[4/3] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                            />
                        </a>
                    </div>
                    <div className="h-[25%] bg-black mt-4 rounded-lg flex items-center justify-center text-xl font-semibold text-white p-3 text-center">
                        A travel website I built in 2nd semester, marking my journey into web development.
                    </div>
                </div>

                {/* Second Flexbox (LinkedIn Post) */}
                <div className="flex flex-col w-1/2 h-[600px] bg-black p-6 rounded-lg shadow-lg">
                    <div className="h-[75%] w-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
                        <a href="https://www.linkedin.com/posts/aneket-burman_codechef-achievementunlocked-coding-activity-7062353621148930048-OJxM?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="public/src/assets/linkedin_post.png" 
                                alt="2-Star CodeChef Achievement" 
                                className="w-full h-full object-cover rounded-lg aspect-[4/3] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                            />
                        </a>
                    </div>
                    <div className="h-[25%] bg-black mt-4 rounded-lg flex items-center justify-center text-xl font-semibold text-white p-3 text-center">
                        Achieved 2-Star Coder on CodeChef during my first year. Check out my LinkedIn post!
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FirstYearSection;
