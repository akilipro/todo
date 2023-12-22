import React from 'react'

const Footer = () => {
    const divStyles = {
        color: 'white',
        fontSize: '16px',
        backgroundColor: 'gray',
        padding: '20px',
        borderRadius: '5px',
        display : 'flex',
        justifyContent: 'space-between',
    };
    
      return (
        <div className="bg-gray-200 p-4">
        <p className="text-gray-600">@AkiliGroup2023</p>
        <p className="text-gray-600">Bienvenu Mwenyemali</p>
      </div>
    );
    }
    

export default Footer
