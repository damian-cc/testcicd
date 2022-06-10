import { useContext, useEffect, useState } from "react";
import AccountContext, { AccountGroup } from "context/accountContext";
import api from "utils/api";
import config from "config";

type Login = {
  email: string;
  password: string;
};

const useAccount = () => {
  const { account, setAccount } = useContext(AccountContext);
  const [error, setError] = useState();
  const [processing, setProcessing] = useState(false);

  // try to get account information
  useEffect(() => {
    if (!account.group) {
      api
        .get(config.api.account)
        .then(({ data }) => {
          setAccount(data);
        })
        .catch(() => {
          setAccount({ group: AccountGroup.GUEST });
        });
    }
  }, []);

  const login = (value: Login) => {
    setError(undefined);
    setProcessing(true);

    api
      .post(config.api.login, value)
      .then(({ data }) => {
        setAccount(data);
        window.location.href = "/";
      })
      .catch(
        ({
          response: {
            data: { error_code },
          },
        }) => setError(error_code)
      )
      .finally(() => setProcessing(false));
  };

  return { account, setAccount, login, error, processing };
};

export default useAccount;
