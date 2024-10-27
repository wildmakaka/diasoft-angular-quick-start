import { Router } from '@angular/router';
import { MockStore, createMockStore } from '@ngrx/store/testing';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import CoursesListComponent from 'src/app/modules/courses/components/courses-list/courses-list.component';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import { getCoursesAction } from 'src/app/modules/courses/store/actions/getCourses.action';
import { CoursesStateInterface } from 'src/app/modules/courses/types/coursesState.interface';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  const { build, store } = setup<CoursesListComponent>();

  beforeEach(() => {
    component = build();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch getPokemons', () => {
    spyOn(store, 'dispatch');
    component.dispatchCourse();

    expect(store.dispatch).toHaveBeenCalledOnceWith(getCoursesAction());
  });
});

function setup<T>(): {
  default: () => any;
  build: () => T;
  store: MockStore<CoursesStateInterface>;
  [key: string]: any;
} {
  const initialState: CoursesStateInterface = {
    isLoading: false,
    data: null,
    error: null,
  };

  const store: MockStore<CoursesStateInterface> = createMockStore({
    initialState,
  });

  const builder = {
    store,
    default(): any {
      return builder;
    },
    build(): any {
      return new CoursesListComponent(
        {} as Router,
        store,
        {} as CoursesService,
        {} as ConfirmationService,
        {} as PrimeNGConfig
      );
    },
  };
  return builder;
}
