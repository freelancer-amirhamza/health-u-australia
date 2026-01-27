"use client"
import React from 'react'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

interface StarRatingProps {
    rating: number
    handleRatingChange?: (rating: number) => void
}

const StarRating = ({ rating, handleRatingChange }: StarRatingProps) => {
    return (
        <div className='flex'>
            {[1, 2, 3, 4, 5].map((star) => (
                <button key={star}
                    onClick={handleRatingChange ? () => handleRatingChange(star) : undefined}
                    className="border-none p-0.5 rounded-full transition-colors duration-100 focus:outline-none  ">
                    {star <= rating ? (
                        <IoIosStar className='text-secondary h-5 w-5 cursor-pointer' />
                    ) : (
                        <IoIosStarOutline className='text-secondary h-5 w-5 cursor-pointer' />
                    )}
                </button>
            ))}
        </div>
    )
}

export default StarRating