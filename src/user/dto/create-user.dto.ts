import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @Length(3, undefined, {
    message: 'Имя и фамилия должны быть минимум 3 символа',
  })
  fullName: string;

  @IsEmail(undefined, { message: 'Неверная почта!' })
  email: string;

  @Length(6, undefined, { message: 'Пароль должен быть минимум 6 символов!' })
  password?: string;
}
