import { produce } from "immer";


const TaskState = {
  value: true,
  data: {}
}

// An example slice reducer function that shows how a Redux reducer works inside.
// We'll replace this soon with real app logic.
export default function TaskReducer(taskState = TaskState, action) {
  return produce(taskState, (draft) => {
    switch (action.type) {

      case '@tasks/GET_TASKS_REQUEST': {
        break
      }
      case '@tasks/GET_TASKS_SUCCESS': {
        console.log('action.payload', action.payload)
        draft.value = false;
        draft.data = action.payload;
        break;
      }
      default: {
        return taskState
      }
    }
  })


}
