import { User } from "@/common/types/user";
import { faker } from "@faker-js/faker";

export const fetchFakeData = (): Promise<Array<User>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const generateUser = () => ({
        _id: faker.database.mongodbObjectId(),
        name: {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
        },
        image: faker.image.url(),
        job_title: faker.person.jobTitle(), // Fixed typo here
        dob: faker.date.past(),
        startDate: faker.date.past(),
        resumptionDate: faker.date.future(),
        remainingDays: faker.number.int({ min: 5, max: 30 }),
        leaveType: faker.helpers.arrayElement([
          "sick",
          "travel",
          "annual",
          "marriage",
          "paternity",
        ]),
      });

      const data = Array.from({ length: 20 }, generateUser);
      resolve(data);
    }, 2000);
  });
};
