'use client';

import { useBloc } from '@blac/react';
import {{name.pascalCase()}}Cubit from '@/data/providers/{{feature.camelCase()}}/{{name.camelCase()}}Cubit';
import LanguageCubit from '@/data/providers/languageCubit';
import Container from '@/components/container';

export  default function {{name.pascalCase()}}Page(){
  useBloc(LanguageCubit);
  const [v, e] = useBloc({{name.pascalCase()}}Cubit);
  return (
    <Container>
      <div></div>
    </Container>
  );
}