declare interface IUseMgtCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'UseMgtCommandSetStrings' {
  const strings: IUseMgtCommandSetStrings;
  export = strings;
}
