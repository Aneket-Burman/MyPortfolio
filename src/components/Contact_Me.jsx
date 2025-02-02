const ContactMeSection = () => {
    return (
        <section id="contact-me" className="flex flex-col items-center justify-center w-full min-h-screen p-10 text-white bg-black">
            <h2 className="mb-8 font-bold text-7xl">Contact Me</h2>
            <p className="mb-12 text-3xl">I&apos;d love to hear from you!</p>

            {/* Contact Form Container */}
            <div className="w-[50%] p-8 bg-gray-900 rounded-2xl shadow-lg">
                <form 
                    action="https://formsubmit.co/burmananeket2654@gmail.com" 
                    method="POST"
                    className="flex flex-col"
                >
                    {/* Email Input */}
                    <label htmlFor="email" className="mb-2 text-xl font-semibold">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        className="p-3 mb-6 text-black bg-gray-200 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                    />

                    {/* Message Input */}
                    <label htmlFor="message" className="mb-2 text-xl font-semibold">Message:</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required
                        className="h-32 p-3 mb-6 text-black bg-gray-200 border border-blue-500 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your message here..."
                    ></textarea>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="p-3 text-lg font-semibold text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-700"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactMeSection;
