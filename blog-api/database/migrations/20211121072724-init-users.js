module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, DATE, NOW, UUID, UUIDV4 } = Sequelize;
    await queryInterface
      .createTable(
        'tbl_users',
        {
          id: {
            type: UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
            comment: 'uid, 主键'
          },
          nickName: {
            field: 'nickname',
            type: STRING(32),
            allowNull: false,
            unique: true,
            comment: '昵称'
          },
          userName: {
            field: 'username',
            type: STRING(32),
            allowNull: false,
            unique: true,
            comment: '登录用户名'
          },
          password: {
            field: 'password',
            type: STRING(256),
            allowNull: false,
            unique: false,
            comment: '密码，加密'
          },
          phone: {
            field: 'phone',
            type: STRING(32),
            allowNull: false,
            unique: true,
            comment: '手机号'
          },
          email: {
            field: 'email',
            type: STRING(128),
            allowNull: true,
            unique: true,
            comment: '邮箱,可能为空'
          },
          role: {
            field: 'role',
            type: STRING(32),
            allowNull: false,
            defaultValue: '',
            comment: '角色'
          },
          status: {
            field: 'status',
            type: STRING(32),
            allowNull: false,
            defaultValue: '',
            comment: '用户状态'
          },
          createTime: {
            field: 'create_time',
            type: DATE,
            defaultValue: NOW,
            comment: '创建时间'
          },
          updateTime: {
            field: 'update_time',
            type: DATE,
            defaultValue: NOW,
            comment: '修改时间'
          }
        },
        {
          freezeTableName: false,
          timestamps: false
        }
      )
      .then(() => {
        return queryInterface.sequelize.query('ALTER TABLE tbl_users ALTER COLUMN id SET DEFAULT uuid_generate_v4()');
      })
      .then(() => {
        return queryInterface.sequelize.query(`CREATE TRIGGER "tbl_users_create_time" BEFORE INSERT ON "tbl_users"
FOR EACH ROW
EXECUTE PROCEDURE "create_timestamp"();`);
      })
      .then(() => {
        return queryInterface.sequelize.query(`CREATE TRIGGER "tbl_users_update_time" BEFORE UPDATE ON "tbl_users"
FOR EACH ROW
EXECUTE PROCEDURE "update_timestamp"();`);
      });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('tbl_users');
  }
};
