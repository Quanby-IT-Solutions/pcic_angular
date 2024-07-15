// src/app/dashboard/dashboard-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      //teacher

      {
        path: 'assessments',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/student_information/assessments/assessments.module'
          ).then((m) => m.AssessmentsModule),
      },

      {
        path: 'attendance',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/student_information/attendance/attendance.module'
          ).then((m) => m.AttendanceModule),
      },

      {
        path: 'clearance',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/student_information/clearance/clearance.module'
          ).then((m) => m.ClearanceModule),
      },

      {
        path: 'document-management',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/student_information/document-management/document-management.module'
          ).then((m) => m.DocumentManagementModule),
      },

      {
        path: 'kiosk',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/student_information/kiosk/kiosk.module'
          ).then((m) => m.KioskModule),
      },

      {
        path: 'queuing',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/student_information/queuing/queuing.module'
          ).then((m) => m.QueuingModule),
      },

      {
        path: 'schedules',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/student_information/schedules/schedules.module'
          ).then((m) => m.SchedulesModule),
      },

      {
        path: 'scholarships',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/student_information/scholarships/scholarships.module'
          ).then((m) => m.ScholarshipsModule),
      },

      {
        path: 'class-records',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/grading-system/class-records/class-records.module'
          ).then((m) => m.ClassRecordsModule),
      },

      {
        path: 'grades',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/grading-system/grades/grades.module'
          ).then((m) => m.GradesModule),
      },

      {
        path: 'report-generation',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/grading-system/report-generation/report-generation.module'
          ).then((m) => m.ReportGenerationModule),
      },

      {
        path: 'absences',
        loadChildren: () =>
          import('src/app/dashboard/users/absences/absences.module').then(
            (m) => m.AbsencesModule
          ),
      },

      {
        path: 'calendar',
        loadChildren: () =>
          import('src/app/dashboard/users/calendar/calendar.module').then(
            (m) => m.CalendarModule
          ),
      },

      {
        path: 'notification',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/notification/notification.module'
          ).then((m) => m.NotificationModule),
      },

      {
        path: 'curriculum',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/evaluation/curriculum/curriculum.module'
          ).then((m) => m.CurriculumModule),
      },

      {
        path: 'teacher',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/evaluation/teacher/teacher.module'
          ).then((m) => m.TeacherModule),
      },

      {
        path: 'cls',
        loadChildren: () =>
          import('src/app/dashboard/users/classes/classes.module').then(
            (m) => m.ClassesModule
          ),
      },

      {
        path: 'c',
        loadChildren: () =>
          import('src/app/dashboard/users/courses/courses.module').then(
            (m) => m.CoursesModule
          ),
      },

      {
        path: 'c/details',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/courses/course-details/course-details.module'
          ).then((m) => m.CourseDetailsModule),
      },

      //end teacher

      // student

      {
        path: 'mentors',
        loadChildren: () =>
          import('src/app/dashboard/users/mentors/mentors.module').then(
            (m) => m.MentorsModule
          ),
      },

      {
        path: 'message',
        loadChildren: () =>
          import('src/app/dashboard/users/message/message.module').then(
            (m) => m.MessageModule
          ),
      },
      {
        path: 'quiz',
        loadChildren: () =>
          import('src/app/dashboard/users/quiz/quiz.module').then(
            (m) => m.QuizModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('src/app/dashboard/users/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: 'submission',
        loadChildren: () =>
          import('src/app/dashboard/users/submission/submission.module').then(
            (m) => m.SubmissionModule
          ),
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('src/app/dashboard/users/tasks/tasks.module').then(
            (m) => m.TasksModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
