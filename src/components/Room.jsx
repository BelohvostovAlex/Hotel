import React from 'react'

import { Button } from './Button';

export const Room = ({image, name, slug, price}) => {
    return (
        <div className="featured-room" key={image}>
        <div className="featured-img">
        <img src={image} alt={name} />
        <Button btnClass="btn-featured" toPath={`/rooms/${slug}`} btnText="overview"/>
        </div>
        <div className="featured-price">{price}$</div>
        <div className="featured-room-text">
          <h2>{name}</h2>
        </div>
      </div>
    )
}
