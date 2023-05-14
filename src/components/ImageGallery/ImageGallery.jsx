import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

// import Modal from 'components/Modal/Modal';
// import { Button } from 'components/Button/Button';

import React from 'react';

export function ImageGallery({ images, onClick }) {
  return (
    <Gallery>
      <ImageGalleryItem images={images} onClickImg={onClick} />
    </Gallery>
  );
}
