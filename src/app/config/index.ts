import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url_local: process.env.DATABASE_URL_LOCAL,
  database_url: process.env.DATABASE_URL,
  node_env: process.env.NODE_ENV,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt_access_token: process.env.JWT_ACCESS_TOKEN,
  jwt_token_expiration: process.env.JWT_TOKEN_EXPIRATION,
  jwt_refresh_token: process.env.JWT_REFRESH_TOKEN,
  jwt_refresh_expiration: process.env.JWT_REFRESH_EXPIRATION,
};
