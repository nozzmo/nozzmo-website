import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";


export default withZod(
  z.object({
    name: z
      .string()
      .min(1, { message: "Name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Must be a valid email"),
    more: z
      .string()
      .min(1, { message: "Description is required" })
  })
);