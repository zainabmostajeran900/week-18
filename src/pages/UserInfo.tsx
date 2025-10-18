import { Controller, useForm } from "react-hook-form";
import { UserInfoInput } from "../components/UserInfoInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { userInfoSchema } from "../validations/userInfoValidation";
import { IForm } from "../types/userForm.type";
import { useState } from "react";
import { AllInfo } from "../components/AllInfo";

export const UserInfo: React.FC = () => {
  const [formInfo, setFormInfo] = useState<IForm>();
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<IForm>({ mode: "all", resolver: zodResolver(userInfoSchema) });

  const submitform = (values: IForm) => {
    setFormInfo(values)
  };
  return (
    <div className="flex flex-col items-center max-w-screen-md rounded-md text-white mx-1 md:mx-auto bg-appGray ">
      <h2 className="font-semibold border-b py-2 w-full text-center text-base md:text-xl">
        Complete your Information
      </h2>
      <form
        onSubmit={handleSubmit((values) => submitform(values))}
        className="w-full flex flex-wrap gap-5 justify-center md:justify-around py-4 px-4 "
      >
        <Controller
          control={control}
          name="firstName"
          render={({ field, fieldState }) => (
            <UserInfoInput
              {...field}
              label="Firstname"
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field, fieldState }) => (
            <UserInfoInput
              {...field}
              label="Lastname"
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="landline"
          render={({ field, fieldState }) => (
            <UserInfoInput
              {...field}
              label="Landline Number"
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field, fieldState }) => (
            <UserInfoInput
              {...field}
              label="Phone Number"
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <UserInfoInput
              {...field}
              label="Your Email"
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <UserInfoInput
              {...field}
              label="Address"
              error={fieldState.error?.message}
            />
          )}
        />

        <button
          type="submit"
          disabled={!isDirty || !isValid}
          className="block w-full bg-blue-500 py-2 rounded-md hover:bg-blue-400 disabled:bg-gray-400"
        >
          Submit
        </button>
      </form>
      {formInfo && <AllInfo userInfo={formInfo}/>}
    </div>
  );
};
