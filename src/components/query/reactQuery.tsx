import { useQuery, UseQueryResult, QueryFunction, QueryKey } from '@tanstack/react-query';

interface IReactQuery<TData = unknown, TError = unknown> {
  queryKey: QueryKey;
  queryFn: QueryFunction<TData, QueryKey>;
  enabled?: boolean;
  refetchOnWindowFocus?: boolean,
  refetchOnMount?: boolean
}

export default function ReactQuery<TData = unknown, TError = unknown>(
  props: IReactQuery<TData, TError>
): UseQueryResult<TData, TError> {
  return useQuery<TData, TError>({
    queryKey: props.queryKey,
    queryFn: props.queryFn,
    enabled: props.enabled || true,
    refetchOnWindowFocus: props.refetchOnWindowFocus ||  false,
    refetchOnMount: props.refetchOnMount || false
  });
}
