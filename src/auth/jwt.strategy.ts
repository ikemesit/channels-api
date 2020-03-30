import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'mySecret789#',
    });
  }

  // TODO add user role to JwtPayload
  async validate(
    payload: JwtPayload,
  ): Promise<{ id: number; username: string }> {
    return { id: payload.sub, username: payload.username };
  }
}
