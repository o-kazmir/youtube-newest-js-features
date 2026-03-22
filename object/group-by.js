const users = [
    { name: "Іван", role: "admin" },
    { name: "Оля", role: "user" },
    { name: "Петро", role: "admin" },
    { name: "Марія", role: "user" },
];

const grouped = users.reduce((acc, user) => {
    if (!acc[user.role]) {
        acc[user.role] = [];
    }

    acc[user.role].push(user);
    return acc;
}, {});

console.log(grouped);

// {
//     admin: [
//      { name: 'Іван', role: 'admin' }, { name: 'Петро', role: 'admin' }
//     ],
//     user: [
//      { name: 'Оля', role: 'user' }, { name: 'Марія', role: 'user' }
//     ]
// }

// ------------------------------------------------

const grouped = Object.groupBy(users, user => user.role);

console.log(grouped);