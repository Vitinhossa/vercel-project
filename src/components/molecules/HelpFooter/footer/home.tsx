import { colors } from "@/utils/colors";

export function HomeIcon({ isActive }: { isActive: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 7.875L11 1L21 7.875" stroke={isActive ? colors.verdeFluor : colors.cinzaLightDark} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.7777 12.25V20.25C18.7777 20.6642 18.4793 21 18.1111 21H3.88883C3.52065 21 3.22217 20.6642 3.22217 20.25V12.25" stroke={isActive ? colors.verdeFluor : colors.cinzaLightDark} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
