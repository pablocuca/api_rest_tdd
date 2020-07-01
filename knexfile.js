module.exports = {
  test: {
    client: 'sqlite3',
    connection: {
      filename: "database/barriga.sqlite"
    },
    useNullAsDefault: true,
    migrations: {
      directory: 'src/migrations'
    }
  }
};