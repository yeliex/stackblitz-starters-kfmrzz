import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const GET = () => {
  const headers = new Headers();

  headers.append(
    'set-cookie',
    cookies()
      .set('session', Date.now().toString(), {
        domain: '.example1.com',
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'none',
      })
      .toString()
  );
  headers.append(
    'set-cookie',
    cookies()
      .set('session', Date.now().toString(), {
        domain: '.example2.com',
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'none',
      })
      .toString()
  );

  console.log(headers);

  return NextResponse.json(JSON.stringify({}), { headers });
};
