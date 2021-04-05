
import '../styles/globals.css'
import { addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from './configs/contexts'; // we will define the contextual setups later in API section

addDecorator(withContexts(contexts));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const defaultView = () => <div />; // sample story in CSF format
defaultView.story = {
  parameters: {
    contexts: [{ isDarkTheme: true }]
  }
};