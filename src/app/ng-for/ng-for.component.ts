import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent {
  data: any = {
    type: 'success',
    student: ['2021-ag-6100', 'Hamza Ali'],
    subjects: {
      'ENG-303': [2, 32.0, 8.0, 'Spring Semester 2021-2022'],
      'PY-505': [3, 53.0, 12.0, 'Spring Semester 2021-2022'],
      'MATH-302': [3, 51.0, 12.0, 'Spring Semester 2021-2022'],
      'IS-401': [3, 52.0, 12.0, 'Spring Semester 2021-2022'],
      'CHEM-311': [4, 64.0, 16.0, 'Spring Semester 2021-2022'],
      'STAT-301': [4, 72.0, 16.0, 'Spring Semester 2021-2022'],
    },
    semesters: {
      'Spring Semester 2021-2022': [
        'ENG-303',
        'PY-505',
        'MATH-302',
        'IS-401',
        'CHEM-311',
        'STAT-301',
        4.0,
        19.0,
      ],
    },
    detail: {
      'ENG-303': [
        'AYESHA ASHRAF',
        'Functional English',
        '10',
        '3',
        '19',
        '0',
        32.0,
        'A',
      ],
      'PY-505': [
        'Fatima Shehzadi',
        'Electronics-I',
        '14',
        '6',
        '33',
        '0',
        53.0,
        'A',
      ],
      'MATH-302': [
        'MUHAMMAD WASEEM TARIQ',
        'Introduction to Calculus',
        '16',
        '05',
        '30',
        '0',
        51.0,
        'A',
      ],
      'IS-401': [
        'Mr. Abdullah',
        'Islamic Studies',
        '15',
        '5',
        '32',
        '0',
        52.0,
        'A',
      ],
      'CHEM-311': [
        'Sonia Perveen',
        'FUNDAMENTALS OF ORGANIC CHEMISTRY',
        '13',
        '6',
        '27.5',
        '17.5',
        64.0,
        'A',
      ],
      'STAT-301': [
        'Wasif Shafique',
        'Introductory Statistics',
        '21',
        '8',
        '43',
        '0',
        72.0,
        'A',
      ],
    },
    missingCh: false,
  };
}
