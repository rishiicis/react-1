import HOCupdateCompnt from './LearnHOC';
import {render, screen} from '@testing-library/react';

describe('HOC component', ()=>{
    test('render test from HOC', ()=>{
        render(<HOCupdateCompnt />)
        const hocText = screen.getByText('Hello HOC', {exact: false});
        expect(hocText).toBeInTheDocument();
    })
})