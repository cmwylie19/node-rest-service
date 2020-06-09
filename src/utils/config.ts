import * as dotenv from "dotenv"



export function setenv(argPath: string): string {

  dotenv.config();
  let path;

  switch (argPath) {
    case "test":
      path = `${__dirname}/../../.env.test`
      break;
    case "production":
      path = `${__dirname}/../../.env.production`;
      break;
    default:
      path = `${__dirname}/../../.env.development`;
  }

  dotenv.config({ path });

  return path;
}