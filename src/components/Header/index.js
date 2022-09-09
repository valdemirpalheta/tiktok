import {
  Container,
  Content,
  LogoContainer,
  LogoIcon,
  Logo,
  OptionsContainer,
  Icon,
  Avatar
} from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/images/logoIcon.svg">

          </LogoIcon>
          <Logo src="/images/logo.svg">

          </Logo>
        </LogoContainer>
        <OptionsContainer>
          <Icon src="/images/uploadIcon.svg"></Icon>
          <Avatar>
            <img src="https://instagram.fbel6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/96284594_2990856274294369_4002449580414205952_n.jpg?_nc_ht=instagram.fbel6-1.fna.fbcdn.net&_nc_ohc=4jTGhYOMDhMAX813ff1&tp=1&oh=69079be8de35478584f31608471dd772&oe=5FF250A8"/>
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  );
};

export default Header;