import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 20px 0;
`;

export const SectionBox = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 25px 30px;
  border-top: 1px solid #ccc;
`;

export const Name = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`;

export const Content = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  text-align: justify;
  margin: 0;
`;