'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Book = loader.database.define('books', {
    postId: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
    },
    bookName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tag: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isbn: {
        type: Sequelize.STRING,
        allowNull: false
    },
    memo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false,
    indexes: [
        {
            fields: ['createdBy']
        }
    ]
});

module.exports = Book;