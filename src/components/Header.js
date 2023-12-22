import React from 'react'

const Header = () => {

const divStyles = {
    color: 'blue',
    fontSize: '16px',
    backgroundColor: 'lightgray',
    padding: '20px',
    borderRadius: '5px',
    display : 'flex',
    justifyContent: 'space-between',
};

  return (
    <div className="flex justify-between items-center p-2 border-b-2 bg-white">
      <img src="./logoblanc.png" alt="logo" height="50" width="50" />
      <p className="text-xl font-bold">TO DO LIST</p>
      <p className="text-gray-600">Akili Group</p>
    </div>
  );
}

export default Header
