import React from "react"

export const ContactSection = () => {
    return (
        <div id="webcrumbs">
            <div className="w-full bg-black text-white font-sans">
               

                <section className="py-16 px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-5xl font-bold mb-6">
                                Get in{" "}
                                <span className="bg-gradient-to-r from-purple-500 to-yellow-400 bg-clip-text text-transparent">
                                    Touch
                                </span>
                            </h2>
                            <p className="text-gray-300 mb-8 text-lg">
                                Ready to transform your digital presence? Our team of marketing experts is here to help
                                you achieve your business goals.
                            </p>

                            <div className="flex items-center mb-6 group">
                                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4 group-hover:bg-purple-900 transition-colors duration-300">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Our Location</h3>
                                    <p className="text-gray-400">123 Digital Avenue, Tech City, TC 10101</p>
                                </div>
                            </div>

                            <div className="flex items-center mb-6 group">
                                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4 group-hover:bg-purple-900 transition-colors duration-300">
                                    <span className="material-symbols-outlined">email</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Email Us</h3>
                                    <p className="text-gray-400">contact@clickalchemy.com</p>
                                </div>
                            </div>

                            <div className="flex items-center mb-10 group">
                                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4 group-hover:bg-purple-900 transition-colors duration-300">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Call Us</h3>
                                    <p className="text-gray-400">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <a
                                    href="https://webcrumbs.cloud/placeholder"
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a
                                    href="https://webcrumbs.cloud/placeholder"
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a
                                    href="https://webcrumbs.cloud/placeholder"
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-all duration-300 transform hover:scale-110"
                                >
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a
                                    href="https://webcrumbs.cloud/placeholder"
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-xl p-8 shadow-lg shadow-purple-900/20">
                            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="John Doe"
                                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        placeholder="How can we help you?"
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                                    />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        placeholder="Tell us about your project or inquiry..."
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                                    ></textarea>
                                </div>

                                

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

               


            </div>
        </div>
    )
}
export default ContactSection;
