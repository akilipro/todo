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
    <div className='flex justify-between p-2 border-b-2'>
      <img src="./logoblanc.png" alt="logo" height="50" width="50"/>
      <p>TO DO LIST</p> 
      <p>Akili Group</p>
    </div>
  )
}

export default Header
