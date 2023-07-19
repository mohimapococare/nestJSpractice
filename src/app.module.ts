/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModules } from './todos/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contacts1Module } from './contacts1/contacts1.module';
import { Contact1 } from './contacts1/entities/contact1.schema';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.TYPEORM_URI,
      entities: [Contact1],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    }),
    Contacts1Module,
    MongooseModule.forRoot(process.env.DB_URI, { connectionName: 'todos' }),
    TodoModules,
    PrometheusModule.register()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
