/** @jsx jsx */
import { jsx } from "theme-ui";
import Icon from "./icons";

type ProjectCardProps = {
  icon: string;
  link: string;
  title: string;
  children: React.ReactNode;
  bg: string;
};

const ProjectCard = ({ link, icon, title, children, bg }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <div sx={{ display: "block", float: "right", verticalAlign: "middle" }}>
      <Icon tool={icon} width={100} />
    </div>
    <div
      sx={{
        letterSpacing: `wide`,
        pt: 0,
        fontSize: [25, 30, 32],
        fontWeight: `semibold`,
        lineHeight: 1,
        mb: 1,
      }}
    >
      {title}
    </div>
    <div
      sx={{
        maxWidth: "25rem",
        opacity: 0.85,
        textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
        p: {
          fontSize: [20, 23, 25],
          color: `white`,
          margin: 0,
        },
      }}
    >
      {children}
    </div>
  </a>
);

export default ProjectCard;
