import {
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Body,
} from '@nestjs/common';
import { ChannelService } from './channel.service';
import { Channel } from './channel.entity';
import { CreateChannelDto } from './dto/create-channel.dto';

@Controller('channel')
export class ChannelController {
  constructor(@Inject(ChannelService) private channelService: ChannelService) {}
  @Get()
  getAllChannels(): Promise<Channel[]> {
    return this.channelService.getAllChannels();
  }

  @Get(':id')
  getChannelById(@Param('id', ParseIntPipe) id: number): Promise<Channel> {
    return this.channelService.getChannelById(id);
  }

  @Post()
  createChannel(@Body() createChannelDto: CreateChannelDto): Promise<Channel> {
    return this.channelService.createChannel(createChannelDto);
  }
}
