


const Carrusel = () => {
  return (
    <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/carrusel_02.jpg" class={"d-block w-100"} alt="..."/>
          </div>  

          <div className="carousel-item">
            <img src="images/carrusel_03.jpg" class="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src="images/carrusel_04.jpg" class="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src="images/carrusel_05.jpg" class="d-block w-100" alt="..." />
          </div>

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}

export default Carrusel