import { hexadecimal2decimal } from "./numeric";

interface RgbObject {
  red: string;
  green: string;
  blue: string;
  opacity?: string;
}

export function hex2rgb(color: string): [number?, number?, number?, number?] {
  const match = color.match(/^\#?([\da-f]{3,4}){1,2}$/i);
 
  if (!match) {
    return [];
  }
 
  color = color.replace('#', '');

  const isSingle = [3, 4].includes(color.length);
  const pos = {
    red: 0,
    green: isSingle ? 1 : 2,
    blue: isSingle ? 3 : 4,
    opacity: isSingle ? 4 : 6,
  };

  const obj: RgbObject = Object.assign(
    { red: "", green: "", blue: "" },
    !!(color.length % 3) && { opacity: "ff" }
  );

  Object.keys(obj).forEach((key) => {
    const index = pos[key as keyof typeof pos];
    obj[key as keyof RgbObject] = color.substring(index, index + (isSingle ? 1 : 2));
  });

  return [obj.red, obj.green, obj.blue, obj.opacity]
    .map((value) => hexadecimal2decimal(value ?? "ff")) as [number, number, number, number];
}
