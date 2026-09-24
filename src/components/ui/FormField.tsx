import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

const controlClasses =
  "w-full rounded-xl border-2 border-chocolate/30 bg-warmwhite px-4 py-3 text-chocolate placeholder:text-chocolate/40 focus:border-caramel focus:outline-none";

type Common = {
  label: string;
  id: string;
  required?: boolean;
};

type InputField = Common &
  InputHTMLAttributes<HTMLInputElement> & { as?: "input" };

type TextareaField = Common &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };

type SelectField = Common &
  SelectHTMLAttributes<HTMLSelectElement> & {
    as: "select";
    options: { value: string; label: string }[];
  };

type Props = InputField | TextareaField | SelectField;

export default function FormField(props: Props) {
  const { label, id, required } = props;

  return (
    <div className="flex flex-col gap-2 text-left">
      <label htmlFor={id} className="font-display text-sm text-chocolate">
        {label}
        {required && <span aria-hidden="true" className="text-retro-red"> *</span>}
      </label>
      {props.as === "textarea" ? (
        <textarea
          id={id}
          required={required}
          rows={5}
          className={controlClasses}
          {...omit(props, ["label", "as"])}
        />
      ) : props.as === "select" ? (
        <select
          id={id}
          required={required}
          className={controlClasses}
          {...omit(props, ["label", "as", "options"])}
        >
          {props.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          required={required}
          className={controlClasses}
          {...omit(props, ["label", "as"])}
        />
      )}
    </div>
  );
}

function omit<T extends object>(obj: T, keys: string[]) {
  const copy = { ...obj } as Record<string, unknown>;
  for (const key of keys) delete copy[key];
  return copy;
}
