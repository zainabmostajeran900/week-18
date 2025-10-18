interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  name: string;
  error?: string;
}
export const UserInfoInput: React.FC<IInput> = ({ label, name,error ,...props}) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="font-semibold text-sm md:text-base inline-block min-w-36"
      >
        {label} :{" "}
      </label>
      <input
      {...props}
        type="text"
        name={name}
        id={label}
        className="rounded-sm text-black px-2 "
      />
     {error &&  <p className="text-sm font-semibold text-red-500">{error}</p>}
    </div>
  );
};
