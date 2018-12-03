module.exports = function (sequelize, DataTypes) {
	var Table = sequelize.define('Table', {
		user_name: DataTypes.STRING,
		user_balance: {
			type: DataTypes.DECIMAL(10,2),
			defaultValue: 0,
		},
		goal_img: DataTypes.STRING,
		goal_upc: DataTypes.INTEGER,
		goal_price: DataTypes.DECIMAL(10,2),
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		  },
		  updatedAt: {
			allowNull: false,
			type: DataTypes.DATE,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		  }
	});
	return Table;
};
