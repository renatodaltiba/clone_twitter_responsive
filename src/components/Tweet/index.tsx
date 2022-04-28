import { Avatar, Body, CommentIcon, Container, Content, Description, Dot, Header, Icons, ImageContent, LikeIcon, Retweeted, RetweetIcon, Status, Time, TwitterIcon } from "./styles";

export function Tweet () {
  return (
    <Container>
      <Retweeted>
        <TwitterIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>renatodaltiba</strong>
            <span>@renatodaltiba</span>
            <Dot />
            <Time>27 de jun</Time>
          </Header>

          <Description>Foguete não tem ré</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              18
            </Status>

          </Icons>
        </Content>
      </Body>
    </Container>
  )
}