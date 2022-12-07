import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonExample } from '../../../../../../../../../../app/components/dumb/organisms/molecules/atoms/button-example/ButtonExample.atom';
import { ButtonExampleProps } from '../../../../../../../../../../app/components/dumb/organisms/molecules/atoms/button-example/props/ButtonExample.props';


test('renders a simple button example', () => {

    const defaultProps: ButtonExampleProps = {
        primary: false,
        size: 'medium',
        backgroundColor: '',
        label: 'Button',
    }
    render(<ButtonExample {...defaultProps} />);
    const linkElement = screen.getByText("Button");
    expect(linkElement).toBeInTheDocument();
});
