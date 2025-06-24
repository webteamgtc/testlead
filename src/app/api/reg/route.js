import { NextResponse } from 'next/server';

export async function POST(req) {
    const {
        email,
        username,
        code,
        country,
        phone,
        password,
        server_id,
    } = await req.json();

    try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('username', username);
        formData.append('code', code);
        formData.append('country', country);
        formData.append('phone', phone);
        formData.append('password', password);
        formData.append('server_id', server_id);

        const response = await fetch('https://m.mygtc.app/api/pub/reg', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        return NextResponse.json({ success: true, message: data?.message }, { status: 200 });

    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error?.message || 'Unknown error',
            },
            { status: 200 }
        );
    }
}
