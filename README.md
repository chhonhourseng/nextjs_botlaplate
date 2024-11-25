This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


---

## Working with Translations 🌐

### Adding Strings

```sh
npm run t
```


2. Use the new string

```tsx
import T from '@/translate';

export  default function Page(){
  
  useBloc(LanguageCubit);
  
  return (
    <div>{T.hello.s}</div>
  );
}

```


---

## Working with Assets

### Generate Assets

```sh
npm run assets
```


2. Use the new Asset

```tsx
import { Assets } from '@/assets';

export  default function Page(){
  return (
    <img src={Assets.logo} alt="logo"/>
  );
}

```
---

## Working with Mason

### Create Generate code
#### Feature - (root)
```sh
mason make feature
```
#### Crud - (root)
```sh
mason make crud
```
#### Cubit
```sh
mason make cubit
```
#### Page
```sh
mason make page
```
#### Component
```sh
mason make component
```
