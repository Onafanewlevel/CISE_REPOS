import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './api/books/book.module';
import { Book } from './api/books/book.schema';
import { ConfigModule } from '@nestjs/config';

const DB_URI = 'mongodb+srv://rosemicluvin:PF3d2w7nndEdKOSI@cluster0.ub3ir.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

@Module({
  //imports: [
  //  ConfigModule.forRoot(),
  //  MongooseModule.forRoot(process.env.DB_URI),
  //  BookModule
  //],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(DB_URI),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
