export enum KtType {
  Boolean = "0",
  BooleanArray = "1",
  CallBoolean = "2",
  CallBooleanArray = "3",

  String = "4",
  StringArray = "5",
  CallString = "6",
  CallStringArray = "7",

  Float = "8",
  FloatArray = "9",
  CallFloat = "10",
  CallFloatArray = "11",

  Any = "12",
  AnyArray = "13",
  CallAny = "14",
  CallAnyArray = "15",

  MapStringFloat = "16",
  MapStringFloatArray = "17",
  CallMapStringFloat = "18",
  CallMapStringFloatArray = "19",

  MapIntString = "20",
  MapIntStringArray = "21",
  CallMapIntString = "22",
  CallMapIntStringArray = "23",

  CallUnit = "24",

  Get = "25",
  Post = "26",
  Put = "27",
  Delete = "28",
  Body = "29",
  DataClass = "30",
  Interface = "31"
}
export interface IKtKeyword {
  key: KtType;
  value: string;
}
export const KtKeyword: IKtKeyword[] = [
  { key: KtType.Boolean, value: "Boolean" },
  { key: KtType.BooleanArray, value: "List<Boolean>" },
  { key: KtType.CallBoolean, value: "Call<Boolean>" },
  { key: KtType.CallBooleanArray, value: "Call<List<Boolean>>" },

  { key: KtType.String, value: "String" },
  { key: KtType.StringArray, value: "List<String>" },
  { key: KtType.CallString, value: "Call<String>" },
  { key: KtType.CallStringArray, value: "Call<List<String>>" },

  { key: KtType.Float, value: "Float" },
  { key: KtType.FloatArray, value: "List<Float>" },
  { key: KtType.CallFloat, value: "Call<Float>" },
  { key: KtType.CallFloatArray, value: "Call<List<Float>>" },

  { key: KtType.Any, value: "Any" },
  { key: KtType.AnyArray, value: "List<Any>" },
  { key: KtType.CallAny, value: "Call<Any>" },
  { key: KtType.CallAnyArray, value: "Call<List<Any>>" },

  { key: KtType.MapStringFloat, value: "Map<String, Float>" },
  { key: KtType.MapStringFloatArray, value: "List<Map<String, Float>>" },
  { key: KtType.CallMapStringFloat, value: "Call<Map<String, Float>>" },
  {
    key: KtType.CallMapStringFloatArray,
    value: "Call<List<Map<String, Float>>>"
  },

  { key: KtType.MapIntString, value: "Map<Int, String>" },
  { key: KtType.MapIntStringArray, value: "List<Map<Int, String>>" },
  { key: KtType.CallMapIntString, value: "Call<Map<Int, String>>" },
  { key: KtType.CallMapIntStringArray, value: "Call<List<Map<Int, String>>>" },

  { key: KtType.CallUnit, value: "Call<Unit>" },

  { key: KtType.Get, value: "GET" },
  { key: KtType.Post, value: "POST" },
  { key: KtType.Put, value: "PUT" },
  { key: KtType.Delete, value: "DELETE" },

  { key: KtType.Body, value: "Body" },
  { key: KtType.DataClass, value: "data class" },
  { key: KtType.Interface, value: "interface" }
];
