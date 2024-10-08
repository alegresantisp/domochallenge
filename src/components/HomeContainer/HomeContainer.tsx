'use client'
import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader'; 
import NavBar from '../NavBar/NavBar';
import GridContainer from '../GridContainer/GridContainer';
import Footer from '../Footer/Footer';

const HomeContainer = () => {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false); 
    }, 3000); 
  }, []);

  return (
    <>
     
      {isLoading ? (
        
        <Loader /> 
      ) : (
        <div>
          <NavBar/>
          <GridContainer/>
          <Footer/>
        </div>
      )}
    </>
  );
};

export default HomeContainer;