import { z } from "zod";

export const userInfoSchema = z.object({
  firstName: z.string().min(4, "value should be 4 char or more"),
  lastName: z.string().min(4, "value should be 4 char or more"),
  landline: z
    .string()
    .refine(
      (val) => /^[0-9]{3}\-[0-9]{8}$/.test(val),
      "number is not valid example: 021-22556688"
    ),
  phone: z
    .string()
    .refine((val) => !isNaN(Number(val)), "enter number")
    .refine(
      (val) => /(09)[0-9]{9}/.test(val) && val.length === 11,
      "number is not valid, example:09120000000"
    ),
  email: z.string().email("your email is not true. example: example@gmail.com"),
  address: z.string().min(10, "character should be 7 or more"),
});
