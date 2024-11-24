'use client';

import Container from '@/components/container';
import T from '@/translate';
import { useBloc } from '@blac/react';
import LanguageCubit from '@/data/providers/languageCubit';

export default function HomePage() {
    useBloc(LanguageCubit);
    return (
        <Container>
          <div>{T.home.s}</div>
        </Container>
    );
}