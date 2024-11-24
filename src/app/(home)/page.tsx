'use client';

import Container from '@/components/container';
import T from '@/translate';
import { useBloc } from '@blac/react';
import LanguageCubit from '@/data/providers/languageCubit';
import { app } from '@/constant/general';
import Column from '@/components/column';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  useBloc(LanguageCubit);

  const router = useRouter();

  return (
    <Container>
      <Column className='gap-2.5'>
        <div className='headline2'>{T.home.s}</div>
        {app.isLogin ? <Column className='gap-2.5'>
          <div className='body4'>userId: {app.getUser!.id}</div>
          <div className='body4'>userName: {app.getUser!.username}</div>
          <button className='button' onClick={()=> app.logOut()}>{T.logOut.s}</button>
        </Column> : <button className='button' onClick={()=> router.push('/login')}>{T.logIn.s}</button>}</Column>
    </Container>
  );
}