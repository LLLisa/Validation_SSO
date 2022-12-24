import * as React from 'react'
import { createRoot } from 'react-dom/client' 

const Root = () => {
  return (<hr/>)
}

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<Root/>)