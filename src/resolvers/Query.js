const baseURL = `https://jsonplaceholder.typicode.com/todos/1`
const fetch = require('node-fetch')

const Query = {
  users: async () => {
    const response = await fetch(`${baseURL}`).then(res => res.json());
    return response;
  },
};

module.exports = Query;
