declare namespace NodeJS {
  export type ProcessEnv = {
    PORT: number;
    DATABASE_URL_LOCAL: string;
    DATABASE_URL: string;
    NODE_ENV: string;
    BCRYPT_SALT_ROUNDS: number;
    JWT_ACCESS_TOKEN: string;
    JWT_TOKEN_EXPIRATION: string;
    JWT_REFRESH_TOKEN: string;
    JWT_REFRESH_EXPIRATION: string;
  };
}
