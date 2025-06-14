type GalleryProductType = {
  images: string | undefined;
};

const Gallery = ({ images }: GalleryProductType) => {
  const featImage = images;

  return (
    <section className="product-gallery">
      {/* <div className="product-gallery__thumbs">
        {images.map((image) => (
          <div key={image} className="product-gallery__thumb">
            <img src={image} alt="" />
          </div>
        ))}
      </div> */}

      <div className="product-gallery__image">
        <img src={featImage} alt="" />
      </div>
    </section>
  );
};

export default Gallery;
