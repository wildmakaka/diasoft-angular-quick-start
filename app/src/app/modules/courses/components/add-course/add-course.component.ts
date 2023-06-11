import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dia-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AddCourseComponent implements OnInit {
  ngOnInit(): void {}
}
