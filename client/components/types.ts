export interface State {
  text: string,
};

export interface Store {
  path: string,
};

export interface Handlers {
  input: (e: React.ChangeEvent<HTMLInputElement>) => void,
  search: (e: React.ChangeEvent<HTMLFormElement>) => void,
};

export interface Props {
};
