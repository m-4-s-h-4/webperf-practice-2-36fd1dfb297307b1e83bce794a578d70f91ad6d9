import Image from "next/image";

export default function Main() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 m-auto">
              <div className="heroText">
                <h1 className="text-white mb-lg-5 mb-3">Delicious Steaks</h1>
                <div className="c-reviews my-3 d-flex flex-wrap align-items-center">
                  <div className="d-flex flex-wrap align-items-center">
                    <h4 className="text-white mb-0 me-3">4.4/5</h4>
                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star reviews-icon" />
                    </div>
                  </div>
                  <p className="text-white w-100">
                    From <strong>1,206+</strong> Customer Reviews
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-12">
              <div
                id="carouselExampleCaptions"
                className="carousel carousel-fade hero-carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="carousel-image-wrap">
                      <Image
                        src="/images/slide/jay-wennington-N_Y88TWmGwA-unsplash.jpg"
                        width={356}
                        height={356}
                        className="img-fluid carousel-image"
                        alt=""
                      />
                    </div>
                    <div className="carousel-caption">
                      <span className="text-white">
                        <i className="bi-geo-alt me-2" />
                        Manhattan, New York
                      </span>
                      <h4 className="hero-text">Fine Dining Restaurant</h4>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-image-wrap">
                      <Image
                        src="/images/slide/jason-leung-O67LZfeyYBk-unsplash.jpg"
                        className="img-fluid carousel-image"
                        width={356}
                        height={356}
                        alt=""
                      />
                    </div>
                    <div className="carousel-caption">
                      <div className="d-flex align-items-center">
                        <h4 className="hero-text">Steak</h4>
                        <span className="price-tag ms-4">
                          <small>$</small>26.50
                        </span>
                      </div>
                      <div className="d-flex flex-wrap align-items-center">
                        <h5 className="reviews-text mb-0 me-3">3.8/5</h5>
                        <div className="reviews-stars">
                          <i className="bi-star-fill reviews-icon" />
                          <i className="bi-star-fill reviews-icon" />
                          <i className="bi-star-fill reviews-icon" />
                          <i className="bi-star reviews-icon" />
                          <i className="bi-star reviews-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-image-wrap">
                      <Image
                        src="/images/slide/ivan-torres-MQUqbmszGGM-unsplash.jpg"
                        className="img-fluid carousel-image"
                        width={356}
                        height={356}
                        alt=""
                      />
                    </div>
                    <div className="carousel-caption">
                      <div className="d-flex align-items-center">
                        <h4 className="hero-text">Sausage Pasta</h4>
                        <span className="price-tag ms-4">
                          <small>$</small>18.25
                        </span>
                      </div>
                      <div className="d-flex flex-wrap align-items-center">
                        <h5 className="reviews-text mb-0 me-3">4.2/5</h5>
                        <div className="reviews-stars">
                          <i className="bi-star-fill reviews-icon" />
                          <i className="bi-star-fill reviews-icon" />
                          <i className="bi-star-fill reviews-icon" />
                          <i className="bi-star-fill reviews-icon" />
                          <i className="bi-star reviews-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="video-wrap">
          <video
            autoPlay={true}
            loop={true}
            muted={true}
            className="custom-video"
            poster=""
          >
            <source src="/video/production_ID_3769033.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="overlay" />
      </section>
      <section className="menu section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-lg-5 mb-4">Special Menus</h2>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image
                    src="/images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg"
                    className="img-fluid menu-image"
                    width={356}
                    height={356}
                    alt=""
                  />
                  <span className="menu-tag bg-warning">Breakfast</span>
                </div>
                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Morning Fresh</h4>
                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>12.50
                  </span>
                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">4.3/5</h6>
                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star reviews-icon" />
                    </div>
                    <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image
                    src="/images/lunch/farhad-ibrahimzade-MGKqxm6u2bc-unsplash.jpg"
                    className="image-fluid menu-image"
                    width={356}
                    height={356}
                    alt=""
                  />
                  <span className="menu-tag bg-warning">Lunch</span>
                </div>
                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Tooplate Soup</h4>
                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>24.50
                  </span>
                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">3/5</h6>
                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star reviews-icon" />
                      <i className="bi-star reviews-icon" />
                    </div>
                    <p className="reviews-text mb-0 ms-4">50 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image
                    src="/images/dinner/keriliwi-c3mFafsFz2w-unsplash.jpg"
                    className="img-fluid menu-image"
                    width={356}
                    height={356}
                    alt=""
                  />
                  <span className="menu-tag bg-warning">Dinner</span>
                </div>
                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Premium Steak</h4>
                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>45
                  </span>
                  <del className="ms-4">
                    <small>$</small>150
                  </del>
                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">3/5</h6>
                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star reviews-icon" />
                      <i className="bi-star reviews-icon" />
                    </div>
                    <p className="reviews-text mb-0 ms-4">86 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image
                    src="/images/dinner/farhad-ibrahimzade-ZipYER3NLhY-unsplash.jpg"
                    className="img-fluid menu-image"
                    width={356}
                    height={356}
                    alt=""
                  />
                  <span className="menu-tag bg-warning">Dinner</span>
                </div>
                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Seafood Set</h4>
                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>86
                  </span>
                  <del className="ms-4">
                    <small>$</small>124
                  </del>
                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">3/5</h6>
                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star reviews-icon" />
                      <i className="bi-star reviews-icon" />
                    </div>
                    <p className="reviews-text mb-0 ms-4">44 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image
                    src="/images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg"
                    className="img-fluid menu-image"
                    width={356}
                    height={356}
                    alt=""
                  />
                  <span className="menu-tag bg-warning">Breakfast</span>
                </div>
                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Burger Set</h4>
                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>20.50
                  </span>
                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">4.3/5</h6>
                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star reviews-icon" />
                    </div>
                    <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image
                    src="/images/lunch/farhad-ibrahimzade-D5c9ZciQy_I-unsplash.jpg"
                    className="img-fluid menu-image"
                    width={356}
                    height={356}
                    alt=""
                  />
                  <span className="menu-tag bg-warning">Lunch</span>
                </div>
                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Healthy Soup</h4>
                  <span className="price-tag bg-white shadow-lg ms-4">
                    <small>$</small>34.20
                  </span>
                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">3/5</h6>
                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star-fill reviews-icon" />
                      <i className="bi-star reviews-icon" />
                      <i className="bi-star reviews-icon" />
                    </div>
                    <p className="reviews-text mb-0 ms-4">64 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="BgImage" />
      <section className="news section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center mb-lg-5 mb-4">News &amp; Events</h2>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <a href="news-detail.html">
                  <Image
                    src="/images/news/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg"
                    className="img-fluid news-image"
                    width={356}
                    height={356}
                    alt=""
                  />
                </a>
                <div className="news-text-info news-text-info-large">
                  <span className="category-tag bg-danger">Featured</span>
                  <h5 className="news-title mt-2">
                    <a href="news-detail.html" className="news-title-link">
                      Healthy Lifestyle and happy living tips
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <a href="news-detail.html">
                  <Image
                    src="/images/news/stefan-johnson-xIFbDeGcy44-unsplash.jpg"
                    className="img-fluid news-image"
                    width={356}
                    height={356}
                    alt=""
                  />
                </a>
                <div className="news-text-info news-text-info-large">
                  <span className="category-tag bg-danger">Featured</span>
                  <h5 className="news-title mt-2">
                    <a href="news-detail.html" className="news-title-link">
                      How to make a healthy meal
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="news-thumb mb-lg-0 mb-lg-4 mb-0">
                <a href="news-detail.html">
                  <Image
                    src="/images/news/gilles-lambert-S_LhjpfIdm4-unsplash.jpg"
                    className="img-fluid news-image"
                    width={356}
                    height={356}
                    alt=""
                  />
                </a>
                <div className="news-text-info">
                  <span className="category-tag me-3 bg-info">Promotions</span>
                  <strong>8 April 2022</strong>
                  <h5 className="news-title mt-2">
                    <a href="news-detail.html" className="news-title-link">
                      Is Coconut good for you?
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="news-thumb mb-lg-0 mb-lg-4 mb-2">
                <a href="news-detail.html">
                  <Image
                    src="/images/news/caroline-attwood-bpPTlXWTOvg-unsplash.jpg"
                    className="img-fluid news-image"
                    width={356}
                    height={356}
                    alt=""
                  />
                </a>
                <div className="news-text-info">
                  <span className="category-tag">News</span>
                  <h5 className="news-title mt-2">
                    <a href="news-detail.html" className="news-title-link">
                      Salmon Steak Noodle
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <a href="news-detail.html">
                  <Image
                    src="/images/news/louis-hansel-GiIiRV0FjwU-unsplash.jpg"
                    className="img-fluid news-image"
                    width={356}
                    height={356}
                    alt=""
                  />
                </a>
                <div className="news-text-info">
                  <span className="category-tag me-3 bg-info">Meeting</span>
                  <strong>30 April 2022</strong>
                  <h5 className="news-title mt-2">
                    <a href="news-detail.html" className="news-title-link">
                      Making a healthy salad
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
