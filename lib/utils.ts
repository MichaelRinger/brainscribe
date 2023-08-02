export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}
export const copyToClipBoard = (str: string) => navigator.clipboard.writeText(str)
