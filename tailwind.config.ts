import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Poppins', 'Nokora', 'Montserrat', 'sans-serif'],
      },
      fontWeight: {
        extraBold: '800',
      },
      lineHeight: {
        custom: '21.94px',
      },
      boxShadow: {
        custom: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'primary-color': '#17041C',
        'on-primary': '#FFFFFF',
        'secondary-color': '#292929',
        'on-secondary': '#8B7F72',
        'third-color': '#394246',
        'br-primary': '#666666',
        'money-color': '#8FD256',
        'modal-color': '#261D29',
        'focus-color': '#FBD68D',
        'error-color': '#FF0000',
      },
      backgroundImage: {
        gradientText: 'linear-gradient(180.83deg, #FFDCA7 20.43%, #EB7100 89.43%)',
        primaryBackground: 'linear-gradient(180deg, #540000 0%, #370101 100%)',
        helper: 'linear-gradient(180deg, #F2AE26 0%, #F2831A 100%)',
        'commonGradient': 'linear-gradient(180deg, #F2AE26 0%, #F2831A 100%)',
        'news': 'linear-gradient(90deg, #FFAA00 0%, rgba(0, 0, 0, 0) 100%)',
      },
      keyframes: {
        coinWithdrawDefault: {
          '0%': { transform: 'translateX(-13vw) translateY(70vh)', opacity: '1' },
          '50%': { transform: 'translateX(0px)', opacity: '1' },
          '100%': { transform: 'translateX(0px) translateY(0px)', opacity: '0.6' },
        },
        coinWithdrawMobile: {
          '0%': { transform: 'translateX(-30vw) translateY(50vh)', opacity: '0.3' },
          '50%': { transform: 'translateX(0px)', opacity: '0.6' },
          '100%': { transform: 'translateX(0px) translateY(0px)', opacity: '0.8' },
        },
        coinDepositMobile: {
          '0%': { transform: 'translateX(0px) translateY(0vh)', opacity: '0.3' },
          '50%': { transform: 'translateX(0px)', opacity: '0.6' },
          '100%': { transform: 'translateX(-30vw) translateY(55vh)', opacity: '0.8' },
        },
        coinDepositDefault: {
          '0%': { transform: 'translateX(0px) translateY(0vh)', opacity: '0.3' },
          '50%': { transform: 'translateX(0px)', opacity: '0.6' },
          '100%': { transform: 'translateX(-13vw) translateY(70vh)', opacity: '0.8' },
        },
        coinDepositTablet: {
          '0%': { transform: 'translateX(0px) translateY(0vh)', opacity: '0.3' },
          '50%': { transform: 'translateX(0px)', opacity: '0.6' },
          '100%': { transform: 'translateX(-30vw) translateY(60vh)', opacity: '0.8' },
        },
        coinWithdrawTablet: {
          '0%': { transform: 'translateX(-30vw) translateY(60vh)', opacity: '0.3' },
          '50%': { transform: 'translateX(0px)', opacity: '0.6' },
          '100%': { transform: 'translateX(0px) translateY(0vh)', opacity: '0.8' },
        },
      },
      animation: {
        coinWithdrawDefault: 'coinWithdrawDefault',
        coinWithdrawMobile: 'coinWithdrawMobile',
        coinDepositDefault: 'coinDepositDefault',
        coinDepositMobile: 'coinDepositMobile',
        coinDepositTablet: 'coinDepositTablet',
        coinWithdrawTablet: 'coinWithdrawTablet',
      },
    },
  },
  plugins: [
    function({ addUtilities }: any) {
      addUtilities({
        '.text-primary': {
          background: 'linear-gradient(180.83deg, #FFDCA7 20.43%, #EB7100 89.43%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-secondary': {
          background: 'linear-gradient(180.83deg, #A7FAFF 20.42%, #00CFEB 89.43%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.bg-primary': {
          background: 'linear-gradient(180deg, #540000 0%, #370101 100%)',
        },
        '.bg-secondary': {
          background: 'linear-gradient(180deg, #370101 0%, rgba(55, 1, 1, 0) 100%)',
        },
        '.headline1': {
          fontSize: '62px',
          fontWeight: '700',
        },
        '.headline2': {
          fontSize: '42px',
          fontWeight: '600',
        },
        '.headline3': {
          fontSize: '36px',
          fontWeight: '500',
        },
        '.headline4': {
          fontSize: '32px',
          fontWeight: '400',
        },
        '.headline6': {
          fontSize: '30px',
          fontWeight: '700',
        },
        '.caption1': {
          fontSize: '24px',
          fontWeight: '700',
        },
        '.caption2': {
          fontSize: '18px',
          fontWeight: '400',
        },
        '.caption3': {
          fontSize: '18px',
          fontWeight: '500',
        },
        '.body1': {
          fontSize: '24px',
          fontWeight: '400',
        },
        '.body2': {
          fontSize: '24px',
          fontWeight: '500',
        },
        '.body3': {
          fontSize: '18px',
          fontWeight: '400',
        },
        '.body4': {
          fontSize: '18px',
          fontWeight: '500',
        },
        '.body5': {
          fontSize: '16px',
          fontWeight: '400',
        },
        '.body6': {
          fontSize: '16px',
          fontWeight: '600',
        },
        '.body7': {
          fontSize: '14px',
          fontWeight: '400',
        },
        '.body8': {
          fontSize: '14px',
          fontWeight: '700',
        },
        '.body9': {
          fontSize: '14px',
          fontWeight: '700',
        },
        '.body10': {
          fontSize: '12px',
          fontWeight: '400',
        },
        '.body11': {
          fontSize: '12px',
          fontWeight: '600',
        },
        '.body12': {
          fontSize: '12px',
          fontWeight: '700',
        },
        ".input1": {
          height: "56px",
          padding: "0px 8px",
          "@apply bg-secondary-color body7 md:body5  focus:outline-none active:outline-none rounded": {}
        },
        ".input2": {
          height: "48px",
          padding: "0px 8px",
          "@apply bg-secondary-color body7 md:body5  focus:outline-none active:outline-none rounded": {}
        },
        ".input3": {
          "@apply w-[48px] h-[48px] sm:w-[62px] sm:h-[62px]  bg-secondary-color focus:outline-none active:outline-none rounded flex text-center items-center justify-center": {}
        },
        ".phoneInput1": {
          width: "100% !important",
          height: "56px !important",
          backgroundColor: "#292929 !important",
          border: "1px solid #666666 !important"
        },
        ".phoneInput2": {
          width: "100% !important",
          height: "48px !important",
          backgroundColor: "#292929 !important",
          border: "1px solid #666666 !important"
        },
        ".phoneButton": {
          backgroundColor: "#292929 !important",
          border: "1px  solid #666666 !important"
        },
        ".card": {
          "@apply bg-[#302E3199] rounded-[12px]": {}
        },
        ".a-padding": {
          "@apply p-3": {}
        },
        ".a-page-margin": {
          "@apply md:mx-0 mx-4": {}
        },
        ".a-page-headline": {
          "@apply md:headline2 body4 text-center md:mb-5 mt-2": {}
        },
        ".a-text-grey": {
          "@apply text-[#9B9B9B]": {}
        },
        ".button": {
          "@apply bg-helper px-6 h-[48px] md:h-[56px] grid items-center rounded-[8px] text-[16px] md:text-[18px] font-medium": {}
        },
        ".button-sm": {
          "@apply bg-helper px-6 h-[48px] rounded-[8px]  text-[16px] font-medium": {}
        },
        ".button2": {
          "@apply bg-secondary-color px-6 h-[48px] md:h-[56px] rounded-[8px] text-[16px] md:text-[18px] font-medium border border-br-primary": {}
        },
        ".button2-sm": {
          "@apply bg-secondary-color px-6 h-[48px] rounded-[8px]  text-[16px] font-medium border border-br-primary": {}
        }
      }, {
        important: true
      });
    }
  ],
  corePlugins: {},
};
export default config;
