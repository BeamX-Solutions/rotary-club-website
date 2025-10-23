const { Resend } = require('resend');

exports.handler = async (event) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = JSON.parse(event.body);
    const { name, email, phone, propertyType, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'info@beamxsolutions.com', // Updated sender email
      to: ['obinnanweke@gmail.com', 'ibehchimaobi98@gmail.com'], // As specified
      subject: `New Interest Form Submission from ${name}`,
      html: `
        <h2>New Interest Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Property Type:</strong> ${propertyType || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
      `,
    });

    if (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Failed to send email' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error' }),
    };
  }
};