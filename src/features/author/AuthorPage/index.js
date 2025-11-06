import { Wrapper, Title, SectionBox, Name, Content } from "./styled";

const AuthorPage = () => (
  <Wrapper>
    <Title>O autorze</Title>
    <SectionBox>
      <Name>Anna Czerwonka</Name>
    </SectionBox>
    <SectionBox>
      <Content>
        Tworzę ten projekt w ramach nauki Reacta i rozwijania umiejętności
        programowania front-endowego. Interesuję się nowoczesnymi technologiami,
        estetyką interfejsów i projektowaniem intuicyjnych aplikacji. W wolnym
        czasie lubię poznawać nowe narzędzia, które ułatwiają pracę z kodem.
      </Content>
    </SectionBox>
  </Wrapper>
);

export default AuthorPage;