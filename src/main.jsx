import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react'
import { articles, articleFor, categories, categoryFor, questionKeywords } from './data'
import { guideVisuals } from './guideVisuals'
import './style.css'

function useRoute() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const update = () => {
      setHash(window.location.hash)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  return hash.match(/^#\/guide\/([\w-]+)/)?.[1] || null
}

function Header({ guide }) {
  return <header className="header">
    <div className="header-inner">
      <a className="brand" href="#/" aria-label="Soonshot Help home">
        <img src={`${import.meta.env.BASE_URL}soonshot-logo.png`} alt="soonshot" />
        <span>Help</span>
      </a>
      {guide && <a className="header-link" href="#/">Help home <ArrowUpRight size={16} /></a>}
    </div>
  </header>
}

function SearchField({ value, onChange, onSubmit, inputRef }) {
  return <form className="search-field" role="search" onSubmit={event => { event.preventDefault(); onSubmit() }}>
    <input ref={inputRef} aria-label="Search Soonshot help" value={value} onChange={event => onChange(event.target.value)} placeholder="Ask a question or search a topic" autoComplete="off" />
    {value ? <button type="button" className="search-clear" aria-label="Clear search" onClick={() => onChange('')}><X size={17} /></button> : <kbd className="search-shortcut" aria-hidden="true">/</kbd>}
    <button type="submit" className="search-submit" aria-label="Search help"><ArrowRight size={23} strokeWidth={1.8} aria-hidden="true" /></button>
  </form>
}

function CategoryMark({ id, className = '' }) {
  return <svg className={`category-mark ${className}`} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {id === 'watching' && <>
      <rect x="10" y="18" width="44" height="31" rx="7" />
      <path d="M10 27h44M23 18l-7 9M37 18l-7 9M51 18l-7 9" />
      <path className="mark-accent" d="m28 33 11 6-11 6z" />
    </>}
    {id === 'payments' && <>
      <path d="M14 18h36v11a5 5 0 0 0 0 10v7H14v-7a5 5 0 0 0 0-10V18Z" />
      <path d="M27 19v5m0 5v6m0 5v5" />
      <circle className="mark-accent" cx="39" cy="32" r="5" />
    </>}
    {id === 'account' && <>
      <circle cx="32" cy="24" r="9" />
      <path d="M15 49c2-9 8-14 17-14s15 5 17 14" />
      <circle className="mark-accent" cx="50" cy="16" r="3" />
    </>}
    {id === 'content' && <>
      <path d="M15 15h31a4 4 0 0 1 4 4v32H22a7 7 0 0 1-7-7V15Z" />
      <path d="M15 43c1-3 3-5 7-5h28M24 24h15M24 30h11" />
      <path className="mark-accent" d="M43 15v15l-4-3-4 3V15" />
    </>}
    {id === 'all' && <>
      <rect x="12" y="12" width="17" height="17" rx="4" />
      <rect x="35" y="12" width="17" height="17" rx="4" />
      <rect x="12" y="35" width="17" height="17" rx="4" />
      <rect className="mark-accent" x="35" y="35" width="17" height="17" rx="4" />
    </>}
  </svg>
}

function QuestionTitle({ article }) {
  const keyword = questionKeywords[article.id]
  const start = keyword ? article.title.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) : -1
  if (start < 0) return article.title
  return <>
    {article.title.slice(0, start)}
    <span className="question-keyword">{article.title.slice(start, start + keyword.length)}</span>
    {article.title.slice(start + keyword.length)}
  </>
}

function ArticleCard({ article, featured }) {
  return <a className={`answer-card${featured ? ' answer-card-featured' : ''}`} href={`#/guide/${article.id}`}>
    <span className="answer-card-category">{categoryFor(article.category).label}</span>
    <h3><QuestionTitle article={article} /></h3>
    <CategoryMark id={article.category} className="question-art" />
  </a>
}

const featuredArticles = ['free-episodes', 'stickers', 'episode-page', 'sign-in'].map(articleFor).filter(Boolean)
const browseCategories = categories.filter(category => category.id !== 'all')

function isDramaUnlockSearch(query) {
  const normalized = query.toLocaleLowerCase().replace(/[^a-z0-9\s]/g, ' ')
  return /\b(?:unlock|watch|access|open)\b/.test(normalized) && /\b(?:drama|dramas|story|stories|show|shows|series)\b/.test(normalized)
    || /\bways? to unlock\b/.test(normalized)
}

const stickerPacks = [
  { stickers: '500', bonus: '25', price: '$4.49' },
  { stickers: '1,000', bonus: '100', price: '$8.90' },
  { stickers: '2,500', bonus: '500', price: '$19.90' },
  { stickers: '5,000', bonus: '2,000', price: '$41.90' },
]

