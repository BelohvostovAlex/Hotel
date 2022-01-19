import React from 'react';

import { useSelector } from 'react-redux';

import { Title } from './Title';
import { Room } from './Room';
import { Loading } from './Loading'

export const FeaturedRooms = () => {
  const { rooms, isLoaded } = useSelector((state) => state.roomsReducer);

  return (
    <section className="featured">
      <div className="container">
        <Title title={'Featured Rooms'} />
        <div className="featured-wrapper">
            {isLoaded ? rooms.filter(item => item.featured).map(room => {
                return (
                   <Room {...room} key={room.image}/>
                )
            })
        : <Loading />}
        </div>
      </div>
    </section>
  );
};
