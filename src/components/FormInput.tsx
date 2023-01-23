interface FormInputProps {
    label: string;
    type?: string;
}

export const FormInput = ({type = "text", label}: FormInputProps) => {
    return (
        <div className="flex-input">
            <label>
                {label}
                <input type={type} />
            </label>
        </div>
    )
}