import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Selector.css";

class Selector extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    // ----- initial state---- default item
    this.state = {
      icon: "fas fa italic",
      title: "Lettermark",
      text: "A Monogram or lettermark is a typography-based logo that’s comprised of a few letters, usually a company’s initials. The lettermark is all about simplicity.",
      text2:
        " By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name",
      image:
        "https://nytelock.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-20-at-12.58.49-AM.png",
    };
  }

  //--- list of items to be clicked to change the content-----
  items = [
    {
      icon: "fas fa-italic",
      title: "Lettermark",
      text: "A Monogram or lettermark is a typography-based logo that’s comprised of a few letters, usually a company’s initials. The lettermark is all about simplicity. ",
      text2:
        " By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name",
      image:
        "https://nytelock.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-20-at-12.58.49-AM.png",
    },
    {
      icon: "fab fa-weebly",
      title: "Wordmark",
      text: "Similar to a lettermark, a wordmark or logotype is a font-based logo that focuses on a business’ name alone. Think Visa and Coca-Cola. Wordmark logos work really well when a company has a succinct and distinct name. Google’s logo is a great example of this. The name itself is catchy and memorable so, when combined with strong typography, the logo helps create strong brand recognition.",
      image:
        "https://nytelock.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-20-at-1.03.05-AM-768x251.png",
    },
    {
      icon: "fas fa-lemon",
      title: "Pictorial Mark",

      text: "A pictorial mark (sometimes called brand mark or logo symbol) is an icon—or graphic-based logo. It’s probably the image that comes to mind when you think “logo”: the iconic Apple logo, the Twitter bird, the Target bullseye. Each of these companies’ logos is so emblematic, and each brand so established, that the mark alone is instantly recognizable.",
      text2:
        " A true brand mark is only an image. Because of this , it can be tricky logo type for new companies, or those without strong brand recognition, to use. ",
      image:
        "https://nytelock.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-20-at-1.04.56-AM-1536x500.png",
    },
    {
      icon: "fab fa-artstation",
      title: "Abstract Mark",
      text: "An abstract mark is a specific type of pictorial logo. Instead of being a recognizable image—like an apple or a bird—it’s an abstract geometric form that represents your business. A few famous examples include the BP starburst-y logo, the Pepsi divided circle and the strip-y Adidas flower.",
      text2:
        " Like all logo symbols, abstract marks work really well because they condense your brand into a single image. However, instead of being restricted to a picture of something recognizable, abstract logos allow you to create something truly unique to represent your brand.",
      image:
        "	https://nytelock.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-20-at-1.07.50-AM.png",
    },
    {
      icon: "fas fa-theater-masks",
      title: "Mascot",
      text: "Mascot logos are logos that involve an illustrated character. Often colorful, sometimes cartoonish, and most always fun, the mascot logo is a great way to create your very own brand spokesperson.",
      text2:
        " A mascot is simply an illustrated character that represents your company. Think of them as the ambassador for your business. Famous mascots include the Kool-Aid Man, KFC’s Colonel and PUB’s cute Water Wally.",
      image:
        "https://nytelock.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-20-at-1.10.49-AM.png",
    },
    {
      icon: "fas fa-puzzle-piece",
      title: "Combination",
      text: "A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot. The picture and text can be laid out side-by-side, stacked on top of each other, or integrated together to create an image.",
      text2:
        " Because a name is associated with the image, a combination mark is a versatile choice, with both the text and icon or mascot working together to reinforce your brand.",
      image:
        "https://nytelock.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-20-at-1.14.22-AM.png",
    },
  ];

  //---- method to change the content----
  handleChange(item) {
    this.setState({
      title: item.title,
      text: item.text,
      text2: item.text2,
      image: item.image,
    });
  }

  //---- create the items list and also add a click event to change the content when clicked-----
  itemsList = this.items.map((item, index) => (
    <div className="tabs" key={index} onClick={() => this.handleChange(item)}>
      <div>
        <div className="pb-2">
          <i className={item.icon}></i>
        </div>

        <p>
          {item.title}
          <br />
          Logo{" "}
        </p>
      </div>
    </div>
  ));

  render() {
    return (
      <div>
        <section className="top-section d-flex justify-content-center align-items-center">
          <div>
            <Row className="row">
              <Col>
                <p className="p1">
                  <span>.</span>
                  HOW DO I KNOW WHICH LOGO STYLE IS RIGHT FOR ME?
                </p>
                <p className="p2 font-weight-light">
                  different type of logo styles
                </p>
              </Col>

              <Col className="d-flex align-items-center justify-content-end">
                <div className="contact-btn d-flex align-items-center justify-content-center">
                  <a>
                    Contact Us
                    <span>
                      <i class="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </a>
                </div>
              </Col>
            </Row>

            <div className="d-flex p-2 text-center justify-content-between mt-5">
              {this.itemsList}
            </div>
          </div>
        </section>

        <section className="down-section">
          <Container>
            <Row className="align-items-center">
              <Col>
                <h2>{this.state.title} Logos</h2>
                <br />
                <p>{this.state.text}</p>
                <br />
                <p>{this.state.text2}</p>
              </Col>

              <Col>
                <img src={this.state.image} />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Selector;
