import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";
import VerificationEmail from "../../emails/VerificationsEmail";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "mystery message | verification code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: "Email has been sent" };
  } catch (emailError) {
    console.log("Error", emailError);
    return { success: false, message: "Failed to send Verification code" };
  }
}
