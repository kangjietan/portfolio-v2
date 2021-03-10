import React, { MutableRefObject, useEffect } from "react";

/**
 * This hook allows you to detect clicks outside of a specified element.
 * https://usehooks.com/useOnClickOutside/
 * @param ref 
 * @param handler 
 */
function useOnClickOutside(
  ref: MutableRefObject<any>,
  handler: React.Dispatch<React.SetStateAction<any>>
) {
  useEffect(
    () => {
      const listener = (event: Event) => {
        const node = ref.current;
        // Do nothing if clicking ref's element or descendent elements
        if (!node || node.contains(event.target)) {
          return;
        }
        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}

export default useOnClickOutside;
