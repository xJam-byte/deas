import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserModule } from "./user/user.module";
import { User } from "./user/user.model";
import { AuthModule } from "./auth/auth.module";
import { ChildModule } from "./child/child.module";
import { PassedTestModule } from "./passed-test/passed-test.module";
import { Child } from "./child/child.model";
import { PassedTest } from "./passed-test/passed-test.model";
import { NoteModule } from "./note/note.module";
import { Note } from "./note/note.model";

@Module({
  controllers: [],
  exports: [],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "root",
      database: process.env.DB_NAME || "Damm",
      models: [User, Child, PassedTest, Note],
      autoLoadModels: true,
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    ChildModule,
    PassedTestModule,
    NoteModule,
  ],
})
export class AppModule {}
