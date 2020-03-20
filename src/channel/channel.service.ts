import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChannelRepository } from './channel.repository';
import { Channel } from './channel.entity';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';

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

  async updateChannel(
    id: number,
    updateChannelDto: UpdateChannelDto,
  ): Promise<Channel> {
    const channelToUpdate = await this.getChannelById(id);

    for (const key in channelToUpdate) {
      if (updateChannelDto[key]) {
        channelToUpdate[key] = updateChannelDto[key];
      }
    }

    await channelToUpdate.save();
    return channelToUpdate;
  }

  async deleteChannel(id: number): Promise<void> {
    const channelToDelete = await this.getChannelById(id);

    try {
      await this.channelRepository.remove(channelToDelete);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
