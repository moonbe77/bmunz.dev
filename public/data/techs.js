import {
  SiNextDotJs,
  SiStyledComponents,
  SiMysql,
  SiCraftcms,
} from 'react-icons/si';
import { AiOutlineApi, AiOutlineExclamationCircle } from 'react-icons/ai';
import { GrDocumentTest, GrHost } from 'react-icons/gr';

export const techs = {
  next: {
    icon: <SiNextDotJs />,
    alt: 'Next.js',
  },
  styledComponents: {
    icon: <SiStyledComponents />,
    alt: 'Styled-Components',
  },
  Mysql: {
    icon: <SiMysql />,
    alt: 'Mysql',
  },
  Express: {
    icon: <AiOutlineApi />,
    alt: 'Express',
  },
  CustomCMS: {
    icon: <SiCraftcms />,
    alt: 'Custom CMS',
  },
  StaticGeneration: {
    icon: <GrDocumentTest />,
    alt: 'Custom CMS',
  },
};
