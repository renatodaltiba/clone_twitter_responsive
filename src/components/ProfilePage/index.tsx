import { Feed } from "../Feed";
import { Avatar, Banner, CakeIcon, Container, EditButton, Followage, LocationIcon, ProfileData } from "./styles";

export function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outline>Editar perfil</EditButton>
    

      <h1>Renato D.</h1>
      <h2>@renatodaltiba</h2>

      <p>Developer at <a href="ariquemes.ro.gov.br">@ariquemes</a></p>

      <ul>
        <li>
          <LocationIcon />
          Ariquemes, Brasil
        </li>
        <li>
          <CakeIcon />
          Nascido(a) em 26 de julho de 1996
        </li>
      </ul>
      <Followage>
        <span>seguindo <strong>94</strong></span>
        <span><strong>94 </strong>seguidores</span>
      </Followage>
      </ProfileData>

      <Feed />
    </Container>
    )
}