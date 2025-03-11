import React from 'react';
import { Star } from 'lucide-react';

// Props for the Rating component
interface RatingProps {
    rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Star 
                    key={i} 
                    size={14}
                    fill={i <= rating ? '#3B82F6' : 'none'}
                    className={i <= rating ? 'text-custom-blue' : 'text-gray-300'}
                />
            );
        }
        return stars;
    };

    return (
        <div 
            className="flex"
            style={{
                width: '43.08px',
                height: '7px'
            }}
        >
            {renderStars(rating)}
        </div>
    );
};

export default Rating;