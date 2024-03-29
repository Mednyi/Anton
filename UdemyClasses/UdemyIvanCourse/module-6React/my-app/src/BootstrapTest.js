import { Carousel } from 'react-bootstrap';

const BootstrapTest = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://avatars.mds.yandex.net/i?id=d410d6efe31d1161624c221ba9ee99cd2869cccb-8249078-images-thumbs&n=13"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://avatars.mds.yandex.net/i?id=d410d6efe31d1161624c221ba9ee99cd2869cccb-8249078-images-thumbs&n=13"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://avatars.mds.yandex.net/i?id=d410d6efe31d1161624c221ba9ee99cd2869cccb-8249078-images-thumbs&n=13"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default BootstrapTest;