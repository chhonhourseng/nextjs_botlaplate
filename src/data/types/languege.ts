import { useBloc } from '@blac/react';
import LanguageCubit from '@/data/providers/languageCubit';
import SettingSingleton from '@/constant/settingSingleton';

export class ILanguage {
  private readonly value: { [key: string]: string };

  constructor(value: { [key: string]: string }) {
    this.value = value;
  }

  get r(): string {
    const [t] = useBloc(LanguageCubit);
    return this.value[t ?? 'en-US'] ?? this.value['en-US'];
  }

  get s(): string {
    const s: SettingSingleton = SettingSingleton.getInstance();
    return this.value[s.i.lang ?? 'en-US'] ?? this.value['en-US'];
  }

  t(lang?: string): string {
    const s: SettingSingleton = SettingSingleton.getInstance();
    return this.value[lang ?? s.i.lang!] ?? this.value['en-US'];
  }
}