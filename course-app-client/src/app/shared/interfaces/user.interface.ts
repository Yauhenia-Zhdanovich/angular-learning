import { AuthorName } from './name.interface';

export interface User {
  id: number;
  fakeTocken: string;
  name: AuthorName;
  login: string;
  password: string;
}
