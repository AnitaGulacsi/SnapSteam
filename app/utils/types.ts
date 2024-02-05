export type handleFun = () => void;

export type State = {
  errors?: {
    user_id: string[];
    location: string[];
    description: string[];
    url: string[];
  };
};
