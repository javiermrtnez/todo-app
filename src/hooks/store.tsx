import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store';
import type { TypedUseSelectorHook } from 'react-redux';

// Use throughout your app instead of plain `useSelector` and `useDispatch`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
