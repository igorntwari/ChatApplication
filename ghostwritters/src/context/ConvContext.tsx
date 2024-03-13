import React, { createContext, useContext, useState } from "react";

const defaultValue = {
    selectedConversation: null,
    setSelectedConversation: (newConversation) => {}
  };

const ConversationContext = createContext(defaultValue);

export default function ConvContext({ children }) {
  const [selectedConversation, setSelectedConversation] = useState(null);
  return (
    <ConversationContext.Provider value={{ selectedConversation, setSelectedConversation }}>
      {children}
    </ConversationContext.Provider>
  );
}

export function useConvContext(){
    return useContext(ConversationContext)
}