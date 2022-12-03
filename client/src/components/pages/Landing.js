import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    document.title = 'PJM';
  }, []);

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <nav className='top'>
        <h2><i class="fa-solid fa-list-check"></i> Project Management System</h2>
        <div>
          <Button color='inherit' href='/login'>
            Login
          </Button>
          <Button variant='contained' href='/register'>
            Sign Up
          </Button>
        </div>
      </nav>
      <div className='landing-inner'>
        <h1>Project Management System</h1>
        <div className='buttons'>
          <Button variant='outlined' color='inherit' href='/register'>
            <div style={{fontSize:25}}>
              <i style={{padding:10}} class="fa-solid fa-user-plus"></i>
               Sign Up
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
