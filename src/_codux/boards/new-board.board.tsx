import React from 'react'
import { createBoard } from '@wixc3/react-board';
import { Button } from '../../stories/Button.jsx';

export default createBoard({
    name: 'New Board',
    Board: () => <div>
        <Button size="large" label="Label" backgroundColor="blue" primary={undefined} /></div>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 300
    }
});
