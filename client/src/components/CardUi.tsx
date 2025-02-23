import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FaShare } from 'react-icons/fa';
import { BsSave2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import { addToSaved } from '../rtk/SavedCardsSlice'; // Import the action

interface CardProps {
  card: {
    id: number;
    title: string;
    Venue: string;
    description: string;
    imgurl: string;
    date: string;
    time: string;
  };
  id: number;
}

export default function CardUi({ card, id }: CardProps) {

  return (
    <div className="max-w-xs  rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1  ">
      <Link to={`/card/${id}`}>
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src={card?.imgurl}
          alt="Card Image"
        />
      </Link>

      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <div className="font-bold text-xl text-gray-800">{card?.title}</div>
          <div className="text-sm text-gray-600">{card?.date}</div>
        </div>
        <p className="text-gray-700 text-base mb-4">{card?.description}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-600">{card?.Venue}</div>
          <div className="text-sm text-gray-600">{card?.time}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <AiFillLike className="text-red-500 hover:text-red-700 cursor-pointer" size={20} />
            </div>
            <div className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <FaShare className="text-red-500 hover:text-red-700 cursor-pointer" size={20} />
            </div>
            {/* <div className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <BsSave2 className="text-red-500 hover:text-red-700 cursor-pointer" size={20} onClick={()=>handleSave(card)} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}