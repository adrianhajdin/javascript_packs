// useState hook 
// Returns a stateful value, and a function to update it.
const [state, setstate] = useState(initialState);

// useEffect hook
// Accepts a function that contains imperative, possibly effectful code.
// @param effect — Imperative function that can return a cleanup function
// @param deps — If present, effect will only activate if the values in the list change.
useEffect(() => {
    effect
    return () => {
        cleanup
    }
}, [input]);

// useContext hook
// Accepts a context object (the value returned from React.createContext) and returns the current context value, as given by the nearest context provider for the given context.
const context = useContext(contextValue);

// useReducer hook
// An alternative to useState.
// useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values. It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
const [state, dispatch] = useReducer(reducer, initialState, init)

// useMemo hook
// useMemo will only recompute the memoized value when one of the deps has changed.
// Usage note: if calling useMemo with a referentially stable function, also give it as the input in the second argument.
useMemo(() => {}, input);

// useCallback hook
// useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.
useCallback(
    () => {
        callback
    },
    [input],
);

// useRef hook
// useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
// Note that useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.
const ref = useRef(initialValue)