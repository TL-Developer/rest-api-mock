const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker'); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', (req, res) => {
  const users = Array.from({ length: 10 }, () => ({
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  }));

  res.status(200).json(users);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});