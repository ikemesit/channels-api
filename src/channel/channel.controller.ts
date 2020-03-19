import { Controller, Get, Inject } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { Channel } from './channel.entity';

@Controller('channel')
export class ChannelController {
  constructor(@Inject(ChannelService) private channelService: ChannelService) {}
  @Get()
  getAll(): Promise<Channel[]> {
    return this.channelService.getAll();
  }
}
