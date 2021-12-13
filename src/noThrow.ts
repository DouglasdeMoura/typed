export class Left<L, A> {
  constructor(readonly value: L) {}

  isLeft(): this is Left<L, A> {
    return true;
  }

  isRight(): this is Right<L, A> {
    return false;
  }
}

export class Right<L, A> {
  constructor(readonly value: A) {}

  isLeft(): this is Left<L, A> {
    return false;
  }

  isRight(): this is Right<L, A> {
    return true;
  }
}

export type Either<L, A> = Left<L, A> | Right<L, A>

export const left = <L, A>(value: L): Either<L, A> => new Left(value)
export const right = <L, A>(value: A): Either<L, A> => new Right(value)

/**  -- **/

type InvalidObject = {
  code: string
  message: string
}

type MyObj = {
  a: string
}

function typedFnObj_noThrow(param: MyObj): Either<InvalidObject, MyObj> {
  if (param?.a) {
    return right(param)
  }

  return left({
    code: 'INVALID_PARAM',
    message: 'Invalid param',
  })
}

const invalidInput = typedFnObj_noThrow(null)
const validInput = typedFnObj_noThrow({ a: 'a' })

console.log(invalidInput, invalidInput.isLeft(), invalidInput.isRight())
console.log(validInput, validInput.isLeft(), validInput.isRight())
