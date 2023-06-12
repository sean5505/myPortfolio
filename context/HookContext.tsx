import {createContext} from 'react';

type Props = {
    isHookLoaded: boolean,
    setIsHookLoaded: (isHookLoaded : boolean) => void,
}
export const HookContext = createContext<Props>({
    isHookLoaded: false,
    setIsHookLoaded: () => {},
});

// 