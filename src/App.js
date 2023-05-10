import React from 'react'
import {ChatEngine} from 'react-chat-engine';

//Using arrow function component
const App = () => {
  return (
    <ChatEngine
      userName='LJASMOLO'//Put your userName instead
      projectID = '4ed73b3a-6a4c-4255-82f5-fd7530bbd7e8'// Your project id goes here
      userSecret='12977a95-24df-4105-8caa-afc272359ca3'// Replace with your secret key
    />
  )
}
export default App


