import logoMark from "@/assets/logo-mark.svg";

export function Logo() {
  return (
    <div className="inline-flex h-10 items-center rounded-xl bg-background px-3">
      <img src={logoMark} alt="9W" className="h-8 w-auto" />
    </div>
  );
}
