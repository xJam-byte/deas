import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { log } from "console";
import helmet from "helmet";
import * as dotenv from "dotenv";

dotenv.config({ path: `.${process.env.NODE_ENV}.env` });
async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
  });

  await app.listen(PORT, () => {
    log("Service started on port " + PORT);
  });
}
bootstrap();
