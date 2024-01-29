import React from 'react';

interface RatingProps {
  averageRating: number;
}

export const StarRating: React.FC<RatingProps> = ({ averageRating }) => {

  // if(averageRating <= 0){
  //   return null;
  // }
  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating % 1 !== 0;

  const starsArray = [];

  const renderStar = (type: string, index: number) => (
    <span
      key={index}
      className={`text-3xl ${type === 'full' ? 'text-yellow-800 text-lg' : 'text-gray-300 text-lg'}`}
    >
      {type === 'full' ? '★' : '☆'}
    </span>
  );

  // Render full stars
  for (let i = 0; i < fullStars; i++) {
    starsArray.push(renderStar('full', i));
  }

  // Render half star
  if (hasHalfStar) {
    starsArray.push(renderStar('half', 5));
  }

  // Render remaining empty stars
  for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
    starsArray.push(renderStar('empty',i));
  }

  return <div className="flex">{starsArray}</div>;
};