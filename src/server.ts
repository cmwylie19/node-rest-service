import "dotenv/config"
import app from './app'

app.listen(process.env.PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server listening on port ` + process.env.PORT)
})