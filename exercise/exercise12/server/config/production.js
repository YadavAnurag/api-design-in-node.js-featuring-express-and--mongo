module.exports = {
  // disbable logging for production
  logging: false,
  db: {
    url: process.env.MONGOLAB_URI || 'mongodb://localhost:2717/nodeblog'
  }
};
