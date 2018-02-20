
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('notes', [{
      noteid: 200,
      title: 'food',
      content: 'pizza',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('notes', null, {}),
};
