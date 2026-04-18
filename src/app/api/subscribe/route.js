export async function POST(request) {
  const { email } = await request.json();

  if (!email) {
    return Response.json(
      { error: 'Email is required' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch('https://subscribe.beehiiv.com/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        publication_id: 'e2f8f5dc-5fbd-4a3a-a5bb-26fc117cf9e4',
        referring_site: 'mrmallorcagolf.com',
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return Response.json(
        { error: error.message || 'Failed to subscribe' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return Response.json(data, { status: 200 });
  } catch (error) {
    console.error('Subscription error:', error);
    return Response.json(
      { error: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}
