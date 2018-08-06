import { AuthorName } from './name.interface';

export interface User {
  id: number;
  fakeToken: string;
  name: AuthorName;
  login: string;
  password: string;
}
