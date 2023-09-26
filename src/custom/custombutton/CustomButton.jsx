const CustomButton = ({ children, styles, ...props }) => {
    return (
        <button {...props} {...styles}>{children}</button>
    )
}

export default CustomButton