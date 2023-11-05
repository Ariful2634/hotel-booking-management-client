
import logo from '../Banner../../../Home../../../Pages../../../assets/login.svg'
import Swal from "sweetalert2";


const NewsLetter = () => {



    const handleClick = e => {
        e.preventDefault()
        const email = e.target.email.value;
        console.log(email)
        Swal.fire(
            'Congratulations',
            'You Successfully subscribed on monthly newsletter!',
            'success'
          )

    }

    return (
        <div className="flex justify-center">
            <div className="w-[450px] shadow-xl  mt-16 rounded-lg ">
                <div className="py-10 md:py-14 px-8 color-charcoalGrey">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-5 text-center">Stay updated!</h1>
                    <p className="max-w-[380px] mb-5 text-blue-600 font-bold">
                        More than 2000+ people receiving monthly updates on:
                    </p>

                    <div className="flex items-center gap-4 mb-4">
                        <img className="h-[200px]" src={logo} alt="logo" />
                        <p className="font-bold text-green-600">Subscribe our newsletter for monthly update </p>
                    </div>

                    <form onSubmit={handleClick}>
                        <div className=" form-control" >
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" placeholder="Enter Your Email" name="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button
                                
                                className=" text-white font-[700] rounded-lg py-4 px-6 w-full bg-gradient-to-r from-pink-500 to-yellow-500 "
                            >
                                Subscribe to monthly newsletter
                            </button>
                        </div>
                    </form>


                </div>

            </div>
        </div>
    );
};

export default NewsLetter;