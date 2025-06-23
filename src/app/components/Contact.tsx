import Heading from "./Heading";

const Contact = () => {
  return (
    <>
      <section className="contactSection wrapper">
        <Heading title="Get in Touch" />
        <div>
          <form className="form">
            <div>
              <label htmlFor="name"></label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name...."
                data-aos="flip-left"
                data-aos-duration="3000"

              />

              <label htmlFor="phone"></label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter phone number...."
                data-aos="flip-left"
                data-aos-duration="3000"

              />

              <label htmlFor="eamil"></label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email...."
                data-aos="flip-left"
                data-aos-duration="3000"

              />
            </div>
            <div>
              <label htmlFor="subject"></label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter subject..."
                data-aos="flip-left"
                data-aos-duration="3000"

              />
              <label htmlFor="message"></label>
              <textarea
                name="message"
                id="message"
                rows={7}
                placeholder="Enter your meesage..."
                data-aos="flip-left"
                data-aos-duration="3000"

              ></textarea>
            </div>
          </form>
          <button
            type="submit"
            className="btn"
            data-aos="flip-left"
            data-aos-duration="3000"

          >
            Send
          </button>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Contact;
