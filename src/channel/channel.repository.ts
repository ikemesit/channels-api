import { Repository, EntityRepository } from 'typeorm';
import { Channel } from './channel.entity';

@EntityRepository(Channel)
export class ChannelRepository extends Repository<Channel> {
  async getChannels(): Promise<Channel[]> {
    const query = this.createQueryBuilder('channel');
    const foundChannels = await query.getMany();
    return foundChannels;
  }
}
