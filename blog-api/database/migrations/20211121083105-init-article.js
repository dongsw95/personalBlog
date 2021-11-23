module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, TEXT, DATE, NOW, UUID, UUIDV4 } = Sequelize;
    await queryInterface
      .createTable(
        'tbl_articles',
        {
          id: {
            type: UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
            comment: 'uid, 主键'
          },
          authorId: {
            field: 'author_id',
            type: UUID,
            allowNull: false,
            comment: '作者id',
            references: {
              model: {
                tableName: 'tbl_users'
                // schema: 'schema'
              },
              key: 'id'
            }
          },
          title: {
            field: 'title',
            type: STRING(128),
            allowNull: false,
            unique: false,
            comment: '标题'
          },
          content: {
            field: 'content',
            type: TEXT,
            allowNull: false,
            unique: false,
            comment: '文章内容'
          },
          status: {
            field: 'status',
            type: STRING(32),
            allowNull: false,
            defaultValue: '',
            comment: '文章状态'
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
          timestamps: true
        }
      )
      .then(() => {
        return queryInterface.sequelize.query(
          'ALTER TABLE tbl_articles ALTER COLUMN id SET DEFAULT uuid_generate_v4()'
        );
      })
      .then(() => {
        return queryInterface.sequelize.query(`CREATE TRIGGER "tbl_articles_create_time" AFTER INSERT ON "tbl_articles"
FOR EACH ROW
EXECUTE PROCEDURE "create_timestamp"();`);
      })
      .then(() => {
        return queryInterface.sequelize.query(`CREATE TRIGGER "tbl_articles_update_time" AFTER UPDATE ON "tbl_articles"
FOR EACH ROW
EXECUTE PROCEDURE "update_timestamp"();`);
      });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('tbl_articles');
  }
};
