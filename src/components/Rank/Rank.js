import React from "react";

const Rank = ({ name, entries}) => {
  return (
    
    <div className='dfc tc'>
      <div className=' white f3'>
      {`${name} you current rank is...`}
      </div>
      <div className='white f2'>
      {entries}
      </div>
    </div>
  );
}

export default Rank;