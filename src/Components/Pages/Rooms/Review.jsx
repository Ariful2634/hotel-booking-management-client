/* eslint-disable react/prop-types */
import { AiTwotoneStar } from 'react-icons/ai';

const Review = ({rev}) => {
    console.log(rev)
    return (
        <div className='flex justify-center'>
            <div >
                    
                    <div className="shadow-xl p-8 space-y-4 lg:w-[500px] rounded-lg">
                        <h2 className="font-bold text-xl"> <span className="text-blue-600">Name: </span> {rev?.name}</h2>
                        <p className="font-bold text-xl flex items-center gap-1"><span className="text-blue-600">Rating: </span>    {rev?.rating}<AiTwotoneStar></AiTwotoneStar></p>
                        <p className="font-bold text-xl text-green-600">{rev?.des}</p>
                        <p className="font-bold text-xl">{rev?.time}</p>
                    </div>
                </div>
        </div>
    );
};

export default Review;