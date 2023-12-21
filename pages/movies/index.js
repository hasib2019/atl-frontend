// pages/movies/index.js
import { useState } from 'react';

export default function Movies() {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    // Add logic to send the rating to the backend
    console.log('Submit Rating:', rating);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="mb-4 text-4xl font-bold">Movie Ratings</h1>
      <form onSubmit={handleRatingSubmit}>
        <label className="block mb-2">Rate the Movie:</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={handleRatingChange}
          className="p-2 mb-4 border"
        />
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md">
          Submit Rating
        </button>
      </form>
    </div>
  );
}