function UnlockArt({ type }) {
  if (type === 'free') return <div className="unlock-art unlock-art-free" aria-hidden="true">
    <span className="mini-episode mini-episode-back">03 <i>LOCKED</i></span>
    <span className="mini-episode mini-episode-front">01 <i>FREE</i></span>
  </div>
  if (type === 'stickers') return <div className="unlock-art unlock-art-stickers" aria-hidden="true">
    <span className="sticker sticker-back">S</span><span className="sticker sticker-front">S</span>
    <span className="sticker-spark">✳</span>
  </div>
  if (type === 'fanpass') return <div className="unlock-art unlock-art-fanpass" aria-hidden="true">
    <span className="fan-ticket"><span>FANPASS</span><strong>01</strong><small>DRAMA</small></span>
  </div>
  return <div className="unlock-art unlock-art-membership" aria-hidden="true">
    <span className="member-frame member-frame-back" /><span className="member-frame member-frame-mid" /><span className="member-frame member-frame-front">M<span>✳</span></span>
  </div>
}

const unlockOptions = [
  { type: 'free', eyebrow: 'START WATCHING', title: 'Free episodes', detail: 'Watch the episodes marked Free on each drama.', price: '$0', period: '', guide: 'free-episodes' },
  { type: 'stickers', eyebrow: 'EPISODE BY EPISODE', title: 'Stickers', detail: 'Unlock the episodes you choose. Sticker costs vary by drama.', price: 'From $4.49', period: 'per pack', guide: 'unlock-episodes' },
  { type: 'fanpass', eyebrow: 'ONE DRAMA', title: 'FanPass', detail: 'Rent one eligible drama, if offered in your app.', price: '$1.99', period: '/ month', guide: 'fanpass' },
  { type: 'membership', eyebrow: 'SUBSCRIPTION', title: 'Membership', detail: 'Explore subscription access for eligible episodes in the app.', price: '$9.99', period: '/ month', guide: 'membership' },
]

function UnlockOptions({ context = 'search' }) {
  const Heading = context === 'page' ? 'h1' : 'h2'
  return <section className={`unlock unlock-${context}`} aria-labelledby="unlock-heading">
    <div className="unlock-heading">
      <Heading id="unlock-heading">Ways to unlock dramas<span>.</span></Heading>
      <span className="region-label">US · USD</span>
    </div>
    <div className="unlock-grid">
      {unlockOptions.map(option => <a className={`unlock-card unlock-card-${option.type}`} href={`#/guide/${option.guide}`} key={option.type}>
        <UnlockArt type={option.type} />
        <div className="unlock-card-content">
          <span className="unlock-eyebrow">{option.eyebrow}</span>
          <h3>{option.title}</h3>
          <p>{option.detail}</p>
          <div className="unlock-bottom"><span className="unlock-price">{option.price} <small>{option.period}</small></span><ArrowUpRight size={19} strokeWidth={1.7} aria-hidden="true" /></div>
        </div>
      </a>)}
    </div>
    <details className="pack-details">
      <summary>See US Sticker packs <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" /></summary>
      <div className="pack-grid">
        {stickerPacks.map(pack => <div className="pack" key={pack.stickers}>
          <strong>{pack.stickers}</strong><span>+{pack.bonus} bonus</span><b>{pack.price}</b>
        </div>)}
      </div>
    </details>
    <p className="unlock-note">US prices in USD. FanPass and other offers may vary by availability. Check eligible titles, episode Sticker costs, and final terms in the app before purchasing.</p>
  </section>
}

