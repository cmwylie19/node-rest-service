import "dotenv/config"
import app from './app'

export const confirmationMessage = (error?) => {
  if (error) {
    if (process.env.NODE_ENV !== "test") {
      process.exit(1);
    }
    return false;
  }
  // tslint:disable-next-line:no-console
  console.log(`Server listening on port ` + process.env.PORT)
  return true;
}
app.listen(process.env.PORT, confirmationMessage)