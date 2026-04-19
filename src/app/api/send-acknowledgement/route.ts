import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not defined in environment variables.");
      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    // Creating a premium waitlist email matching Epoch's brand
    const htmlEmail = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #000; color: #fff; padding: 40px; border-radius: 8px;">
        <h1 style="color: #cfae60; font-family: Georgia, serif; font-weight: normal; margin-bottom: 24px; font-size: 32px;">Epoch Intelligence</h1>
        <p style="font-size: 16px; color: #e2e8f0; line-height: 1.6; margin-bottom: 24px; font-weight: 500;">Priority access secured.</p>
        <p style="font-size: 16px; color: #e2e8f0; line-height: 1.6; margin-bottom: 24px; font-weight: 300;">Thank you for joining the Epoch waitlist. You have successfully upgraded your intelligence feed.</p>
        <p style="font-size: 16px; color: #e2e8f0; line-height: 1.6; margin-bottom: 24px; font-weight: 300;">We are rolling out access to thousands of thinkers, executives, and strategists in phases. We will notify you the moment your account is ready for activation.</p>
        <p style="font-size: 14px; color: #94a3b8; line-height: 1.6; margin-top: 40px; padding-top: 20px; border-top: 1px solid #333;">
          Stop reading blindly. Start understanding.<br/><br/>
          &mdash; The Epoch Team
        </p>
      </div>
    `;

    // Note: onboarding@resend.dev allows sending to your own email address without verifying a domain first.
    // Replace with your own domain once verified in Resend.
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Epoch <onboarding@resend.dev>",
        to: email,
        subject: "Subscription Confirmed | Epoch",
        html: htmlEmail,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API Error:", data);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email sending exception:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
