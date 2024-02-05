const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
const port = 8000;
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
// const newFakeProduct = createProduct();
// console.log(newFakeProduct);


const createUser = () => {
  const newFakeUser = {
    name: faker.person.fullName(),
    job: faker.person.jobTitle(),
    zodiac: faker.person.zodiacSign()
  };
  return newFakeUser;
}
// const newUser = createUser();
// console.log(newUser);


const createCompany = () => {
  const newFakeCompany = {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase()
  };
  return newFakeCompany;
}

// const newCompany = createCompany()
// console.log(newCompany)




app.get("/api", (req, res) => {
  res.json({ message: "Hello Blerta" });
});

app.get("/api/users/new", (req,res) => {
  const newUser = createUser();
  res.json(newUser)
})

app.get("/api/company/new", (req, res) => {
  const newCompany = createCompany()
  res.json(newCompany)
})

app.get("/api/user/company", (req, res) => {
  const user = createUser();
  const company = createCompany()
  res.json({user, company})
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );