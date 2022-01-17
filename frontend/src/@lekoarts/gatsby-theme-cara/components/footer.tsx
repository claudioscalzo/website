/** @jsx jsx */
import { Box, Flex, Link, jsx } from "theme-ui";
import Icon from "./icons";

const Footer = () => {
  return (
    <Box as="footer" variant="footer">
      &copy; {new Date().getFullYear()} Claudio Scalzo
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 1,
          color: `text`,
          fontWeight: `normal`,
          fontSize: `small`,
          a: { fontSize: `small` },
        }}
      >
        <Link
          aria-label="Link to the Gatsby source code"
          href="https://github.com/gatsbyjs/gatsby"
          style={{
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Powered by the&nbsp;
          <Icon tool="Gatsby" width={15} />
          &nbsp;Gatsby web framework
        </Link>
      </Flex>
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 1,
          color: `text`,
          fontWeight: `normal`,
          fontSize: `small`,
          a: { fontSize: `small` },
        }}
      >
        <Link
          aria-label="Link to the frontend source code"
          href="https://github.com/claudioscalzo/website/tree/master/frontend"
          style={{
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Source code available on&nbsp;
          <Icon tool="GitHub" width={15} />
          &nbsp;GitHub
        </Link>
      </Flex>
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 1,
          color: `text`,
          fontWeight: `normal`,
          fontSize: `small`,
          a: { fontSize: `small` },
        }}
      >
        <Link
          aria-label="Link to the infrastructure source code"
          href="https://github.com/claudioscalzo/website/tree/master/infrastructure"
          style={{
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Hosted on&nbsp;
          <Icon tool="AWS" width={20} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
