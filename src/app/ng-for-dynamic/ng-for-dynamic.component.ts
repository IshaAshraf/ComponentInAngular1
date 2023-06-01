import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-dynamic',
  templateUrl: './ng-for-dynamic.component.html',
  styleUrls: ['./ng-for-dynamic.component.css'],
})
export class NgForDynamicComponent implements OnInit {
  subject: any = {
    'ENG-303': [2, 32.0, 8.0, 'Spring Semester 2021-2022'],
    'PY-505': [3, 53.0, 12.0, 'Spring Semester 2021-2022'],
    'MATH-302': [3, 51.0, 12.0, 'Spring Semester 2021-2022'],
    'IS-401': [3, 52.0, 12.0, 'Spring Semester 2021-2022'],
    'CHEM-311': [4, 64.0, 16.0, 'Spring Semester 2021-2022'],
    'STAT-301': [4, 72.0, 16.0, 'Spring Semester 2021-2022'],
    'ENG-3032': [2, 32.0, 8.0, 'Winter Semester 2021-2022'],
    'PY-5052': [3, 53.0, 12.0, 'winter Semester 2021-2022'],
    'MATH-3022': [3, 51.0, 12.0, 'winter Semester 2021-2022'],
    'IS-4012': [3, 52.0, 12.0, 'winter Semester 2021-2022'],
    'CHEM-3112': [4, 64.0, 16.0, 'winter Semester 2021-2022'],
    'STAT-3012': [4, 72.0, 16.0, 'winter Semester 2021-2022'],
  };
  semesters: any = [];

  ngOnInit(): void {
    console.log(this.subject);
    // this.loopFunction(this.subjects);
    this.test(this.subject);



    
  // let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,10]
  // for(i=0; i<arr; i++){

  // }
  // console.log(arr)
  }
  // loopFunction(subjects: any) {
  //   let subject = [];

  //   for (let key in subjects) {
  //     let per3 = {
  //       code: key,
  //       credits: subjects[key][0],
  //       marks: subjects[key][1],
  //       grade: subjects[key][2],
  //     };

  //     subject.push(per3);
  //   }

  //   console.log('subject array', subject);

  //   // const newObj: any = {};

  //   // for (const key in sub) {
  //   //   let spr = sub[key][3];
  //   //   if (sub.hasOwnProperty(key)) {
  //   //     newObj[key] = spr;
  //   //     console.log('semester:', spr);
  //   //   }
  //   // }
  //   const semesters: any = {};
  //   const newObject: any = {};
  //   for (const key in sub) {
  //     const semester = sub[key][3];

  //     if (!semesters.hasOwnProperty(semester)) {
  //       newObject[semester] = {
  //         semesterName: semester,
  //         subjects: [],
  //       };
  //     }
  //   }
  // console.log('ssss',semesters)

  //   // const subjectsD: any = data.subjects;
  //   // const semesters: any = {};
  //   // for (const subjectCode in subjectsD) {
  //   //   const semester = subjectsD[subjectCode][3];
  //   //   if (!semesters.hasOwnProperty(semester)) {
  //   //     semesters[semester] = {
  //   //       semesterName: semester,
  //   //       subjects: [],
  //   //     };
  //   //   }
  //   // }
  // }

  test(data: any) {
    const subjectsD: any = data;
    const semesters: any = {};
    for (const subjectCode in subjectsD) {
      const semester = subjectsD[subjectCode][3];
      if (!semesters.hasOwnProperty(semester)) {
        semesters[semester] = {
          semesterName: semester,
          subjects: [],
        };
        console.log()
      }
      const subject = {
        code: subjectCode,
        credits: subjectsD[subjectCode][0],
        marks: subjectsD[subjectCode][1],
        grade: subjectsD[subjectCode][2],
      };
      
      semesters[semester].subjects.push(subject);
      // console.log(this.subjects)
    }
    const semesterArray = Object.values(semesters);
    this.semesters = semesterArray;
    console.log('data', this.semesters);
  }
}
