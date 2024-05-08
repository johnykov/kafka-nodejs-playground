import type { SexType } from '@faker-js/faker';
import { faker } from '@faker-js/faker/locale/pl'

type SubscriptionTier = 'free' | 'basic' | 'business';

interface Movie {
  name: string
  hero: string
}

interface Song {
  title: string
  genre: string
}

interface User {
  _id: string;
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  sex: SexType;
  subscriptionTier: SubscriptionTier;
  favouriteContent: (Song | Movie)[]
}

export function createRandomUser(): User {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.helpers.unique(faker.internet.email, [
    firstName,
    lastName,
  ]);

  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    favouriteContent: faker.helpers.arrayElements([{
      title: faker.music.songName(),
      genre: faker.music.genre(),
    } as Song, {
      name: faker.animal.bird(),
      hero: faker.animal.rodent(),
    } as Movie], {min: 0, max: 2}),
  };
}
