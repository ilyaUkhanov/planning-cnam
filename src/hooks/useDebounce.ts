import { useEffect, useRef, useState } from "react";

 export function useDebounce<T>(initialValue: T, time: number = 500,funcToSend: () => void=()=> {}) {
    const [defaultValue, setDefaultValue] = useState<T>(initialValue);
    const [debounceValue] = useDebouncedValue<T>(defaultValue,time);
    
    useEffect(()=>{
        funcToSend();
    },[debounceValue]);
    
    
    return [defaultValue,setDefaultValue] as const;
}

function useDebouncedValue<T = any>(value: T, wait: number, options = { leading: false }) {
    const [_value, setValue] = useState(value);
    const mountedRef = useRef(false);
    const timeoutRef = useRef<any>(null);
    const cooldownRef = useRef(false);
  
    const cancel = () => clearTimeout(timeoutRef.current);
  
    useEffect(() => {
      if (mountedRef.current) {
        if (!cooldownRef.current && options.leading) {
          cooldownRef.current = true;
          setValue(value);
        } else {
          cancel();
          timeoutRef.current = setTimeout(() => {
            cooldownRef.current = false;
            setValue(value);
          }, wait);
        }
      }
    }, [value, options.leading, wait]);
  
    useEffect(() => {
      mountedRef.current = true;
      return cancel;
    }, []);
  
    return [_value, cancel] as const;
  }