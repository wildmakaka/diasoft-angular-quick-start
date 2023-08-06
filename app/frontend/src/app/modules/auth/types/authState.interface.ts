import { CurrentUserInterface } from 'src/app/modules/auth/types/currentUser.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export interface AuthStateInterface {
  isLoading: boolean;
  currentUser: CurrentUserInterface | null;
  errors: BackendErrorsInterface | null;
}
