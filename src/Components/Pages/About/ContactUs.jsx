

const ContactUs = () => {
    return (
        <div>
            <div className="mt-8">
          <h2 className="text-4xl text-center font-bold text-green-600 mb-8">Contact Form</h2>
          <p className="text-center mb-8 font-bold text-blue-600 italic text-xl">If you have any questions, feedback, or need assistance, please feel free to reach out to  us.</p>
          
        </div>

        <div className="flex justify-center">
        <div className="shadow-xl border border-blue-600 p-5 w-[450px] rounded-lg text-center ">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Contact Information</h2>
          
          <div className="font-bold mb-3">
            <h3>Phone Numbers: 0171111000</h3>
            <p>Main Office: Mirpur-2, Dhaka-1216</p>
            <p>Customer Support: +1 (987) 654-3210</p>
          </div>

          <div className="font-bold mb-3">
            <h3 className="text-xl">Email Addresses:</h3>
            <p>General Inquiries: info@bookmyhotel.com</p>
            <p>Customer Support: support@bookmyhotel.com</p>
          </div>

          <div className="font-bold">
            <h3 className="text-xl">Physical Address:</h3>
            <p>1216 Hotel Street</p>
            <p>Dhaka, State 1216</p>
            <p>Bangladesh</p>
          </div>
        </div>
        </div>
       
        </div>
    );
};

export default ContactUs;