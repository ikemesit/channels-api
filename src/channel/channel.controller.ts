import {
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { ChannelService } from './channel.service';
import { Channel } from './channel.entity';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';

@Controller('channels')
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

  @Patch(':id')
  updateChannel(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateChannelDto: UpdateChannelDto,
  ): Promise<Channel> {
    return this.channelService.updateChannel(id, updateChannelDto);
  }

  @Delete(':id')
  deleteChannel(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.channelService.deleteChannel(id);
  }
}
