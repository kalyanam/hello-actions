function sayHello(name = "World") {
  return `Hello, ${name}! 👋`;
}

// Export for testing
module.exports = { sayHello };

// If run directly with `node index.js`
if (require.main === module) {
  console.log(sayHello());
}