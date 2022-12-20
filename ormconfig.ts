export = {
  host: '10.80.17.189',
  type: 'mssql',
  port: 1433,
  username: 'product',
  password: 'befra@re9osW',
  database: 'product',
  migrationsRun: false,
  migrations: [
    'src/database/migrations/*.ts',
  ],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  synchronize: ({ force: false , alter : true }),
  extra: {
    trustServerCertificate: true,
  }
  
};
