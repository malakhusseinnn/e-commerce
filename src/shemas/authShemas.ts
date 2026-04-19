import * as zod from "zod";

export const registerSchema = zod
  .object({
    name: zod
      .string()
      .nonempty("Name is required")
      .min(2, "Name must be at least 2 characters"),
    email: zod.email("Invalid email address").nonempty("Email is required"),
    password: zod
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters")
      .regex(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character, with no spaces, and be between 8 to 16 characters long",
      ),
    rePassword: zod.string().nonempty("Please confirm your password"),
    phone: zod
      .string()
      .nonempty("Phone number is required")
      .regex(/^(\+2)?01(0|1|2|5)[0-9]{8}$/, "Invalid phone number"),
  })
  .refine((data) => data.password === data.rePassword, {
    error: "Password and its confirmation do not match",
    path: ["rePassword"],
  });

export type RegisterFormType = zod.infer<typeof registerSchema>;

export const loginSchema = zod.object({
  email: zod.email("Invalid email address").nonempty("Email is required"),
  password: zod
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters")
    .regex(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character, with no spaces, and be between 8 to 16 characters long",
    ),
});

export type loginSchemaType = zod.infer<typeof loginSchema>;

export const checkoutSchema = zod.object({
  details: zod.string().nonempty("Street Address is required").min(10,"Street Address must be at least 10 characters"),
  phone: zod
    .string()
    .nonempty("Password is required")
    .regex(
      /^(010|012|011|015)[0-9]{8}$/,
      "Invalid phone number, please enter egyptian phone number",
    ),
  city: zod.string().nonempty("City is required").min(2,"City must consist of at least 2 characters"),
});

export type checkoutSchemaType = zod.infer<typeof checkoutSchema>;
