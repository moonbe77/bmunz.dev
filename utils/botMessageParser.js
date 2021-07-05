import { useBotDispatch, useBotContext } from '../../../store/botContext';

const botDispatch = useBotDispatch();
botDispatch({
  type: 'ADD_MESSAGE',
  payload: message,
});

// this function should create the message creator that is gonna be render in the chat
export const botMessageParser = (message, sender) => {
  // pareced of the message to be added in the chat
  if (message.fulfillmentMessages) {
    message.fulfillmentMessages.forEach((fulfillmentMessage) => {
      if (fulfillmentMessage.message === 'text') {
        fulfillmentMessage.text.text.forEach((txt) => {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now(),
              text: txt,
              component: <TextMessage message={txt} sender={sender} />,
              sender,
              type: 'text',
            },
          ]);
        });
        return;
      }

      if (fulfillmentMessage.message === 'card') {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text: 'card',
            component: (
              <CardMessage
                key={message.id}
                data={fulfillmentMessage}
                sender={sender}
              />
            ),
            sender: 'bot',
            type: 'card',
          },
        ]);
      }

      if (fulfillmentMessage.message === 'quickReplies') {
        // console.log(type);
        setSuggestions(fulfillmentMessage.quickReplies.quickReplies);
      }
    });
  } else {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: typeof message === 'object' ? message.fulfillmentText : message,
        component: <TextMessage key={message.id} message={message} />,
        sender,
      },
    ]);
  }
};
