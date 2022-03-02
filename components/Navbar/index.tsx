import Link from "next/link";
import { Container, Heading, Navbar } from "react-bulma-components";

const AppNavbar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <a className="navbar-item">
                <Heading>Marcus blog</Heading>
              </a>
            </Link>
            <Navbar.Burger data-target="navbarMenu" />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container align="right">
              <Navbar.Item active>Home</Navbar.Item>
              <Navbar.Item>Examples</Navbar.Item>
              <Navbar.Item>Features</Navbar.Item>
              <Navbar.Item>Team</Navbar.Item>
              <Navbar.Item>Archives</Navbar.Item>
              <Navbar.Item>Help</Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
