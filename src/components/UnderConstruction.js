import React from 'react';
import { MdOutlineConstruction } from "react-icons/md";

const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <MdOutlineConstruction style={{ fontSize: '100px', color: '#f1c40f' }} />
      <h1 style={{ marginTop: '20px' }}>Under Construction</h1>
      <p>We're working hard to bring you something amazing. Please check back soon!</p>
    </div>
  );
};

export default UnderConstruction;
