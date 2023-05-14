import React from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
// import PropTypes from 'prop-types';

export default function ImageGalleryItem({ images, onClickImg }) {
  return images.map((image, id) => {
    return (
      <Item key={id}>
        <Image
          onClick={() => {
            onClickImg(image.largeImageURL);
          }}
          src={image.webformatURL}
          alt={image.tags}
          loading="lazy"
        />
      </Item>
    );
  });
}
