import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const course = await prisma.course.create({
    data: {
      name: 'Curso de Mecânica',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      lessons: {
        create: {
          name: 'Lição 1',
          order: 0,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          contents: {
            createMany: {
              data: [
                {
                  name:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  size: 0,
                  title: 'teste1',
                  type: 'text',
                },
                {
                  name: 'imagem.jpg',
                  size: 0,
                  title: 'teste2',
                  type: 'image',
                },
                {
                  name:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  size: 0,
                  title: 'teste3',
                  type: 'text',
                },
                {
                  name:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  size: 0,
                  title: 'teste3',
                  type: 'video',
                },
              ],
            },
          },
        },
      },
    },
  });

  console.log({ course });
}
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
