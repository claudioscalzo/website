import React from 'react';
import Gatsby from "../../../images/icons/gatsby.svg";
import GitHub from "../../../images/icons/github.svg";
import AWS from "../../../images/icons/aws.svg";
import LinkedIn from "../../../images/icons/linkedin.svg";
import Email from "../../../images/icons/email.svg";
import CV from "../../../images/icons/cv.svg";

const icons = {
  Gatsby: Gatsby,
  GitHub: GitHub,
  AWS: AWS,
  LinkedIn: LinkedIn,
  Email: Email,
  CV: CV,
}

export default function Flag(props) {
  const Icon = icons[props.tool];
  return <Icon width={props.width}/>;
}
