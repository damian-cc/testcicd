import React, { useState } from "react";

export enum AccountGroup {
  GUEST = "guest",
  USER = "user",
  ADMIN = "admin",
}

export interface Account {
  group?: AccountGroup;
  email?: string;
}

interface AccountContextType {
  account: Account;
  setAccount: (account: Account) => void;
}

const AccountContext = React.createContext<AccountContextType>(
  {} as AccountContextType
);

export const AccountProvider = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [account, setAccount] = useState<Account>({});

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {props.children}
    </AccountContext.Provider>
  );
};
export default AccountContext;
