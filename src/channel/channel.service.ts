import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChannelRepository } from './channel.repository';
import { Channel } from './channel.entity';
import { CreateChannelDto } from './dto/create-channel.dto';

@Injectable()
export class ChannelService {
  constructor(
    @InjectRepository(ChannelRepository)
    private channelRepository: ChannelRepository,
  ) {}

  async getAllChannels(): Promise<Channel[]> {
    return await this.channelRepository.getChannels();
  }

  async getChannelById(id: number): Promise<Channel> {
    const foundChannel = await this.channelRepository.findOne(id);

    if (!foundChannel) {
      throw new NotFoundException('Channel not found');
    }

    return foundChannel;
  }

  async createChannel(createChannelDto: CreateChannelDto): Promise<Channel> {
    return await this.channelRepository.createChannel(createChannelDto);
  }
}
