import { getAllArticles } from '@/lib/articles'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'

const CATEGORIES = [
  { key: 'factoring', label: 'ファクタリング・資金調達', icon: '🏦', desc: '請求書を即日現金化', color: 'from-blue-500 to-blue-700' },
  { key: 'card', label: '法人カード・ETC', icon: '💼', desc: '経費削減・法人カード比較', color: 'from-slate-500 to-slate-700' },
  { key: 'tax', label: '節税・会計', icon: '📊', desc: 'マイクロ法人・節税対策', color: 'from-emerald-500 to-emerald-700' },
  { key: 'freelance', label: 'フリーランス活用術', icon: '💻', desc: '独立・資金・保険', color: 'from-violet-500 to-violet-700' },
]

export default function Home() {
  const articles = getAllArticles()

  return (
    <div>
      <section className="bg-gradient-to-b from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            法人・フリーランスの<br className="md:hidden" />お金の課題を解決。
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            ファクタリング・法人カード・節税・資金調達。<br className="hidden md:block" />
            個人事業主・中小企業の経営を支える情報を完全網羅。
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              href={`/category/${cat.key}`}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all text-center group"
            >
              <div className={`bg-gradient-to-br ${cat.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <span className="text-xl">{cat.icon}</span>
              </div>
              <h3 className="font-bold text-sm text-gray-900 group-hover:text-blue-700 transition-colors">{cat.label}</h3>
              <p className="text-xs text-gray-400 mt-1">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-700 rounded-full"></span>
          最新記事
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  )
}
