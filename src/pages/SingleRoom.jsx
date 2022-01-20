import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Hero } from '../components/Hero';
import { Banner } from '../components/Banner';
import { useSelector } from 'react-redux';

export const SingleRoom = () => {
  const params = useParams();
  const { rooms } = useSelector((state) => state.roomsReducer);
  const room = rooms.find(item => item.slug === params.slug)
  console.log(params)

  return (
      room ? 
    <Hero hero="roomsHero">
      <Banner title={`${room.name} room`}>
        <Button btnClass="btn-primary" toPath="/rooms" btnText="back to rooms" />
      </Banner>
    </Hero>
    :       <Hero hero="roomsHero">
    <Banner title={'Whoops'} subtitle={'No such rooms'}>
      <Button btnClass="btn-primary" toPath="/rooms" btnText="back to rooms" />
    </Banner>
  </Hero>

    
  );
};
