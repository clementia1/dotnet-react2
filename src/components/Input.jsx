export default function Input(props) {

    return (
        <input
            className="input"
            style={props.style}
            id={props.id}
            type={props.type}
            name={props.name}
            disabled={props.disabled}
            placeholder={props.placeholder}
            required={props.required}
            value={props.value}
            onChange={props.onChange}/>
    )
}