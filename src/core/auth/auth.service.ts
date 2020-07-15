import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async validate(username: string, password: string) {
    const user = await this.userService.findOneByUsername(username);
    if (user && user.password === password) {
      const { password, ...rest } = user;
      return rest;
    }
  }
}
