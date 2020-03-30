import { Repository, EntityRepository } from 'typeorm';
import { Channel } from './channel.entity';
import { CreateChannelDto } from './dto/create-channel.dto';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Channel)
export class ChannelRepository extends Repository<Channel> {
  async getChannels(): Promise<Channel[]> {
    const query = this.createQueryBuilder('channel');
    const foundChannels = await query.getMany();
    return foundChannels;
  }

  async createChannel(creatChannelDto: CreateChannelDto): Promise<Channel> {
    const { title, description } = creatChannelDto;

    const newChannel = new Channel();
    newChannel.title = title;
    newChannel.description = description;

    try {
      await newChannel.save();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return newChannel;
  }
}
