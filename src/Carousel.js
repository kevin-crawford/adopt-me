import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  // take in a set of props and give back a new set of state
  static getDerivedStateFromProps({ media }) {
    let photos = ["https://placecorgi.com/600/600"];
    // grab large photos from media if found
    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = e => {
    this.setState({
      // refers to data-index below
      // plus '+' unary turns string into number
      active: +e.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, i) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={i}
              src={photo}
              className={i === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
