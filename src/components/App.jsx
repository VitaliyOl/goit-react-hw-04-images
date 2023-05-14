import { Container } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GetImages } from '../services/fetchApi';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,

    showModal: false,

    isLoading: false,
    error: false,
    largeImageUrl: '',
  };

  getLargeImgUrl = imgUrl => {
    this.setState({ largeImageUrl: imgUrl });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;

    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      try {
        this.setState({ isLoading: true });
        const images = await GetImages(query, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
        }));
      } catch (error) {
        this.setState({ error: true });
        console.log(error);
      }
    }
  }

  getQuery = ({ query }) => {
    this.setState({ query, images: [], page: 1 });
  };

  render() {
    const { isLoader, images, showModal, largeImageUrl } = this.state;
    return (
      <Container>
        <GlobalStyle />
        <Searchbar onSubmit={this.getQuery} />
        {showModal && (
          <Modal largeImg={largeImageUrl} onClose={this.toggleModal} />
        )}
        <ImageGallery images={images} onClick={this.getLargeImgUrl} />

        {isLoader && <Loader />}
        <ToastContainer />
      </Container>
    );
  }
}
