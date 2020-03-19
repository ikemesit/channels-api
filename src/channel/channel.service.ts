import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChannelRepository } from './channel.repository';
import { Channel } from './channel.entity';

@Injectable()
export class ChannelService {
  constructor(
    @InjectRepository(ChannelRepository)
    private channelRepository: ChannelRepository,
  ) {}

  async getAll(): Promise<Channel[]> {
    return await this.channelRepository.getChannels();
  }
}
