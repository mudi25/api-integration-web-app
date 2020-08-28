export enum TsType {
  Boolean = "0",
  BooleanOrUndefined = "1",
  BooleanArray = "2",
  BooleanArrayOrUndefined = "3",
  PromiseBoolean = "4",
  PromiseBooleanArray = "5",
  PromiseResponseBoolean = "6",
  PromiseResponseBooleanArray = "7",
  ResponseBoolean = "8",
  ResponseBooleanArray = "9",

  String = "10",
  StringOrUndefined = "11",
  StringArray = "12",
  StringArrayOrUndefined = "13",
  PromiseString = "14",
  PromiseStringArray = "15",
  PromiseResponseString = "16",
  PromiseResponseStringArray = "17",
  ResponseString = "18",
  ResponseStringArray = "19",

  Number = "20",
  NumberOrUndefined = "21",
  NumberArray = "22",
  NumberArrayOrUndefined = "23",
  PromiseNumber = "24",
  PromiseNumberArray = "25",
  PromiseResponseNumber = "26",
  PromiseResponseNumberArray = "27",
  ResponseNumber = "28",
  ResponseNumberArray = "29",

  Any = "30",
  AnyOrUndefined = "31",
  AnyArray = "32",
  AnyArrayOrUndefined = "33",
  PromiseAny = "34",
  PromiseAnyArray = "35",
  PromiseResponseAny = "36",
  PromiseResponseAnyArray = "37",
  ResponseAny = "38",
  ResponseAnyArray = "39",

  MapStringNumber = "40",
  MapStringNumberOrUndefined = "41",
  MapStringNumberArray = "42",
  MapStringNumberArrayOrUndefined = "43",
  PromiseMapStringNumber = "44",
  PromiseMapStringNumberArray = "45",
  PromiseResponseMapStringNumber = "46",
  PromiseResponseMapStringNumberArray = "47",
  ResponseMapStringNumber = "48",
  ResponseMapStringNumberArray = "49",

  MapIntString = "50",
  MapIntStringOrUndefined = "51",
  MapIntStringArray = "52",
  MapIntStringArrayOrUndefined = "53",
  PromiseMapIntString = "54",
  PromiseMapIntStringArray = "55",
  PromiseResponseMapIntString = "56",
  PromiseResponseMapIntStringArray = "57",
  ResponseMapIntString = "58",
  ResponseMapIntStringArray = "59",

  Void = "61",
  PromiseVoid = "62",
  ResponseVoid = "63",
  PromiseResponseVoid = "64",

  Get = "65",
  Post = "66",
  Put = "67",
  Delete = "68",
  Body = "79",
  Interface = "70",
  Class = "71"
}
export interface ITsKeyword {
  key: TsType;
  value: string;
}
export const TsKeyword: ITsKeyword[] = [
  { key: TsType.Boolean, value: "boolean" },
  { key: TsType.BooleanOrUndefined, value: "boolean | undefined" },
  { key: TsType.BooleanArray, value: "boolean[]" },
  { key: TsType.BooleanArrayOrUndefined, value: "boolean[] | undefined" },
  { key: TsType.PromiseBoolean, value: "Promise<boolean>" },
  { key: TsType.PromiseBooleanArray, value: "Promise<boolean[]>" },
  { key: TsType.ResponseBoolean, value: "Response<boolean>" },
  { key: TsType.ResponseBooleanArray, value: "Response<boolean[]>" },
  { key: TsType.PromiseResponseBoolean, value: "Promise<Response<boolean>>" },
  {
    key: TsType.PromiseResponseBooleanArray,
    value: "Promise<Response<boolean[]>>"
  },

  { key: TsType.String, value: "string" },
  { key: TsType.StringOrUndefined, value: "string | undefined" },
  { key: TsType.StringArray, value: "string[]" },
  { key: TsType.StringArrayOrUndefined, value: "string[] | undefined" },
  { key: TsType.PromiseString, value: "Promise<string>" },
  { key: TsType.PromiseStringArray, value: "Promise<string[]>" },
  { key: TsType.ResponseString, value: "Response<string>" },
  { key: TsType.ResponseStringArray, value: "Response<string[]>" },
  { key: TsType.PromiseResponseString, value: "Promise<Response<string>>" },
  {
    key: TsType.PromiseResponseStringArray,
    value: "Promise<Response<string[]>>"
  },

  { key: TsType.Number, value: "number" },
  { key: TsType.NumberOrUndefined, value: "number | undefined" },
  { key: TsType.NumberArray, value: "number[]" },
  { key: TsType.NumberArrayOrUndefined, value: "number[] | undefined" },
  { key: TsType.PromiseNumber, value: "Promise<number>" },
  { key: TsType.PromiseNumberArray, value: "Promise<number[]>" },
  { key: TsType.ResponseNumber, value: "Response<number>" },
  { key: TsType.ResponseNumberArray, value: "Response<number[]>" },
  { key: TsType.PromiseResponseNumber, value: "Promise<Response<number>>" },
  {
    key: TsType.PromiseResponseNumberArray,
    value: "Promise<Response<number[]>>"
  },

  { key: TsType.Any, value: "any" },
  { key: TsType.AnyOrUndefined, value: "any | undefined" },
  { key: TsType.AnyArray, value: "any[]" },
  { key: TsType.AnyArrayOrUndefined, value: "any[] | undefined" },
  { key: TsType.PromiseAny, value: "Promise<any>" },
  { key: TsType.PromiseAnyArray, value: "Promise<any[]>" },
  { key: TsType.ResponseAny, value: "Response<any>" },
  { key: TsType.ResponseAnyArray, value: "Response<any[]>" },
  { key: TsType.PromiseResponseAny, value: "Promise<Response<any>>" },
  {
    key: TsType.PromiseResponseAnyArray,
    value: "Promise<Response<any[]>>"
  },

  { key: TsType.MapStringNumber, value: "[string, number]" },
  {
    key: TsType.MapStringNumberOrUndefined,
    value: "[string, number] | undefined"
  },
  { key: TsType.MapStringNumberArray, value: "[string, number][]" },
  {
    key: TsType.MapStringNumberArrayOrUndefined,
    value: "[string, number][] | undefined"
  },
  { key: TsType.PromiseMapStringNumber, value: "Promise<[string, number]>" },
  {
    key: TsType.PromiseMapStringNumberArray,
    value: "Promise<[string, number][]>"
  },
  { key: TsType.ResponseMapStringNumber, value: "Response<[string, number]>" },
  {
    key: TsType.ResponseMapStringNumberArray,
    value: "Response<[string, number][]>"
  },
  {
    key: TsType.PromiseResponseMapStringNumber,
    value: "Promise<Response<[string, number]>>"
  },
  {
    key: TsType.PromiseResponseMapStringNumberArray,
    value: "Promise<Response<[string, number][]>>"
  },

  { key: TsType.MapIntString, value: "[number, string]" },
  {
    key: TsType.MapIntStringOrUndefined,
    value: "[number, string] | undefined"
  },
  { key: TsType.MapIntStringArray, value: "[number, string][]" },
  {
    key: TsType.MapIntStringArrayOrUndefined,
    value: "[number, string][] | undefined"
  },
  { key: TsType.PromiseMapIntString, value: "Promise<[number, string]>" },
  {
    key: TsType.PromiseMapIntStringArray,
    value: "Promise<[number, string][]>"
  },
  { key: TsType.ResponseMapIntString, value: "Response<[number, string]>" },
  {
    key: TsType.ResponseMapIntStringArray,
    value: "Response<[number, string][]>"
  },
  {
    key: TsType.PromiseResponseMapIntString,
    value: "Promise<Response<[number, string]>>"
  },
  {
    key: TsType.PromiseResponseMapIntStringArray,
    value: "Promise<Response<[number, string][]>>"
  },

  { key: TsType.Void, value: "void" },
  { key: TsType.PromiseVoid, value: "Promise<void>" },
  { key: TsType.ResponseVoid, value: "Response<void>" },
  { key: TsType.PromiseResponseVoid, value: "Promise<Response<void>>" },

  { key: TsType.Get, value: "Get" },
  { key: TsType.Post, value: "Post" },
  { key: TsType.Put, value: "Put" },
  { key: TsType.Delete, value: "Delete" },

  { key: TsType.Body, value: "Body" },
  { key: TsType.Interface, value: "interface" },
  { key: TsType.Class, value: "class" }
];
