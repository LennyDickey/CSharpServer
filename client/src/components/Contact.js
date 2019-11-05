import React from "react";
import "./styles.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      contact: []
    };
  }

  componentDidMount() {
    fetch("/contact")
      .then(res => res.json())
      .then(
        data => {
          console.log("data.contact - ", data);
          this.setState({
            isLoaded: true,
            contact: data
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    const { error, isLoaded, contact } = this.state;

    return (
      <>
        <div id="con">
          <h2>Contact Us:</h2>
          <form action="">
            <section className="left">
              <div className="input-container">
                <label htmlFor="name">Name</label>
                <input type="text" required />
              </div>
              <div className="input-container">
                <label htmlFor="age" required>
                  Age
                </label>
                <input type="text" required />
              </div>
              <div className="input-container">
                <label htmlFor="phone">Phone</label>
                <input type="text" required />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="text" required />
              </div>
            </section>
            <section className="right">
              <div className="input-container">
                <label htmlFor="address">Address 1</label>
                <input type="text" required />
              </div>
              <div className="input-container">
                <label htmlFor="subject">Subject</label>
                <input type="text" required />
              </div>
              <div className="input-container">
                <label htmlFor="comments">Comments</label>
                <textarea name="comments" id="" required />
              </div>
            </section>
            <div className="send-container">
              <input type="submit" value="Send" onClick="return true" />
              {/* <br/> */}
            </div>
          </form>
        </div>
        <br></br>
        <h2>Reviews</h2>
        {contact.map((contact, index) => (
          <div class="card-body conrew">
            <blockquote class="blockquote mb-0">
              <p>{contact.comment}</p>
              <footer class="blockquote-footer">{contact.name}</footer>
            </blockquote>
          </div>
        ))}
      </>
    );
  }
}

export default Contact;
