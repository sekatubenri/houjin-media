import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://houjin-select.com'),
  title: {
    default: '法人・フリーランスナビ｜資金調達・節税・法人カード比較',
    template: '%s｜法人・フリーランスナビ',
  },
  description: '法人カード・ETCカード・ファクタリング・節税情報を徹底解説。個人事業主・フリーランス・中小企業の資金調達・経費削減に役立つ情報を完全網羅。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: '法人・フリーランスナビ',
  },
  verification: { google: 'XcyMImXtiMlMj5NBeiKQBcD_Vqrw3EDW0TDFBVTAtaA' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col">
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9320888355424356" crossOrigin="anonymous" strategy="afterInteractive" />
        <header className="border-b border-gray-200 sticky top-0 bg-white z-50 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="bg-blue-700 text-white text-sm font-bold px-2.5 py-1 rounded">🏢</span>
              <span className="text-xl font-bold text-gray-900">法人・フリーランスナビ</span>
            </a>
            <nav className="hidden md:flex gap-1 text-sm">
              <a href="/category/factoring" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">ファクタリング</a>
              <a href="/category/card" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">法人カード</a>
              <a href="/category/tax" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">節税・会計</a>
              <a href="/category/freelance" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">フリーランス</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="bg-blue-700 text-white text-xs font-bold px-2 py-0.5 rounded">🏢</span>
                <span className="text-sm font-bold text-gray-900">法人・フリーランスナビ</span>
              </div>
              <nav className="flex gap-6 text-xs text-gray-400">
                <a href="/category/factoring" className="hover:text-gray-600">ファクタリング</a>
                <a href="/category/card" className="hover:text-gray-600">法人カード</a>
                <a href="/category/tax" className="hover:text-gray-600">節税・会計</a>
                <a href="/category/freelance" className="hover:text-gray-600">フリーランス</a>
              </nav>
            </div>
            <nav className="flex justify-center gap-6 text-xs text-gray-400 mt-4">
              <a href="/privacy" className="hover:text-gray-600">プライバシーポリシー</a>
              <a href="/contact" className="hover:text-gray-600">お問い合わせ</a>
            </nav>
            <p className="text-center text-xs text-gray-300 mt-4">© 2026 法人・フリーランスナビ All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
