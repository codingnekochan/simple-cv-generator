import PropTypes from "prop-types";
export default function AccordionComponent({ children, heading, id }){
   return (
    <details id={id} className="sub-section border shadow-sm rounded-lg p-4 mb-4  bg-slate-50" name='CVInfo'>
        <summary>{heading}</summary>
        {children}
    </details>
   )
}


AccordionComponent.propTypes = {
    children: PropTypes.node.isRequired,
    heading: PropTypes.string.isRequired,
    id:PropTypes.string.isRequired
};