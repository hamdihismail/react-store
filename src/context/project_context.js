import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/project_reducer';
import { PROJECT_OVERVIEW_CLOSE } from '../actions';

const initialState = {
  isProjectOverviewOpen: true,
};

const ProjectContext = React.createContext();

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const closeProjectOverview = () => {
    dispatch({ type: PROJECT_OVERVIEW_CLOSE });
  };

  return (
    <ProjectContext.Provider
      value={{
        ...state,
        closeProjectOverview,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
// make sure use
export const useProjectContext = () => {
  return useContext(ProjectContext);
};
