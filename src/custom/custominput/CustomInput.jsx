import React from "react"

const CustomInput = React.forwardRef(({ styles, ...props }, ref) => {
    return (
        <input ref={ref} {...props} style={{ border: '0.06rem solid #d4d4d8', borderRadius: '0.36rem', maxWidth: '26.4rem', height: '2.64rem', ...styles }} />
    )
})

export default CustomInput