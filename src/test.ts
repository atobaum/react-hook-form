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
//
// type TupleOf<A extends number, R extends number[] = []> =
//   R['length'] extends A ? R : TupleOf<A, [...R, R['length']]>;
//
// type Integers = TupleOf<45>;
//
// type Indexes = Integers[number];
//
// type PathFinder<T, Key extends keyof T = keyof T> = Key extends string
//   ? T[Key] extends (string | boolean | number | symbol)[]
//     ? `${Key}.${Indexes}`
//     : T[Key] extends object[]
//       ? `${Key}.${Indexes}.${PathFinder<ArrayElementType<T[Key]>>}`
//       : T[Key] extends Record<string, any>
//         ? `${Key}.${PathFinder<T[Key]>}`
//         : Key
//   : never;
//
// type Test1 = PathFinder<Data>;
//
// function register(name: Test1) {
//   console.log(name)
// }
