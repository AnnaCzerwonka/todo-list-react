import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 20px 0;
`;

const SectionBox = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 25px 30px;
  border-top: 1px solid #ccc;
`;

const TaskContent = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

const TaskStatus = styled.p`
  font-size: 18px;
  margin: 0;
`;

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector(selectTasks).find((task) => String(task.id) === id);

  return (
    <Wrapper>
      <Title>Szczegóły zadania</Title>
      {task ? (
        <>
          <SectionBox>
            <TaskContent>{task.content}</TaskContent>
          </SectionBox>
          <SectionBox>
            <TaskStatus>
              <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
            </TaskStatus>
          </SectionBox>
        </>
      ) : (
        <SectionBox>
          <TaskContent>Nie znaleziono takiego zadania 😕</TaskContent>
        </SectionBox>
      )}
    </Wrapper>
  );
};

export default TaskPage;