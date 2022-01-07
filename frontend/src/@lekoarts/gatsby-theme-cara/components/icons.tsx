import React from 'react';
import Gatsby from "../../../images/gatsby.svg";
import GitHub from "../../../images/github.svg";
import AWS from "../../../images/aws.svg";
import LinkedIn from "../../../images/linkedin.svg";
import Email from "../../../images/email.svg";
import CV from "../../../images/cv.svg";

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
