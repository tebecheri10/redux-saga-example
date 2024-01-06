interface InitialState {
  loading: boolean;
  data: any[] | null;
  error: string;
}

export const initialState: InitialState = {
  loading: false,
  data:null,
  error: "",
};

interface Action {
  type: string;
  payload?: any;
}

export const TodosReducer = (
  state: InitialState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "REQUEST_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "REQUEST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "REQUEST_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
