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
        <div style = {divStyles} >
          <p>@AkiliGroup2023</p> 
          <p>Bienvenu Mwenyemali</p>
        </div>
      )
    }
    

export default Footer
