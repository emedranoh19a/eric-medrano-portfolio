type OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ZeroToNine = 0 | OneToNine;

type Year = `${number}${number}${number}${number}`;
type Month = `0${OneToNine}` | `1${0 | 1 | 2}`;
type Day = `0${OneToNine}` | `${1 | 2}${ZeroToNine}` | `3${0 | 1}`;

// The strict YYYY-MM-DD type
export type DateString = `${Year}-${Month}-${Day}`;
