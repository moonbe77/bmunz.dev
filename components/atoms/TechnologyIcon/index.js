import React from 'react';
import PropTypes from 'prop-types';
import {
  DiMysql,
  DiGithub,
  DiHtml5,
  DiFirebase,
  DiPhp,
  DiReact,
  DiNodejs,
  DiJsBadge,
  DiSass,
  DiJqueryLogo,
  DiCss3,
} from 'react-icons/di';

const TechnologyIcon = ({ tech }) => {
  switch (tech) {
    case 'React.js':
      return <DiReact />;
    case 'CSS':
      return <DiCss3 />;
    case 'Next.js':
      return <span>Next.js</span>;
    case 'Styled Components':
      return <DiSass />;
    case 'Express.js':
      return <span>Express</span>;
    case 'MySQL':
      return <DiMysql />;
    case 'HTML5':
      return <DiHtml5 />;
    case 'Firebase':
      return <DiFirebase />;
    case 'jQuery':
      return <DiJqueryLogo />;
    case 'PHP':
      return <DiPhp />;
    case 'GitHub':
      return <DiGithub />;
    case 'Node.js':
      return <DiNodejs />;
    case 'JavaScript':
      return <DiJsBadge />;
    // case 'Custom CMS':
    //   return <FaGithub />;
    // case 'Hosting':
    //   return <FaGithub />;
    // case 'Mailgun.js':
    //   return <FaGithub />;

    default:
      return <span>{tech}</span>;
  }
};

export default TechnologyIcon;

TechnologyIcon.propTypes = {
  tech: PropTypes.string,
};
