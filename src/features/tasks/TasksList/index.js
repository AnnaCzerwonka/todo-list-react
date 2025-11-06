import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectTasks, selectHideDone, toggleTaskDone, removeTask } from "../tasksSlice";
import { List, Item, Button, Content, StyledLink } from "./styled";

const TasksList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const query = params.get("szukaj") || "";

    const filteredTasks = tasks
        .filter(task => !hideDone || !task.done)
        .filter(task => task.content.toLowerCase().includes(query.trim().toLowerCase()));

    return (
        <List>
            {filteredTasks.map(task => (
                <Item key={task.id} $done={task.done}>
                    <Button $toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✓" : ""}
                    </Button>
                    <Content $done={task.done}>
                        <StyledLink to={`/zadanie/${task.id}`}>{task.content}</StyledLink>
                    </Content>
                    <Button $remove onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    );
};

export default TasksList;
