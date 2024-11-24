'use client';

import LanguageCubit from '@/data/providers/languageCubit';
import Container from '@/components/container';
import { useBloc } from '@blac/react';
import Column from '@/components/column';
import TextInput from '@/components/form/textInput';
import T from '@/translate';
import LoginCubit from '@/data/providers/auth/loginCubit';
import { useEffect } from 'react';
import { StateStatus } from '@/data/enums/enum';
import { kDebugMode } from '@/constant/general';
import { useForm } from 'react-hook-form';
import { IAuthLogin } from '@/data/types/auth';

export  default function LoginPage(){
  const [v, e] = useBloc(LoginCubit);
  useBloc(LanguageCubit);

  useEffect(() => {
    if (v.status == StateStatus.failure) {
      if (kDebugMode) {
      }
    }
  }, [v.status]);

  const loginHook = useForm<IAuthLogin>();

  const onLoginSubmit = (state: IAuthLogin) => {
    e.request(state).then();
  };
  return (
    <Container>
      <form onSubmit={loginHook.handleSubmit(onLoginSubmit)}>
        {
          v.status == StateStatus.failure ? <div className={'text-red-500 mb-3'}>{v.message}</div> : null
        }
        <Column className='gap-5'>
          <TextInput
            label={T.username.s}
            placeholder={T.enterYourUsername.s}
            id="username"
            name="username"
            type="text"
            register={loginHook.register}
            errorText={loginHook.formState.errors.username?.message}
            validation={{
              required: T.usernameIsRequired.s,
            }}
          />

          <TextInput
            label={T.password.s}
            placeholder={T.enterYourPassword.s}
            id="password"
            name="password"
            type="password"
            register={loginHook.register}
            errorText={loginHook.formState.errors.password?.message}
            validation={{
              required: T.passwordIsRequired.s,
            }}
          />
          <button className={'button'} type="submit">{T.submit.s}</button>
        </Column>
      </form>
    </Container>
  );
}