import { useAppDispatch } from "./useReduxHooks";

interface IUseAuth {
  dispatchAction: Function;
  afterCallBack: Function;
}

const useAuth = ({ dispatchAction, afterCallBack }: IUseAuth) => {
  const dispatch = useAppDispatch();

  return (res: { jwt: string; user: any }) => {
    dispatch(dispatchAction(res.user));
    localStorage.setItem("token", res.jwt);
    afterCallBack();
  };
};

export default useAuth;
