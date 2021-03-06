'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Comment = loader.database.define('comments', {
    postId: {
        type: Sequelize.UUID,
        paimaryKey: true,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = Comment;