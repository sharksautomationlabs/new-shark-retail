import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend('re_7BVctEoQ_JqorE1jzYNN1rfgoVMHqvNNS');

type QuizAnswers = {
  capital?: string;
  experience?: string;
  goal?: string;
  platform?: string;
  timeline?: string;
  motivation?: string;
};

const QUESTION_LABELS: Record<keyof QuizAnswers, string> = {
  capital: 'Available Investment Capital',
  experience: 'E-Commerce Experience Level',
  goal: 'Monthly Income Goal',
  platform: 'Platform Interest',
  timeline: 'Readiness to Start',
  motivation: 'Biggest Goal',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, answers } = body as {
      name: string;
      email: string;
      phone: string;
      answers: QuizAnswers;
    };

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Name, email and phone are required.' }, { status: 400 });
    }

    const answersHtml = (Object.keys(QUESTION_LABELS) as (keyof QuizAnswers)[])
      .map((key) =>
        answers[key]
          ? `<div class="field">
               <div class="label">${QUESTION_LABELS[key]}</div>
               <div class="value">${answers[key]}</div>
             </div>`
          : ''
      )
      .join('');

    const submittedAt = new Date().toLocaleString('en-US', {
      timeZone: 'America/Chicago',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 620px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #0f766e, #2dd4bf); color: white; padding: 28px 24px; text-align: center; }
            .header h1 { margin: 0 0 6px; font-size: 22px; }
            .header p { margin: 0; font-size: 14px; opacity: 0.85; }
            .badge { display: inline-block; background: rgba(255,255,255,0.25); border-radius: 20px; padding: 4px 14px; font-size: 13px; margin-top: 10px; }
            .section { padding: 20px 24px; }
            .section-title { font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.08em; color: #0f766e; border-bottom: 2px solid #ccfbf1; padding-bottom: 6px; margin-bottom: 14px; }
            .field { margin-bottom: 12px; background: #f8fffe; border-left: 3px solid #2dd4bf; padding: 8px 12px; border-radius: 0 6px 6px 0; }
            .label { font-weight: bold; font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.05em; }
            .value { color: #111; margin-top: 2px; font-size: 15px; }
            .contact-box { background: #f0fdfb; border: 1px solid #99f6e4; border-radius: 8px; padding: 16px 20px; margin-bottom: 6px; }
            .footer { text-align: center; padding: 16px 24px; color: #999; font-size: 12px; border-top: 1px solid #eee; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 New Qualified Lead</h1>
              <p>A prospect just completed the qualification questionnaire</p>
              <div class="badge">The Retail Automation — ecommerce-automation funnel</div>
            </div>

            <div class="section">
              <div class="section-title">Contact Information</div>
              <div class="contact-box">
                <div class="field"><div class="label">Full Name</div><div class="value">${name}</div></div>
                <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${email}" style="color:#0f766e;">${email}</a></div></div>
                <div class="field"><div class="label">Phone</div><div class="value"><a href="tel:${phone}" style="color:#0f766e;">${phone}</a></div></div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Quiz Answers</div>
              ${answersHtml}
            </div>

            <div class="footer">
              <p>Submitted on ${submittedAt} (CT) via theretailautomation.com</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const { error } = await resend.emails.send({
      from: 'The Retail Automation <onboarding@resend.dev>',
      to: 'info@theretailautomation.com',
      replyTo: email,
      subject: `🎯 New Lead: ${name} — Quiz Completed`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('Quiz lead API error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
