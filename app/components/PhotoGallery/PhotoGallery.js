'use strict';

const React = require('react');
const Photo = require('./Photo')
const PhotoForm = require('./PhotoForm');

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      photos: this.props.photos
    }

    this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this);
  }

  handlePhotoSubmit() {
    this.setState({photos: this.state.photos});
  }

  render() {
    // all info fed in from data is stored as a prop, and 
    // is therefore not dynamically updated during form submission. 
    // TODO render photos upon submission of form data. Info already 
    // stores in the data array -- need to make that a part of state,
    // not props.
    let photos = this.state.photos.map((photo) => {
      return <Photo src={photo.url} caption={photo.caption} />
    });

    
    return (
      <div className='outer-container'>
        <div className='photo-gallery'>
          {photos}
        </div>
        <div className='photo-submit'>
          <PhotoForm onPhotoSubmit={this.handlePhotoSubmit}/>
        </div>
      </div>
    )
  }
}

PhotoGallery.propTypes = {
  photos: React.PropTypes.array
}
module.exports = PhotoGallery;