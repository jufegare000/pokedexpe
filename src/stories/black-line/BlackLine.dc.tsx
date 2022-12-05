
/**
 * Primary UI component for user interaction
 */
import BlackLineProps from "./BlackLine.props";

 export const BlackLineDC = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
  }: BlackLineProps) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <div className="line-1"></div>
    );
  };