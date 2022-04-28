import Button from "../Button";
import { Avatar, BellIcon, Bottomside, Container, EmailIcon, ExitIcon, FavoriteIcon, HomeIcon, Logo, MenuButton, ProfileData, ProfileIcon, Topside } from "./styles";

export function MenuBar() {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>
        <MenuButton className="active">
          <ProfileIcon  /> 
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>
      <Bottomside>
        <Avatar />
        <ProfileData>
          <strong>Renato Daltiba</strong>
          <span>@renatodaltiba</span>

        </ProfileData>
        <ExitIcon />

      </Bottomside>
    </Container>
  )
}