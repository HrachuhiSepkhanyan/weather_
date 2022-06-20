import { AppDispatch, RootState } from "./../redux/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
export const useCustomDispatch = () => useDispatch<AppDispatch>();
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
