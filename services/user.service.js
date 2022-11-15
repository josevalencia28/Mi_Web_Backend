const faker = require('faker');
const boom = require('@hapi/boom');

class UserService {

  constructor() {
    this.users = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0;index < limit; index++){
      this.users.push({
        id: faker.datatype.uuid(),
        email: faker.commerce.usersEmail,
        password: faker.commerce.userspassword,
        role: faker.commerce.usersRole,
        isBlock: faker.datatype.boolean()
      });
    }
  }

  async create(data) {
    const newUsers = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUsers);
    return newUsers;
  }

   find() {
    return this.users;
  }

  async findOne(id) {
    const users = this.users.find(item => item.id === id);
    if(!users){
      throw boom.notFound('users not found');
    }
    if(users.isBlock){
      throw boom.conflict('users is block');
    }
    return users;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
