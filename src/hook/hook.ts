import { useEffect, useRef } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppState, AppDispatch } from "@/store/store";

export const useInterval = (callback: Function, delay: number) => {
	const savedCallback = useRef<Function>();
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);
	useEffect(() => {
		const handler = (...args: any) => savedCallback.current?.(...args);

		if (delay !== null) {
			const id = setInterval(handler, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;