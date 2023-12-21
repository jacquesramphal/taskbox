import React from 'react'
import { createBoard } from '@wixc3/react-board';
import { Button } from '../../stories/Button.jsx';

export default createBoard({
    name: 'New Board',
    Board: () => <div>
        <Button label="Label" backgroundColor="red" /></div>,
    isSnippet: true,
});
