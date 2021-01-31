import type {
  Dictionary,
  MapFromReturn,
  Resolver,
  SelectorReturn,
  ValueSelector,
} from '@automapper/types';
import { TransformationType } from '@automapper/types';

export function mapFrom<
  TSource extends Dictionary<TSource> = any,
  TDestination extends Dictionary<TDestination> = any,
  TSelectorReturn = SelectorReturn<TDestination>
>(
  from:
    | ValueSelector<TSource, TDestination, TSelectorReturn>
    | Resolver<TSource, TDestination, TSelectorReturn>
): MapFromReturn<TSource, TDestination, TSelectorReturn> {
  if (isResolver(from)) {
    return [TransformationType.MapFrom, from.resolve.bind(from), null];
  }

  return [TransformationType.MapFrom, from, from];
}

function isResolver(fn: ValueSelector | Resolver): fn is Resolver {
  return 'resolve' in fn;
}
