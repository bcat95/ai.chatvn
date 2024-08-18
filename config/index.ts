import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Trợ lý AI',
  description: 'AI cung cấp dịch vụ trò chuyện thông minh và miễn phí cho người dùng. Trải nghiệm ngay ChatGPT Vietnamese không cần tài khoản',
  copyright: 'chatvn.org',
  privacy_policy: '',
  default_language: 'vi',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
