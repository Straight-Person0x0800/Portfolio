module.exports = {
  development: {
    uri: "mongodb://root:example@mongodb:27017/portfolioApp?authSource=admin",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  production: {
    uri: process.env.MONGO_URI,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
