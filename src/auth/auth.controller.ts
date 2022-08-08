import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Req() req: Request) {
    console.log(req.body);
    this.authService.signup();
  }

  @Post('signin')
  signin() {
    this.authService.signin();
  }
}
