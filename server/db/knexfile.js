import * as Path from 'node:path'
import * as URL from 'node:url'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

export default {
  development: {
    client: 'better-sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: Path.join(__dirname, 'dev.sqlite3'),
    },
    pool: {
      afterCreate: (conn, cb) => {
        conn.prepare('PRAGMA foreign_keys = ON').run()
        cb(null, conn)
      },
    },
  },

  test: {
    client: 'better-sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: ':memory:',
    },
    migrations: {
      directory: Path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: Path.join(__dirname, 'seeds'),
    },
    pool: {
      afterCreate: (conn, cb) => {
        conn.prepare('PRAGMA foreign_keys = ON').run()
        cb(null, conn)
      },
    },
  },

  production: {
    client: 'better-sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: '/app/storage/prod.sqlite3',
    },
    pool: {
      afterCreate: (conn, cb) => {
        conn.prepare('PRAGMA foreign_keys = ON').run()
        cb(null, conn)
      },
    },
  },
}
