import { useEffect, useState } from "react";

export default function useLocalStorage (key, defaultValue) {
    const [state, setState] = useState(() => {
        return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
      });

      useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
      }, [key, state]);

      return [state, setState];
};