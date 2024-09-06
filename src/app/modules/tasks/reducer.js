import { produce } from "immer";

const TaskState = {
  value: true,
  isAddingNewTask: false,
  isMainColumnOpen: true,
  currSelectedTab: null,
  data: {}
}

export default function TaskReducer(taskState = TaskState, action) {
  return produce(taskState, (draft) => {
    switch (action.type) {
      case '@tasks/GET_TASKS_REQUEST': {
        break;
      }
      case '@tasks/GET_TASKS_SUCCESS': {
        draft.value = false;
        draft.data = action.payload;
        break;
      }
      case '@tasks/ADD_TASKS_REQUEST': {
        draft.isAddingNewTask = true;
        break;
      }
      case '@tasks/ADD_TASKS_SUCCESS': {
        draft.isAddingNewTask = false;
        draft.data = action.payload;
      }
      case '@tasks/ADD_TASKS_FAILURE': {
        draft.isAddingNewTask = false;
        break;
      }
      case '@tasks/CHANGE_MAIN_COLUMN_STATE': {
        draft.isMainColumnOpen = !taskState.isMainColumnOpen;
        break;
      }
      case '@tasks/CHANGE_CURR_TAB_TO': {
        draft.currSelectedTab = action.payload;
        break;
      }
      default: {
        return taskState
      }
    }
  })


}
