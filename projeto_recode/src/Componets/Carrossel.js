import Carousel from 'react-bootstrap/Carousel';
import Jeri01 from '../Pages/Imagens/jeri01.jpeg'
import Jeri02 from '../Pages/Imagens/Jeri02.jpg'
import Jeri03 from '../Pages/Imagens/jeri03.jpg'


function Carrossel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Jeri01}
          alt="First slide"
        />
        <Carousel.Caption className='border-1 text-black'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Jeri02}
          alt="Second slide"
        />

        <Carousel.Caption className='border-1 text-black'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Jeri03}
          alt="Third slide"
        />

        <Carousel.Caption className='border-1 text-black'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;