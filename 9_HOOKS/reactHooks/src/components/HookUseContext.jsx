import { Children, createContext } from 'react';

export const SomeContext = createContext();
export const HookUseContext = ({ children }) => {
  const contextValue = 'testing context';
  <SomeContext.Provider value={contextValue}>{children}</SomeContext.Provider>;
};
