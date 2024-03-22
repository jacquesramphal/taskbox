import React from 'react'
import { createBoard } from '@wixc3/react-board';
import { Button } from '../../stories/Button.jsx';


export default createBoard({
    name: 'New Board',
    Board: () => <div>
<div>
        <Button size="large" label="Label" backgroundColor="red" primary={undefined} /></div></div>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 300
    }
});
