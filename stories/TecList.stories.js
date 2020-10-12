import React from 'react';
import TecList from '../components/atoms/Tec_List';

export default {
  title: 'Design System/atoms/TecList',
  component: TecList,
  argTypes: {
    list: { control: 'array' },
  },
};

const ListStory = ({data,...args})=>(
<TecList  list={data} {...args} />
)


export const List = ListStory.bind({});
List.args = {
    list: [
        "React",
        "Next.js",
        "Server Side Rendering",
        "Styled-Components",
        "Express.js",
        "MySQL"
      ],
};
