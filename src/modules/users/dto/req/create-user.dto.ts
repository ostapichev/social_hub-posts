export class CreateUserDto {
  public readonly avatar?: string;

  public readonly name: string;

  public readonly about?: string;

  public readonly email: string;

  public readonly password: string;
}
