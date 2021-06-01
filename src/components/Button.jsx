export default function Button(props) {

    return (
        <button
            className={props.className ? props.className : "btn"}
            style={props.style}
            type={props.type}
            name={props.name}
            disabled={props.disabled}
            onClick={props.onClick}>
            <span className="btn-label">{props.text}</span>            
        </button>
    )
}