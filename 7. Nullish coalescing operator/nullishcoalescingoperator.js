// Nullish coalescing Operator is represented by '??'

// ?? returns the first value which is not null or undefined

let user;

console.log(user ?? 'Anonymous'); // Since the user is undefined, anonymous prints out

console.log(user ?? null ?? 'John' ?? 'Anonymous'); // John is the first not null/undefined value

// Difference between || and ?? is that || returns the first truthy value while ?? returns first not null/undefined value

console.log(0 || 100); // 100 is the first truthy value
console.log(0 ?? 100); // 0 is the first not null/undefined value