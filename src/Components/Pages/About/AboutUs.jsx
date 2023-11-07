import { Helmet } from "react-helmet";


const AboutUs = () => {
    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us</title>
                <link rel="canonical" href="http://localhost:5173/about" />
            </Helmet>

            <h1 className="font-bold text-purple-600 text-4xl text-center mb-4">About Us</h1>
            <div className="shadow-xl p-8 rounded-lg border border-blue-600">
                <h2 className="font-bold text-blue-600 text-2xl text-center mb-4">Our Story</h2>
                <p className="font-bold"> Book My Hotel was founded in 2020 with the mission of simplifying and enhancing the hotel booking experience. Our journey started with a vision to provide travelers with a seamless, user-friendly platform to find and book their dream accommodations.</p>
                <p className="font-bold">Over the years, we have evolved and grown, connecting millions of travelers with the perfect hotels and rooms. We are committed to ensuring that your travel experiences are memorable and hassle-free.</p>
            </div>
            <div className="shadow-xl p-8 mt-6 rounded-lg border border-green-600">
                <h2 className="font-bold text-green-600 text-2xl text-center mb-4">Our Mission and Values</h2>
                <p className="font-bold"> Our mission is to empower travelers with the freedom to explore the world by providing a wide range of hotel options at the best prices, combined with a commitment to exceptional customer service. Our core values include: </p>
                <ul className="font-semibold mt-2">
                    <li>Customer-Centric: We put our customers first, striving to exceed their expectations.</li>
                    <li>Transparency: We believe in transparent and fair business practices.</li>
                    <li>Innovation: We continuously innovate to enhance the booking experience.</li>
                    <li>Teamwork: Our team collaborates to achieve our goals and serve our customers better.</li>
                </ul>
            </div>
            <div className="shadow-xl p-8 mt-6 rounded-lg border border-purple-600">
                <h2 className="font-bold text-purple-600 text-2xl text-center mb-4">Our Team and Management</h2>
                <p className="font-bold"> Book My Hotel is powered by a dedicated team of professionals who are passionate about travel and technology. Meet some of our key team members and management:</p>
                <div >
                    <div className="flex justify-around mt-4 mb-4 font-semibold">
                        <div >
                            <h3>Md. Ariful Islam</h3>
                            <p>CEO and Founder</p>
                        </div>

                        <div>
                            <h3>Md. Shariful Islam</h3>
                            <p>Manager</p>
                        </div>

                    </div>
                    <div className="flex justify-around mt-4 mb-4 font-semibold mr-4">
                        <div>
                            <h3>Md. Arif Islam</h3>
                            <p>Receptionist</p>
                        </div>
                        <div>
                            <h3>Md. Asif Islam</h3>
                            <p>Staff</p>
                        </div>

                    </div>
                    <div className="flex justify-around mt-4 mb-4 font-semibold mr-2">

                        <div>
                            <h3>Md. Sobuj Islam</h3>
                            <p>Staff</p>
                        </div>
                        <div>
                            <h3>Md. Salam Islam</h3>
                            <p>Staff</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;