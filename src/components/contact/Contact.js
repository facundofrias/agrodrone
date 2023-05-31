import Header from "../header/Header";
import Footer from "../footer/Footer";
import Newsletter from "../main-page/newsletter/Newsletter";


const Contact = () => {

  return (
    <>
      <Header />
      <div className="contact">
      <h3 className="contact__title">Contact</h3>
      <div className="contact__location">
        <div className="contact__map-container">
          <iframe className="contact__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1302.1840049201842!2d35.040897486171964!3d48.4674476641008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2e61217a30b%3A0x34f50dbd754d1fc1!2sVoskresenska%20St%2C%2010%2C%20201%2C%20Dnipro%2C%20Dnipropetrovs&#39;ka%20oblast%2C%20Ucrania%2C%2049000!5e0!3m2!1ses!2sar!4v1685537706731!5m2!1ses!2sar" width="220" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p className="contact__info">
          In our store you can get acquainted with all the presented assortments, as well as get qualified advice.<br />
          We will wait for you:<br />
          Dnipro<br />
          st. Voskresenskaya 43b<br />
          <strong>Working hours:</strong><br />
          Monday - Friday: C 10:00-19:00<br />
          Saturday: C 10:00-16:00<br />
          Sunday: day off<br />
          <strong>Contact:</strong><br />
          +38 (067) 399 55 03<br />
          +38 (067) 388 70 83 - for a callback<br />
          <strong>E-mail:</strong><br />
          Droneassistanr@gmail.com<br />
        </p>
      </div>
      <Newsletter />
    </div>
      <Footer />
    </>
    
  )
}

export default Contact;