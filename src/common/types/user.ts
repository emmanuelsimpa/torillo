export interface User {
  _id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  image: string;
  job_title: string;
  dob: Date;
  startDate: Date;
  resumptionDate: Date;
  leaveType: string;
  remainingDays: number;
}
