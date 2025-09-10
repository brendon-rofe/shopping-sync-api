import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ItemModule } from './item/item.module';
import { MembershipModule } from './membership/membership.module';
import { HouseholdModule } from './household/household.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule, 
    UserModule,
    AuthModule,
    ItemModule,
    MembershipModule,
    HouseholdModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
