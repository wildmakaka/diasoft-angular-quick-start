import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

export interface CoursesStateInterface {
  isLoading: boolean;
  error: string | null;
  data: CourseInterface[] | null;
}
