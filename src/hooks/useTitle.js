import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} | ReactJS Tutorial`
    }, [title]);

    return null;
}
