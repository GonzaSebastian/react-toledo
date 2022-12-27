import './button.css'

const Button = ({label}) => {

    return (
        <button className="btn">
            {label}
        </button>
    )
}

export default Button