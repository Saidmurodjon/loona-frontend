import "./About.css";
import ReactPlayer from 'react-player'
import { Carousel } from 'react-bootstrap';




function About() {
  return (
    <>
      <div className="wraper">
        <ReactPlayer className="reactPlayer" width='680px' height='340px' controls url="https://youtu.be/1l258Gc2Nvk" />
        <div className="container aboutN">
          <div className=" aboY">
            <h3 className="aboH">О компании</h3>
          </div>
          <div className="adoFirst">
            <p className="aboP">
              <img
                width='200px'
                className="logoimg"
                src="https://www.portotheme.com/wordpress/porto/elementor/shop29/wp-content/themes/porto/images/logo/logo_ecommerce_black.png"
                alt=""
              />
              PORTO – сеть салонов интерьерных решений.
              Наша цель – помогать Вам создавать уют и комфорт в ваших домах.
              Мы отобрали лучших производителей межкомнатных и входных дверей,
              напольного покрытия, дверной фурнитуры и разместили их в удобных и
              просторных шоу-румах, чтобы Вы смогли выбрать самые подходящие и
              качественные решения для вашего интерьера. Будь то классический и
              выдержанный стиль в лучших традициях средневековой Италии или современный
              high-tech мегаполисов, у нас всегда есть подходящее решение.</p>
            <p className="aboP">В нашем постоянном ассортименте более 500 различных наименований
              производства Германии, Италии и России, а также более 3000 доступных
              заказных моделей, которые мы в кратчайшие сроки поставляем напрямую от
              фабрик производителей.</p>
            <p className="aboP1">Нас выбирают как частные домовладельцы, так и крупные застройщики и владельцы
              бизнес-центров, отелей, мест общепита, развлекательных и торговых центров.</p>
            <p className="adoP">Являясь прямыми и эксклюзивными дистрибьюторами представленных в наших салонах брендов,
              мы всегда предлагаем наилучшую цену, гарантии и безупречное обслуживание.</p>
          </div>
          <div className="aboY1">
            <h3 className="aboH1">Чего мы достигли</h3>
          </div>
          <div className="adoCarousel">
            <Carousel>
              <Carousel.Item className="aboCar">
                <img
                  className="d-block w-100 h-100"
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="aboCar">
                <img
                  className="d-block w-100 h-100"
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Second slide"
                />
                  
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="aboCar">
                <img
                  className="d-block w-100 h-100"
                  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
