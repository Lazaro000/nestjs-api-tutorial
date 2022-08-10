import { JwtGuard } from './../auth/guard/jwt.guard';
import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(
    @GetUser() user: User,
    @GetUser('email') email: string,
  ) {
    console.log({ email });

    return user;
  }
}
