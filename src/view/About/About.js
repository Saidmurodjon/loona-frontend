import "./About.css";
import { Carousel } from "react-bootstrap";
import photo from '../../assets/logo.png'
function About() {
  return (
    <>
      <div className="wraper">
        {/* <ReactPlayer className="reactPlayer" width='680px' height='340px' controls url="https://youtu.be/1l258Gc2Nvk" /> */}
        <div className="container aboutN">
          <div className=" aboY">
            <h3 className="aboH">О компании</h3>
          </div>
          <div className="adoFirst">
            <p className="aboP">
              <img
                width="200px"
                className="logoimg"
                src={photo}
                alt=""
              />
              О компании Компания «Loona» была основана в 2018 году. Свою
              деятельность компания начала с производства осветительных
              приборов, и вскоре реализовала производство рекламной продукции,
              которая используется в интерьерах торговых точек, затем
              разнообразных декоративных элементов для интерьера, обоев, а также
              изделий из металла, и, наконец, начала производить мягкую мебель.
              Сегодня деятельность компании значительно расширилась.
            </p>
            <p className="aboP">
              Более 60 сотрудников работают в различных производственных
              процессах. В нашей команде можно встретить много специалистов: от
              дизайнеров до технологов, швей, полировщиков, мастеров по металлу
              и дереву и т.д.
            </p>
            <p className="aboP1">
              Компания «Loona» имеет возможность реализовывать комплексные
              решения для любого типа интерьера; У нас есть возможность
              полностью оборудовать любой интерьер, будь то торговая точка,
              гостиница, ресторан, кафе или жилое помещение; Изготавливаем
              интерьерные приспособления любого размера, цвета и формы;
            </p>
            <p className="adoP">
              Предоставляем клиенту менеджера, готового оказать помощь на всех
              этапах работы: от получения заказа до его сдачи; Услуга доставки
              имеется. Сроки изготовления заказов от 7 рабочих дней; 50%
              стоимости заказа принимается заранее, а остальные 50% - при
              готовности заказа.
            </p>
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
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item className="aboCar">
                <img
                  className="d-block w-100 h-100"
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Second slide"
                />

                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item className="aboCar">
                <img
                  className="d-block w-100 h-100"
                  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Third slide"
                />

                {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
