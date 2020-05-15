// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/groceries.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations' // put migrations here
    },
    seeds: {
      directory: './database/seeds' // put seeds here
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
  },

};
