import { useField } from "formik";
import { Form, Select } from "semantic-ui-react";

interface Props {
    placeholder: string;
    name: string;
    options: { text: string, value: string }[];
    label?: string;
}

export default function MySelectInput(props: Props) {
    const [field, meta, helpers] = useField(props.name);
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <Select
                clearable
                options={props.options}
                value={field.value || null}
                onChange={(_, d) => helpers.setValue(d.value)}
                onBlur={() => helpers.setTouched(true)}
                placeholder={props.placeholder}
            />
            {meta.touched && meta.error ? (
                <div className="ui pointing red basic label">
                    {meta.error}
                </div>
            ) : null}
        </Form.Field>
    )
}