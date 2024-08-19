export class CreatePostDto {
  public readonly title: string;

  public readonly about: string;

  public readonly body: string;

  public readonly tag?: string;
}
