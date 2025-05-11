export interface injectKeyTypes {
  layoutNameKey: string | undefined
}

/**
 * Vue.jsのinjectで使用するキーの定義
 */
export const injectKeys = {
  layoutNameKey: {
    key: 'layout_layoutName',
  },
} as const satisfies { [key in keyof injectKeyTypes]: { key: string } }
