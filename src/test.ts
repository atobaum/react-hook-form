// type Data = {
//   firstName: string;
//   lastName: string;
//   nest: {
//     firstName: string;
//     lastName: string;
//     deep: {
//       firstName: string;
//       lastName: string;
//     }
//   };
//   array: string[];
//   arrayObject: {
//     firstName: string;
//     lastName: string;
//   }[];
//   arrayObjectDeep: {
//     firstName: string;
//     lastName: string;
//     deeper: string[];
//   }[];
// };
//
// type ArrayElementType<A> = A extends readonly (infer T)[] ? T : never

// type Index = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
//
// type PathFinder<T, Key extends keyof T = keyof T> = Key extends string
//   ? T[Key] extends (string | boolean | number | symbol)[]
//     ? `${Key}.${Index}`
//     : T[Key] extends object[]
//       ? `${Key}.${Index}.${PathFinder<ArrayElementType<T[Key]>>}`
//       : T[Key] extends Record<string, any>
//         ? `${Key}.${PathFinder<T[Key]>}`
//         : Key
//   : never;

// type Test1 = PathFinder<Data>;

// function register(name: Test1) {
//   console.log(name)
// }
