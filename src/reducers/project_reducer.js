import { PROJECT_OVERVIEW_CLOSE } from '../actions';

const project_reducer = (state, action) => {
  if (action.type === PROJECT_OVERVIEW_CLOSE) {
    return { ...state, isProjectOverviewOpen: false };
  }
};

export default project_reducer;
