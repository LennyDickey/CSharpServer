// Import React, and CSS. Bootstrap is global.
import React from "react";
import "./styles.css";



export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }

  componentDidMount() {
    fetch("/product")
      .then(res => res.json())
      .then(
        data => {
          console.log("data.products - ", data);
          this.setState({
            isLoaded: true,
            products: data
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
    const { error, isLoaded, products } = this.state;
    const searchProducts = value => {
      fetch(`/product/${value}`)
        .then(res => res.json())
        .then(
          data => {
            console.log("data.products - ", data);
            this.setState({
              isLoaded: true,
              products: data
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
      console.log("value - ", value);
    };

    const searchPrice = value => {
      fetch(`/productfilter/${value}`)
        .then(res => res.json())
        .then(
          data => {
            console.log("data.products - ", data);
            this.setState({
              isLoaded: true,
              products: data
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
      console.log("value - ", value);
    };

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <main role="main">
          <div> </div>
          <section className="jumbotron text-center" id="pwrap">
            <div className="container lol">
              <br />

              <h1 className="jumbotron-heading">Sailor Products:</h1>
              <p className="lead ">
                The latest sailor moon inspired merchindise !
              </p>
            </div>
          </section>

          {/* accordion */}
          <div id="acc">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn "
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Filter By Type{" "}
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body pl">
                  <button
                    type="button"
                    class="btn btn-outline-info type"
                    onClick={() => searchPrice(40)}
                  >
                    Clothes
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-info type"
                    onClick={() => searchPrice(25)}
                  >
                    House
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-info type"
                    onClick={() => searchPrice(15)}
                  >
                    Jewlery
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Price Filter
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <p>Search by Price:</p>
                  <input
                    id="myInput"
                    type="text"
                    placeholder="Search.."
                    onChange={e => searchPrice(e.target.value)}
                  />
                  <button
                    type="button"
                    class="btn btn-outline-info type"
                    onClick={() => searchProducts()}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* accordion end */}
          <div>
            <div className="album py-5">
              <div className="container">
                <div className="row">
                  {products.map((products, index) => (
                    <div className="col-md-4">
                      <div className="card mb-4 shadow-sm">
                        <div className="card-deck">
                     dcscsd
                     
                     {" "}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div />
        </main>
      );
    }
  }
}
