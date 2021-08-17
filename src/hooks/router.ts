// 用于第一次访问的页面重新指向
let count = 0;
export const getCount = (): number => count
export const upCount = (): void => { count++ }