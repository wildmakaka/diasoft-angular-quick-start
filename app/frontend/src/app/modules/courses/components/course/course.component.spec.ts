import CourseComponent from 'src/app/modules/courses/components/course/course.component';

describe('PokemonComponent', () => {
  let component: CourseComponent;
  const { build } = setup<CourseComponent>();

  beforeEach(() => {
    component = build();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit course', () => {
    component.course = {
      id: 8693,
      title: 'БС ДИАСОФТ ANGULAR',
      description:
        'Курс подготовлен в компании Диасофт для начинающих разработчиков Angular',
      topRated: true,
      creationDate: new Date('2023-08-28T04:39:24+00:00'),
      authors: [
        {
          id: '1370',
          name: 'Stephen',
          lastName: 'Grider',
        },
      ],
      duration: 157,
    };
    spyOn(component.edit, 'emit');

    component.editCourse();

    expect(component.edit.emit).toHaveBeenCalledOnceWith(component.course);
  });

  it('should showConfirmDeletionDialog course', () => {
    component.course = {
      id: 8693,
      title: 'БС ДИАСОФТ ANGULAR',
      description:
        'Курс подготовлен в компании Диасофт для начинающих разработчиков Angular',
      topRated: true,
      creationDate: new Date('2023-08-28T04:39:24+00:00'),
      authors: [
        {
          id: '1370',
          name: 'Stephen',
          lastName: 'Grider',
        },
      ],
      duration: 157,
    };
    spyOn(component.delete, 'emit');

    component.showConfirmDeletionDialog();

    expect(component.delete.emit).toHaveBeenCalledOnceWith(component.course);
  });
});

function setup<T>(): {
  default: () => any;
  build: () => T;
  [key: string]: any;
} {
  const builder = {
    default(): any {
      return builder;
    },
    build(): any {
      return new CourseComponent();
    },
  };
  return builder;
}
