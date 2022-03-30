import {useEffect, useState} from "react";

export const useDocumentTitle = (initialTitle?: string) => {
    const [documentTitle, setDocumentTitle] = useState<string>(initialTitle ?? 'Home Page');

    useEffect(() => {
        document.title = documentTitle;
    }, [documentTitle])

    return [documentTitle, setDocumentTitle];
}