function Home() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(null)
  const [limit, setLimit] = useState(8)
  const searchRef = useRef(null)
  const hasQuery = Boolean(query.trim())
  const showUnlockVisual = hasQuery && isDramaUnlockSearch(query)

  useEffect(() => {
    const focusShortcut = event => {
      const target = event.target
      if (event.key !== '/' || event.altKey || event.ctrlKey || event.metaKey || target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target?.isContentEditable) return
      event.preventDefault()
      searchRef.current?.focus()
    }
    window.addEventListener('keydown', focusShortcut)
    return () => window.removeEventListener('keydown', focusShortcut)
  }, [])

  const results = useMemo(() => {
    const term = query.trim().toLocaleLowerCase()
    if (!term && !activeCategory) return []
    return articles.filter(article => {
      if (activeCategory && article.category !== activeCategory) return false
      if (!term) return true
      if (article.id === 'ways-to-unlock' && isDramaUnlockSearch(term)) return true
      const searchable = [article.title, article.original, article.summary, ...article.sections.flatMap(section => [section.heading, section.text])].join(' ').toLocaleLowerCase()
      return searchable.includes(term)
    })
  }, [query, activeCategory])

  const changeQuery = value => { setQuery(value); setActiveCategory(null); setLimit(8) }
  const browsing = hasQuery || Boolean(activeCategory)
  const visible = browsing ? results.slice(0, limit) : featuredArticles
  const chooseCategory = id => {
    setQuery('')
    setActiveCategory(current => current === id ? null : id)
    setLimit(4)
    requestAnimationFrame(() => document.getElementById('faq-heading')?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }
  const focusSearch = () => {
    searchRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    searchRef.current?.focus({ preventScroll: true })
  }
  const submitSearch = () => {
    if (!hasQuery) return focusSearch()
    if (showUnlockVisual) {
      window.location.hash = '#/guide/ways-to-unlock'
      return
    }
    document.getElementById('faq-heading')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return <main className="home">
    <section className="intro">
      <h1 aria-label="How can we help?">How can we help<span className="hero-mark">?</span></h1>
      <SearchField value={query} onChange={changeQuery} onSubmit={submitSearch} inputRef={searchRef} />
    </section>

    {!hasQuery && <section className="topic-browse" aria-label="Browse help by topic">
      <div className="topic-grid">
        {browseCategories.map(category => <button key={category.id} type="button" className="topic-card" aria-pressed={activeCategory === category.id} onClick={() => chooseCategory(category.id)}>
          <CategoryMark id={category.id} className="topic-mark" />
          <span>{category.label}</span>
        </button>)}
      </div>
    </section>}

    <section className="faq" aria-labelledby={showUnlockVisual ? 'unlock-heading' : 'faq-heading'}>
      {!showUnlockVisual && <div className="faq-heading">
        <div>
          <h2 id="faq-heading">{hasQuery ? 'Search results' : activeCategory ? categoryFor(activeCategory).label : 'Popular questions'}</h2>
        </div>
        {browsing && <span>{results.length} {results.length === 1 ? 'answer' : 'answers'} found</span>}
      </div>}
      {showUnlockVisual ? <>
        <UnlockOptions />
        <a className="unlock-open" href="#/guide/ways-to-unlock">Open this guide <ArrowUpRight size={17} /></a>
      </> : <>
        {visible.length ? <div className="answer-grid">{visible.map(article => <ArticleCard key={article.id} article={article} featured={!browsing} />)}</div> : <div className="empty"><h3>No answers found</h3><p>Try another word, like “Stickers” or “episodes.”</p><button onClick={() => changeQuery('')}>See popular questions <ArrowRight size={16} /></button></div>}
        {browsing && results.length > limit && <button className="more-button" onClick={() => setLimit(limit + 8)}>Show more answers <ArrowRight size={17} /></button>}
        {!hasQuery && <div className="search-nudge"><span>Looking for something else?</span><button onClick={focusSearch}>Search all help topics <ArrowRight size={17} /></button></div>}
      </>}
    </section>
  </main>
}

function UnlockGuide() {
  return <main className="unlock-page">
    <a className="back" href="#/"><ArrowLeft size={17} /> Back to help</a>
    <UnlockOptions context="page" />
  </main>
}

function GuideVisual({ article }) {
  const visual = guideVisuals[article.id]
  if (!visual) return null
  const List = visual.kind === 'flow' ? 'ol' : 'ul'
  return <div className={`guide-visual guide-visual-${visual.kind}`} aria-label="At a glance">
    <div className="guide-visual-label"><CategoryMark id={article.category} /><span>At a glance</span></div>
    <List className="guide-visual-items">
      {visual.items.map((item, index) => <li key={item} className="guide-visual-item">
        <span className="guide-visual-number">{String(index + 1).padStart(2, '0')}</span>
        <strong>{item}</strong>
      </li>)}
    </List>
  </div>
}

function guideSentences(text) {
  if (typeof Intl.Segmenter !== 'function') return [text]
  return Array.from(new Intl.Segmenter('en', { granularity: 'sentence' }).segment(text), part => part.segment.trim()).filter(Boolean)
}

function Guide({ article }) {
  const category = categoryFor(article.category)
  return <main className="guide" key={article.id}>
    <a className="back" href="#/"><ArrowLeft size={17} /> Back to help</a>
    <div className="guide-heading">
      <span className="guide-category"><CategoryMark id={category.id} />{category.label}</span>
      <h1>{article.title}</h1>
      <p>{article.summary}</p>
    </div>
    {article.review && <p className="review-note">Options may vary by app version. Check your app for the latest details.</p>}
    <GuideVisual article={article} />
    <div className="guide-body">
      {article.sections.map((section, index) => <section key={section.heading}>
        <div className="guide-section-heading"><span className="guide-section-index">{String(index + 1).padStart(2, '0')}</span><h2>{section.heading}</h2></div>
        <div className="guide-section-copy">{guideSentences(section.text).map((sentence, sentenceIndex) => <p key={sentenceIndex}>{sentence}</p>)}</div>
      </section>)}
    </div>
    <a className="guide-bottom-link" href="#/"><ArrowLeft size={17} /> Back to help</a>
  </main>
}

function App() {
  const id = useRoute()
  const article = articleFor(id)
  return <div className="app"><Header guide={Boolean(article)} />{article?.id === 'ways-to-unlock' ? <UnlockGuide /> : article ? <Guide article={article} /> : <Home />}<footer className="footer"><span>soonshot <b>help</b></span><span>Answers, made simple.</span></footer></div>
}

createRoot(document.getElementById('root')).render(<App />)
