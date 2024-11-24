'use client';

import LanguageCubit from '@/data/providers/languageCubit';
import Container from '@/components/container';
import { useBloc } from '@blac/react';

export  default function {{name.pascalCase()}}Page(){
  useBloc(LanguageCubit);

  return (
    <Container>
      <div></div>
    </Container>
  );
}