'use strict';
import usersMock from './MOCK_DATA.js';

class User {
  constructor(id, name, email, password, birthDate = new Date()) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.birthDate = birthDate;
  }
  changePassword(newPassword) {
    this.password = newPassword;
  }
}

const createUsers = () => {
  const users = [];
  for (var i = 0; i < usersMock.length; i++) {
    users.push(new User(...Object.values(usersMock[i])));
  }
  return users;
};
