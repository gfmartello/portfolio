import React from 'react';
import portrait from '../assets/portrait.jpg'
import './Page.scss'

const Page = () => {
  return (
    <section className='home'>
      <h1>Web Developer</h1>
      <img className='home__img' src={portrait}/>
    </section>
  );
};

export default Page;