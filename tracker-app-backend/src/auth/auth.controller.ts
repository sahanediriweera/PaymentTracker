import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.sto';
import { AuthEntity } from './entities/auth.entity';
import { ApiOkResponse,ApiTags } from '@nestjs/swagger';


@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  login(@Body() {email,password}:LoginDto ) {
    return this.authService.login(email,password);
  }

}
