import { ProfilePage } from "../ProfilePage";
import { BackIcon, BellIcon, BottomMenu, Container, EmailIcon, Header, HomeIcon, ProfileInfo, SearchIcon } from "./styles";
export default function Main() {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Renato D.</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />


      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  )
}