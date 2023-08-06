// import { CurrentUserInterface } from 'src/app/modules/auth/types/currentUser.interface';

// export interface AuthResponseInterface {
//   user: CurrentUserInterface;
// }

export interface AuthResponseInterface {
  id: number;
  firstName: string;
  lastName: string;
  fakeToken: string;
  email: string;
  password: string;
}
