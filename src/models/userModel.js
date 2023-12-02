// Đây chỉ là một ví dụ. Thực tế, bạn sẽ cần kết nối với cơ sở dữ liệu và sử dụng ORM như Mongoose.
const users = [];

const userModel = {
  createUser: async (user) => {
    users.push(user);
    return user;
  },

  findUserByUsername: async (username) => {
    return users.find((user) => user.username === username);
  },

  findUserById: async (id) => {
    return users.find((user) => user.id === id);
  },
};

module.exports = userModel;
