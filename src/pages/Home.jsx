import React from 'react';

import { Banner } from '../components/Banner';
import { Hero } from '../components/Hero';
import { Button } from '../components/Button';
import { Services } from '../components/Services';
import { FeaturedRooms } from '../components/FeaturedRooms';

import {useAction} from '../hooks/useAction'

export const Home = () => {
  const {fetchRooms} = useAction()
 
  React.useEffect(() => {
    fetchRooms()
  }, [])
  
  
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title={'Luxurious rooms'} subtitle={'Deluxe rooms starting from $199'}>
          <Button btnClass="btn-primary" toPath="/rooms/" btnText="check rooms" />
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};
