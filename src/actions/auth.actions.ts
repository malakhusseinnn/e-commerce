"use server";

import { loginSchemaType, RegisterFormType } from "@/shemas/authShemas";

export async function userRegister(data: RegisterFormType) {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/auth/signup`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return res.ok;

  } catch (err) {
    console.error("Error registering user:", err);
  }
}


// export async function userLogin(data: loginSchemaType) {
//   try {
//     const res = await fetch(
//       `https://ecommerce.routemisr.com/api/v1/auth/signin`,
//       {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       },
//     );
//     const result = await res.json();
//     console.log("Login result:", result);

//     return res.ok;

//   } catch (err) {
//     console.error("Error logging in user:", err);
//   }
// }
