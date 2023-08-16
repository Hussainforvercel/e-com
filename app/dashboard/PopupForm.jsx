import React, { useState } from 'react';
import New from './productForm';

const PopupButton = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={toggleForm} 
      >
        Add Product
      </button>
      {isFormVisible && <New />}
    </div>
  );
};

export default PopupButton;
