import Row from '@/components/row';
import LangSwitcher from '@/components/header/components/langSwitcher';
import { Assets } from '@/assets';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  return (
    <header className="border-1 border-amber-50 py-1.5 mt-[24px] mb-[50px]">
      <Row>
        <div className="grow">
          <img onClick={() => router.push('/')} src={Assets.starbucksLogoPng} className="w-16 cursor-pointer" alt="starbucks" />
        </div>
        <div className="flex-none">
          <LangSwitcher />
        </div>
      </Row>
    </header>
  );
}