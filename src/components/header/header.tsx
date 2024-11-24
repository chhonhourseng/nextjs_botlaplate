import Row from '@/components/row';
import LangSwitcher from '@/components/header/components/langSwitcher';
import T from '@/translate';
import { Assets } from '@/assets';

export default function Header() {
  return (
    <header className="border-1 border-amber-50 py-1.5 mt-[24px] mb-[20px]">
      <Row>
        <div className="grow">
          <img src={Assets.starbucksLogoPng} className='w-12' alt="starbucks" />
        </div>
        <div className="flex-none">
          <LangSwitcher />
        </div>
      </Row>
    </header>
  );
}