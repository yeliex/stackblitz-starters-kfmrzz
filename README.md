# nextjs multi cookie with same name bug

this repo provides a re-production of nextjs multi cookie bug.

when set multi cookie with same name, if would merged into one `set-cookie` header.

## Re-Production
```
yarn
yarn dev
```

then open `${host}/api/test`, open dev-tools or read terminal output, you would find `set-cookie` headers.

### Expected
```
set-cookie: session=1713406956812; Path=/; Domain=.example1.com; Secure; HttpOnly; SameSite=none
set-cookie: session=1713406956812; Path=/; Domain=.example2.com; Secure; HttpOnly; SameSite=none
```

### Current
```
set-cookie: session=1713406956812; Path=/; Domain=.example1.com; Secure; HttpOnly; SameSite=none, session=1713406956812; Path=/; Domain=.example2.com; Secure; HttpOnly; SameSite=none
```