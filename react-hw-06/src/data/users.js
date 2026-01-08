export const users = Array.from({ length: 500 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    age: 18 + (i % 40),
    email: `user${i + 1}@mail.com`,
}));