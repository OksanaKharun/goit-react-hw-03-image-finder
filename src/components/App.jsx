import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button';
import  Modal   from './Modal';

class App extends Component {
   state = {
    query: '',
    images: [],
    isLoading: false,
    showModal: false,
    selectedImage: null,
    page: 1,
    perPage: 12,
    hasMoreImages: true,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  handleSearchSubmit = (query) => {
      this.setState({ query, images: [], page: 1, hasMoreImages: true })
    };


 fetchImages = () => {
      const { query, page, perPage } = this.state;
      const API_KEY = '40210238-72924526e0480010730b712b1';
      const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&per_page=${perPage}`;

      this.setState({ isLoading: true });

      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          const receivedImages = data.hits || [];
          if (receivedImages.length < perPage) {
            this.setState({ hasMoreImages: false });
          }
          this.setState((prevState) => ({
            images: [...prevState.images, ...receivedImages],
            isLoading: false,
            page: prevState.page + 1,
          }));
        })
        .catch((error) => {
          console.error('Error fetching images:'.error);
          this.setState({ isLoading: false });
        })
    };


handleLoadMore = () => {
  const { loading, hasMoreImages, query, currentPage } = this.state;

  if (!loading && hasMoreImages) {
    this.fetchImages(query, currentPage);
  }
};


  openModal = (largeURL) => {
    this.setState({
      largeImageURL: largeURL,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      largeImageURL: '',
      showModal: false,
    });
  };

render() {
  const { images, largeImageURL, showModal, hasMoreImages, loading } = this.state;
  const shouldRenderLoadMore = images.length > 0 && hasMoreImages;

  return (
    <div className="App">
      <Searchbar onSubmit={this.handleSearchSubmit} />
      <ImageGallery images={images} openModal={this.openModal} />
      {loading && <p>Loading...</p>}
       {shouldRenderLoadMore && !loading && <Button onLoadMore={this.handleLoadMore} hasMoreImages={hasMoreImages} />}
      {showModal && <Modal image={largeImageURL}  onClose={this.closeModal} />}
    </div>
  );
}
}

export default App;