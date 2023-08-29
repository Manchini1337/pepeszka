export interface IPost {
  id: number;
  type: 'before' | 'main' | 'after' | 'summary';
  content: 'string';
}

const mockPosts: IPost[] = [
  ...Array.from(
    { length: 10 },
    (_, i) =>
      ({
        id: i + 1,
        type: 'before',
        content: `Before Post ${i + 1}`,
      } as unknown as IPost)
  ),
  ...Array.from(
    { length: 10 },
    (_, i) =>
      ({
        id: i + 11,
        type: 'main',
        content: `Main Post ${i + 1}`,
      } as unknown as IPost)
  ),
  ...Array.from(
    { length: 10 },
    (_, i) =>
      ({
        id: i + 21,
        type: 'after',
        content: `After Post ${i + 1}`,
      } as unknown as IPost)
  ),
  ...Array.from(
    { length: 10 },
    (_, i) =>
      ({
        id: i + 31,
        type: 'summary',
        content: `Summary Post ${i + 1}`,
      } as unknown as IPost)
  ),
];

const getRandomItems = (arr: IPost[], count: number) =>
  arr.sort(() => 0.5 - Math.random()).slice(0, count);

export const getRandomPosts = (
  mainCount: number,
  afterCount: number,
  summaryCount: number
) => {
  const beforePosts = mockPosts.filter(({ type }) => type === 'before');
  const mainPosts = mockPosts.filter(({ type }) => type === 'main');
  const afterPosts = mockPosts.filter(({ type }) => type === 'after');
  const summaryPosts = mockPosts.filter(({ type }) => type === 'summary');

  return [
    ...getRandomItems(beforePosts, 1),
    ...getRandomItems(mainPosts, mainCount),
    ...getRandomItems(afterPosts, afterCount),
    ...getRandomItems(summaryPosts, summaryCount),
  ];
};
