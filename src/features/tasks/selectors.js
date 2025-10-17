export const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;

export const selectHideDone = (state) => selectTasksState(state).hideDone;

export const selectAreTasksEmpty = (state) =>
    selectTasks(state).length === 0;

export const selectIsEveryTaskDone = (state) =>
    selectTasks(state).every(({ done }) => done);

export const selectIsEveryTaskUndone = (state) =>
    selectTasks(state).every(({ done }) => !done);
