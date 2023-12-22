import React from 'react';

const Header = () => {
  return (
    <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
      <img src="./logoblanc.png" alt="logo" className="h-12 w-12" />
      <div>
        <p className="text-lg font-bold">TO DO LIST</p>
        <p>Akili Group</p>
      </div>
    </div>
  );
};

export default Header;
