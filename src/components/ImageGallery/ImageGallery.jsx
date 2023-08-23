import React from 'react';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import ScrollUp from 'components/ScrollUp';

export function ImageGallery({ images, onClick }) {
  return (
    <Gallery>
      <ImageGalleryItem images={images} onClickImg={onClick} />
      <ScrollUp />
    </Gallery>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
