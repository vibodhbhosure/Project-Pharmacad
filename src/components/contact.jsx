import React from "react";

const Contact = () => {
    return (
        <div className="container mx-auto max-w-screen-xl px-4 py-8">
            <h1 className="text-4xl text-left font-bold mb-2">Contact Us</h1>
            <p className="text-xl text-left font-normal mb-6">- Reach out to us and start your path to success</p>
            <div className="max-w-7xl w-full p-8 rounded shadow-lg md:mx-4 my-4 pb-6">
                <div className="flex flex-col md:flex-row md:space-x-8">
                    {/* Left Side - Contact Form */}

                    <div className="flex-1">
                        {/* Contact Form Content */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name<span className="text-red-500">*</span></label>
                            <input type="text" id="name" className="w-full border-gray-300 border rounded px-3 py-2" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email<span className="text-red-500">*</span></label>
                            <input type="email" id="email" className="w-full border-gray-300 border rounded px-3 py-2" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="mobile" className="block text-gray-700 font-medium mb-1">Mobile<span className="text-red-500">*</span></label>
                            <input type="tel" id="mobile" className="w-full border-gray-300 border rounded px-3 py-2" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="college" className="block text-gray-700 font-medium mb-1">College Name<span className="text-red-500">*</span></label>
                            <input type="text" id="college" className="w-full border-gray-300 border rounded px-3 py-2" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="course" className="block text-gray-700 font-medium mb-1">Course Selected<span className="text-red-500">*</span></label>
                            <select id="course" className="w-full border-gray-300 border rounded px-3 py-2" required>
                                <option value="">Select a course</option>
                                <option value="course1">Course 1</option>
                                <option value="course2">Course 2</option>
                                <option value="course3">Course 3</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                            <textarea id="message" className="w-full border-gray-300 border rounded px-3 py-2"></textarea>
                        </div>
                        <button type="submit" className="bg-indigo-700 text-white py-2 px-4 rounded">Send Message</button>
                    </div>
                    <div className=" bg-[#e8fedb] md:block my-4 flex-1">
                        {/* Map & Address Details Content */}
                        <div className="aspect-w-16 hidden md:block aspect-h-9 mt-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.9691144355859!2d72.84549224184214!3d19.02244342328444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced958713b33%3A0xa2e3acbf46da6c1b!2sShishuvihar%20Madhyamik%20Vidhyala!5e0!3m2!1sen!2sin!4v1686379120146!5m2!1sen!2sin" width="600" height="300" loading="lazy" ></iframe>
                        </div>
                        <div className="text-gray-700">
                            <div className="flex items-center mx-6 mt-4">
                                <ul className="list-disc"><li>
                                <p className="text-gray-600">(+91) 9967 163 961</p></li></ul>
                            </div>

                            <div className="flex items-center mx-6 mt-4 mb-2">
                               
                            <ul className="list-disc"><li>   <p className="text-gray-600">pharmacad.india@gmail.com</p></li></ul>
                                
                            </div>

                            <div className="flex items-center mx-6 mt-4 mb-2">
                            
                            <ul className="list-disc"><li>  <p className="text-gray-600">Shishu Vihar Mandal, High School, opp. King George, near Ruia College, Matunga Central Railway Workshop, Dadar East, Dadar, Mumbai, Maharashtra-400014</p></li></ul>


                            </div>
                            <div className="flex items-center mx-6 mt-4 mb-2">
                        

                            <ul className="list-disc"><li> <p>G.E.I.S,M.H. High school and Junior College,
                                    Shivaji Path, near Talaopali, Naupada, Thane West, Thane, Maharashtra-400601</p></li></ul>


                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Contact;

