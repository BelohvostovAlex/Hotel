import React from 'react';

import { Hero } from '../components/Hero';
import { Banner } from '../components/Banner';
import { Button } from '../components/Button';

export const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title={'Our rooms'}>
        <Button btnClass="btn-primary" toPath="/" btnText="return home" />
      </Banner>
    </Hero>
  );
};
