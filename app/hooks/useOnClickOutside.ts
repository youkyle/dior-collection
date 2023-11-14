/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";

export default (ref: React.MutableRefObject<undefined>, handler: () => void) => {
    useEffect(() => {
        const listener = (event: { target: any; }) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }

            handler();
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
};