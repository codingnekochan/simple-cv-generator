import PropTypes from "prop-types";
//////
export default function AccordionComponent({ children, heading, id }){
   return (
    <details id={id} className="sub-section border shadow-sm rounded-lg p-4 mb-4  bg-slate-50" name='CVInfo'>
        <summary>{heading}</summary>
        {children}
    </details>
   )
}
//////
export function Container( {children}){
    return <div className= "button-container flex justify-start gap-4 items-center py-1">
        {children}
    </div>
}
//////
AccordionComponent.propTypes = {
    children: PropTypes.node.isRequired,
    heading: PropTypes.string.isRequired,
    id:PropTypes.string.isRequired
};
Container.propTypes = {
    children : PropTypes.node.isRequired
}