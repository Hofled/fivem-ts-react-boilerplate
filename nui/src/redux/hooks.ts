import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootStateType, RootDispatch } from './store';

export const useRootDispatch = () => useDispatch<RootDispatch>();
export const useRootSelector: TypedUseSelectorHook<RootStateType> = useSelector;