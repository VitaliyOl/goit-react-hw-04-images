import { useEffect, useState } from 'react';
import { Container } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GetImages } from '../services/fetchApi';
import { LoadMore } from './Button/Button';
import Loader from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const [showModal, setShowModal] = useState(false);

  const [error, setError] = useState(false);

  const [isLoader, setIsLoader] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [largeImageUrl, setLargeImageUrl] = useState('');

  const handleBtnLoadMore = () => {
    setPage(page + 1);
  };

  const getLargeImgUrl = imgUrl => {
    setLargeImageUrl(imgUrl);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const getQuery = ({ query }) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoader(true);

    GetImages(query, page)
      .then(images => {
        if (images.hits.length < 1 || query.trim() === '') {
          setError(true);
          setIsLoader(false);
        } else {
          setImages(prevState => [...prevState, ...images.hits]);
          setIsLoader(false);
          setTotalPages(images.totalHits / 12);
        }
      })
      .catch(error => console.log(error));
  }, [page, query]);

  return (
    <Container>
      <GlobalStyle />
      <Searchbar onSubmit={getQuery} />
      {showModal && <Modal largeImg={largeImageUrl} onClose={toggleModal} />}
      <ImageGallery images={images} onClick={getLargeImgUrl} />

      {isLoader && <Loader />}

      {images.length > 0 && page <= totalPages && (
        <LoadMore onClick={handleBtnLoadMore}>Load more</LoadMore>
      )}

      {error && (
        <h1 style={{ margin: '0 auto' }}>
          Oops... no image for this request :(({' '}
        </h1>
      )}
      <ToastContainer autoClose={2000} />
    </Container>
  );
};

// export class App extends Component {
//   state = {
//     query: '',
//     images: [],
//     page: 1,

//     showModal: false,

//     isLoader: false,
//     totalPages: 0,
//     error: false,
//     largeImageUrl: '',
//   };

//   handleBtnLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   getLargeImgUrl = imgUrl => {
//     this.setState({ largeImageUrl: imgUrl });
//     this.toggleModal();
//   };

//   toggleModal = () => {
//     this.setState(state => ({
//       showModal: !state.showModal,
//     }));
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     const { page, query } = this.state;

//     if (
//       prevState.page !== this.state.page ||
//       prevState.query !== this.state.query
//     ) {
//       try {
//         this.setState({ isLoader: true });
//         const images = await GetImages(query, page);

//         if (images.length === 0) {
//           return <h1>Oops... there are no images matching your search... </h1>;
//         }

//         this.setState(prevState => ({
//           images: [...prevState.images, ...images.hits],
//           isLoader: false,
//           totalPages: Math.floor(images.totalHits / 12),
//         }));
//       } catch (error) {
//         this.setState({ error: true });
//         console.log(error.message);
//       }
//     }
//   }

//   getQuery = ({ query }) => {
//     this.setState({ query, images: [], page: 1 });
//   };

//   render() {
//     const { page, isLoader, images, showModal, largeImageUrl, totalPages } =
//       this.state;

//     return (
//       <Container>
//         <GlobalStyle />
//         <Searchbar onSubmit={this.getQuery} />
//         {showModal && (
//           <Modal largeImg={largeImageUrl} onClose={this.toggleModal} />
//         )}
//         <ImageGallery images={images} onClick={this.getLargeImgUrl} />

//         {isLoader && <Loader />}

//         {images.length > 0 && page <= totalPages && (
//           <LoadMore onClick={this.handleBtnLoadMore}>Load more</LoadMore>
//         )}
//         <ToastContainer autoClose={2000} />
//       </Container>
//     );
//   }
// }
