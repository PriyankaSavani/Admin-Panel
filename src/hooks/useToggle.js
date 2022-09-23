import { useCallback, useState } from 'react';

export default function useToggle(initialState = false) {
    const [isOpen, setIsOpen] = useState(initialState);

    const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

    return [isOpen, toggle];
}