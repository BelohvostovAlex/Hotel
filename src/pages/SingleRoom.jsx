import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Hero } from "../components/Hero";
import { Banner } from "../components/Banner";
import { useSelector } from "react-redux";
import { StyledHero } from "../components/StyledHero";

export const SingleRoom = () => {
  const params = useParams();
  const { rooms } = useSelector((state) => state.roomsReducer);
  const room = rooms.find((item) => item.slug === params.slug);

  return room ? (
<>
<StyledHero img={room.image}>
      <Banner title={`${room.name} room`}>
        <Button
          btnClass="btn-primary"
          toPath="/rooms"
          btnText="back to rooms"
        />
      </Banner>
    </StyledHero>
    <section className="single-room">
      <div className="container">
      <h3>More info</h3>
      <div className="single-room-images">
        {room.roomImages.map((img, i) => <div className="single-room-image"><img src={img} alt={img} key={i}/></div>)}
      </div>
      <div className="single-room-info">
        <article className="desc">
          <h3>details</h3>
          <p>{room.description}</p>
        </article>
        <article className="info">
          <h3>info</h3>
          <p>Price: ${room.price}</p>
          <p>Size: {room.size} SQFT</p>
          <p>Max capacity: {room.capacity > 1 ? `${room.capacity} people` : `${room.capacity} person`}</p>
          <p>{room.pets ? 'Pets allowed' : 'No pets allowed'}</p>
        </article>
      </div>
      <div className="single-room-extras">
        <article className="extras">
          <h4>Extras</h4>
          <ul className="extras-list">
            {room.extras.map((item,ind) => <li key={ind}>-{item}</li>)}
          </ul>
        </article>
      </div>
      </div>
    </section>
    </>
  ) : (
    <Hero hero="roomsHero">
      <Banner title={"Whoops"} subtitle={"No such rooms"}>
        <Button
          btnClass="btn-primary"
          toPath="/rooms"
          btnText="back to rooms"
        />
      </Banner>
    </Hero>
  );
};
