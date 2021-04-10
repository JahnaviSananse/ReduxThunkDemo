import ProcessType from './Post.types';

const INITIAL_STATE = {
  item: [],
  isLoading: false,
  error: undefined,
};

const PostReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProcessType.PROCESS_START:
      return {
        ...state,
        isLoading: true,
      };
    case ProcessType.PROCESS_SUCCESS:
      return {
        ...state,
        item: [...state.item, action.payload],
      };
    case ProcessType.PROCESS_STOP:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default PostReducer;
