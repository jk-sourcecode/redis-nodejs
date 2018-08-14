const redis = require("redis");
const client = redis.createClient(6379, "redis"); //both redis image and api run on "redis" network.
const Promise = require("bluebird");

module.exports = {
  Set(Key, Value) {
    return new Promise((resolve, reject) => {
      return resolve(client.set(Key, Value));
    });
  },
  SetEx(Key, Value, ExValue) {
    return new Promise((resolve, reject) => {
      return resolve(client.set(Key, Value, "EX", ExValue));
    });
  },
  Get(Key) {
    return new Promise((resolve, reject) => {
      client.get(Key, function(error, result) {
        if (error) {
          reject(error);
        }
        return resolve(result);
      });
    });
  },
  Delete(Key) {
    return new Promise((resolve, reject) => {
      return resolve(client.del(Key));
    });
  }
};
