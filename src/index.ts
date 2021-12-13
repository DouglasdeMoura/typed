type MyObj = {
  a: string;
}

function typeFunctionObj(param: MyObj): MyObj {
  return param;
}

function typedFunctionStr(param: string): string {
  return param;
}

function typedFunctionNum(param: number): number {
  return param;
}

function typedFunctionBool(param: boolean): boolean {
  return param;
}

function typedFunctionObjThrow(param: MyObj): MyObj {
  if (param.a) {
    return param;
  }

  throw new Error('param.a is not defined');
}

console.log('-- STRING --')
console.log(typedFunctionStr(2));
console.log(typedFunctionStr('2'));

console.log('-- NUMBER --')
console.log(typedFunctionNum(2));
console.log(typedFunctionNum('2'));

console.log('-- OBJECT --')
console.log(typeFunctionObj({}));
console.log(typeFunctionObj({ a: 'test'}));
console.log(typeFunctionObjThrow({ b: 'test2'}));
console.log(typeFunctionObj('2'));
