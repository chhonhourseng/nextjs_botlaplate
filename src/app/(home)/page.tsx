'use client';

import Container from '@/components/container';
import T from '@/translate';
import { useBloc } from '@blac/react';
import LanguageCubit from '@/data/providers/languageCubit';
import { app } from '@/constant/general';
import Column from '@/components/column';

export default function HomePage() {
  useBloc(LanguageCubit);
  return (
    <Container>
      <div>{T.home.s}</div>
      {app.isLogin ? <Column>
        user: {app.getUser},
      </Column> : null}
    </Container>
  );
}