import { Module } from '@nestjs/common';
import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelRepository } from './channel.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ChannelRepository])],
  controllers: [ChannelController],
  providers: [ChannelService],
})
export class ChannelModule {}
