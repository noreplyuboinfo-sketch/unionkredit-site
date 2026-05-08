'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  amount: number;
  months: number;
}) {
  try {
    const { firstName, lastName, email, phone, amount, months } = formData;

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY manquante. L'e-mail n'a pas été envoyé.");
      return { success: false, error: "Clé API manquante" };
    }

    const { data, error } = await resend.emails.send({
      from: 'Union-Kredit Form <onboarding@resend.dev>',
      to: 'unionkredit2@gmail.com',
      subject: `Nouvelle demande de prêt - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
          <h2 style="color: #2D6FF2; margin-top: 0;">Nouvelle demande de prêt via la Landing Page</h2>
          <p><strong>Nom complet:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${phone}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <h3 style="color: #333;">Détails du prêt souhaité</h3>
          <p><strong>Montant souhaité:</strong> ${amount.toLocaleString('fr-FR')} €</p>
          <p><strong>Durée:</strong> ${months} mois</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error("Server Action Error:", err);
    return { success: false, error: err.message || "Une erreur est survenue" };
  }
}
