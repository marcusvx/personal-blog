import { PrismaClient } from "@prisma/client";
import slug from "slug";
import faker from "@faker-js/faker";

const prisma = new PrismaClient();
const PASSWORD = "$2b$10$t9z2hwiQR/GmGQ/crs2VJ.IBo9AHDsEifT3tg5orsThSV6oYU9PZa";
const USER_COUNT = 20;
const CATEGORIES = [
  "Architecture",
  "Node.js",
  "Dotnet",
  "Software Engineering",
  "Microservices",
  "Cloud Computing",
  "Design Patterns",
];
const TAGS = [
  "c#",
  "backend",
  "frontend",
  "soft-skills",
  "methodologies",
  "practices",
  "trivia",
];

async function main() {
  for (let i = 0; i < USER_COUNT; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email(firstName, lastName);
    const username = faker.internet.userName(firstName, lastName);

    const numOfPosts = faker.datatype.number({ min: 3, max: 20 });
    const posts: any = Array.from(Array(numOfPosts)).map((_) => {
      const title = faker.lorem.words(
        faker.datatype.number({ min: 5, max: 15 })
      );
      const content = faker.lorem.paragraphs(
        faker.datatype.number({ min: 300, max: 900 })
      );

      const category = faker.random.arrayElement(CATEGORIES);
      return {
        title,
        slugTitle: slug(title),
        textContent: content,
        richContent: content,
        createdAt: faker.date.between(
          "2020-01-01T00:00:00.000Z",
          "2022-01-01T00:00:00.000Z"
        ),
        category: {
          connectOrCreate: {
            where: {
              name: category,
            },
            create: {
              name: category,
            },
          },
        },
        tags: {
          create: faker.random.arrayElements(TAGS).map((tag) => {
            return {
              tag: {
                connectOrCreate: {
                  where: {
                    name: tag,
                  },
                  create: { name: tag },
                },
              },
            };
          }),
        },
      };
    });

    const user = await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        email,
        username,
        firstName,
        lastName,
        password: PASSWORD,
        posts: {
          create: [...posts],
        },
      },
    });

    console.log("Created User", user);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
