import { useEffect } from 'react';

const useClickOutside = (ref, clickOutside) => {
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        clickOutside();
      }
    }

    // Bind
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // dispose
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, clickOutside]);
};

export default useClickOutside;
