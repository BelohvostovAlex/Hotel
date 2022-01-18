import React from 'react';

import { Banner } from '../components/Banner';
import { Hero } from '../components/Hero';
import { Button } from '../components/Button';
import { Services } from '../components/Services';

import {useAction} from '../hooks/useAction'
import { useSelector } from 'react-redux';

export const Home = () => {
  const {fetchRooms} = useAction()
 
  React.useEffect(() => {
    fetchRooms()
  }, [])

  const {rooms} = useSelector(state => state.roomsReducer)
  console.log(rooms)
  
  
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title={'Luxurious rooms'} subtitle={'Deluxe rooms starting from $199'}>
          <Button btnClass="btn-primary" toPath="/rooms/" btnText="check rooms" />
        </Banner>
      </Hero>
      <Services />
    </>
  );
};
