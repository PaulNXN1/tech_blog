const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection")

class Commentblog extends Model {

}
Commentblog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "post",
                key: "id"
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        updatedAt: false,
        freezeTableName: true,
        underscored: true,
        modelName: "blogcomment"
    }
)
module.exports = Commentblog;