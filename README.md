# Sailor Merch - Ecommerce Site.

This project includes Home page with slider images, Product page that allows the user to filter by product type and price, Contact page with form, Footer with social media links, Backend API server and database server, Responsivepages for various device types and Accessibility and security. a MYSQL database is  designed and deployed on desktops to accommodate the ecommerce database. The ecommerce database is  comprised of 3 tables, storing information product, pricing, and contacts.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software:

VSCODE

## Running the tests

Saying "npm test" will run a;; tests.

### Break down into tests

These tests check if the servers are working.

```
describe('Test for "/" api endpoint', () => {
     it("/ should send back 200 status code and atleast 1 product", done => {
       chai
         .request(app)
         .get("/product")
        .end((error, response) => {
           console.log("response - ", response.body);
           expect(response.body.length > 0).equal(true);
           expect(response.status).equal(200);
          done();
        });
     });
   });
```

## Deployment

"npm run start" will deploy site

## Built With

* [React](https://reactjs.org) 


## Authors

* **Lenny Dickey** - *Initial work* - [LennyDickey](https://github.com/LennyDickey)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This site was insipred by Sailor Moon.
