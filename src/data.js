export const categories = [
  { id: 'all', label: 'All topics', description: 'Every answer in one place' },
  { id: 'watching', label: 'Watching', description: 'Find, play and save stories' },
  { id: 'payments', label: 'Stickers & plans', description: 'Unlocks, rewards and purchases' },
  { id: 'account', label: 'Your account', description: 'Sign in, settings and support' },
  { id: 'content', label: 'Content guide', description: 'How stories are presented' },
]

export const questionKeywords = {
  'getting-started': 'Soonshot',
  'sign-in': 'sign in',
  home: 'home screen',
  explore: 'Explore',
  previews: 'story previews',
  'episode-page': 'story page',
  events: 'Soonshot events',
  profile: 'profile name',
  'watch-history': 'watch history',
  'saved-stories': 'saved stories',
  'gift-codes': 'gift code',
  stickers: 'Stickers',
  announcements: 'announcements',
  settings: 'settings',
  notifications: 'notifications',
  'episode-details': 'episode titles',
  'purchase-messages': 'purchase details',
  'free-episodes': 'free',
  'featured-banner': 'featured stories',
  surveys: 'survey',
  'survey-results': 'survey feedback',
  'ai-chat': 'AI character chat',
  'unlock-episodes': 'unlock',
  'ways-to-unlock': 'unlock',
  fanpass: 'FanPass',
  membership: 'Membership',
  'share-stories': 'share a story',
  'earn-rewards': 'free Stickers',
  'sticker-expiration': 'Stickers',
  'recommendation-popups': 'recommendation',
  'contact-support': 'contact support',
  refunds: 'store refund',
  promotions: 'promotional offers',
  'app-updates': 'update Soonshot',
  'prices-and-rewards': 'prices and reward amounts',
  'delete-account': 'close my account',
}

// Each entry is a locally written guide. The original policy title is kept only as a
// search synonym; the website has no dependency on the source workspace.
const guide = (id, category, title, original, summary, sections, options = {}) => ({
  id, category, title, original, summary,
  sections: sections.map(([heading, text]) => ({ heading, text })),
  ...options,
})

export const articles = [
  guide('getting-started', 'account', 'What happens when I first open Soonshot?', '앱진입', 'A quick introduction to the permissions you may see when setting up the app.', [
    ['Your first visit', 'The app may ask for location, notifications and activity tracking permissions during initial setup. Location helps select content for your country. You can review a declined permission later in your device settings.'],
    ['A note on availability', 'Notices, consent steps and content can differ by country and language. Your device and local requirements determine which prompts appear.'],
  ], { review: true }),
  guide('sign-in', 'account', 'How do I sign in or create an account?', '로그인 / 회원가입', 'Use an available social sign in option to get started.', [
    ['Signing in', 'Choose Google, Facebook or Apple if it appears in your app. Use the same sign in method next time to return to your history and purchases.'],
    ['Having trouble?', 'Try the sign in method you used before and check which account is connected to it. Email and password sign in may not be available in your app.'],
  ], { review: true }),
  guide('home', 'watching', 'What will I find on the home screen?', '홈', 'New releases, popular picks, your progress and recommendations live here.', [
    ['Browse at a glance', 'The home screen can show featured stories, trending titles, most watched stories, Continue Watching, Coming Soon and Soonshot Originals. Tap a story or banner to open its details.'],
    ['A feed made for your region', 'The titles and categories you see may differ by country. More recommendations can appear as you scroll.'],
  ], { review: true }),
  guide('explore', 'watching', 'How does Explore choose what to show me?', '탐색', 'Explore helps you discover stories available in your region.', [
    ['Recommendations', 'Explore shows stories available in your region. Your language settings can also affect which titles you see.'],
  ], { review: true }),
  guide('previews', 'watching', 'How do story previews work?', '미리보기', 'Get a quick feel for a story before you settle in.', [
    ['Previewing a title', 'The first Trending Now preview may play automatically. Moving to another preview starts that selection. Playback can differ by app version.'],
  ], { review: true }),
  guide('episode-page', 'watching', 'What can I do on a story page?', '에피소드 페이지', 'See the story details, find episodes and pick up where you left off.', [
    ['Choose your next episode', 'Open a title to see its description and episode list. If you have watched it before, Continue Watching can return you to your progress.'],
    ['Before unlocking', 'The free episode count and the sticker cost can vary by story. Check the label on the episode and the confirmation shown in the app before unlocking.'],
  ], { review: true }),
  guide('events', 'watching', 'Where do I find Soonshot events?', '이벤트', 'Events can introduce a video or send you to a related experience.', [
    ['Event details', 'An event may play a video or open another destination. Check the event screen for its dates, availability and any cost.'],
  ], { review: true }),
  guide('profile', 'account', 'Can I change my profile name?', '프로필', 'Your profile is where your name and account details live.', [
    ['Profile name', 'Profile names can be up to 30 characters and need to be unique. If your choice is taken, try another name. Profile picture options can differ by app version.'],
  ], { review: true }),
  guide('watch-history', 'watching', 'Where can I find my watch history?', '시청내역', 'Return to stories you have already started.', [
    ['Watching again', 'Look for Watch History or Continue Watching to return to a story you started. The location can differ by app version.'],
  ], { review: true }),
  guide('saved-stories', 'watching', 'Where are my saved stories?', '저장한 콘텐츠', 'Keep interesting titles close for later.', [
    ['Your list', 'When saved stories are available, find your list in your profile or library area. The exact location can differ by app version.'],
  ], { review: true }),
  guide('gift-codes', 'payments', 'How do I use a gift code?', '기프트코드', 'Enter a valid code to receive its sticker reward.', [
    ['Redeem a code', 'Go to Profile → menu → Gift Code. Enter your code and select Register. If the code is valid, its Stickers are added to your account.'],
    ['If it does not work', 'Check for typos and read any terms on the code screen. The Gift Code option can differ by app version.'],
  ], { review: true }),
  guide('stickers', 'payments', 'What are Stickers and how are they used?', 'Sticker', 'Stickers help you unlock eligible episodes and features.', [
    ['Paid and free Stickers', 'Paid Stickers come from a purchase in the Store. Free Stickers can come from rewards or bonuses. When you spend Stickers, eligible free Stickers are used first, starting with those that expire soonest, followed by paid Stickers.'],
    ['Check your balance', 'Check your balance and expiry dates in the app before unlocking. New reward Stickers expire after 7 days, pack bonus Stickers after 30 days, and paid Stickers do not expire. Older balances may have different terms.'],
  ]),
  guide('announcements', 'account', 'Where can I read announcements?', '공지사항', 'Find updates and event notices in the app.', [
    ['News from Soonshot', 'Open the app menu and look for Announcements. Its location may differ by app version.'],
  ], { review: true }),
  guide('settings', 'account', 'Where do I change my settings?', '환경설정', 'Manage your app preferences in one place.', [
    ['Finding settings', 'Open your profile menu and choose Settings. The controls you see depend on your app version.'],
  ], { review: true }),
  guide('notifications', 'account', 'How do I manage notifications?', '푸시알람', 'Choose how you hear about new stories and updates.', [
    ['Notification access', 'You can change notification permission in your device settings. Any in-app notification options depend on your app version.'],
  ], { review: true }),
  guide('episode-details', 'content', 'How are episode titles and details organized?', '콘텐츠 회차 제목 및 상세정보', 'A consistent format helps you find the story and episode you want.', [
    ['Episode order', 'A teaser may appear before the numbered story episodes. Full episodes are ordered from episode 1 onward. The teaser is called “예고편” in Korean and “Teaser” in other supported languages.'],
    ['Story details', 'A story may show its genre, cast and a short description. These details appear in your selected language when available.'],
  ]),
  guide('purchase-messages', 'payments', 'Will purchase details appear in my language?', '구독권 & 스티커 결제 문구', 'Read the terms shown with a Sticker or subscription purchase.', [
    ['Before you pay', 'Purchase and reward details should appear in your selected app language. Check the amount, renewal period and terms at checkout.'],
  ], { review: true }),
  guide('free-episodes', 'payments', 'How many episodes can I watch for free?', '콘텐츠별 무료회차 기준', 'The number of free episodes depends on the story.', [
    ['Find your free episodes', 'Open a story and look at its episode list. Episodes marked Free are ready to watch without Stickers.'],
    ['Why it varies', 'Longer stories may offer more free episodes, and some titles have different terms. The episode list always shows what is free for the story you picked.'],
  ], { review: true }),
  guide('featured-banner', 'content', 'How are featured stories chosen?', '메인배너 운영 정책', 'The featured row mixes new releases with stories viewers are enjoying.', [
    ['A rotating selection', 'Featured titles rotate between new releases and stories viewers enjoy. The lineup can differ by region and change over time.'],
  ]),
  guide('surveys', 'account', 'Why am I seeing a survey?', '설문 정책', 'Occasional surveys help Soonshot learn what viewers enjoy.', [
    ['Taking part', 'A survey announcement may appear in the app, with the survey available from selected areas such as Home, Rewards or Profile. A completed survey should no longer be offered in those areas.'],
    ['Rewards', 'A past survey plan mentioned a 5 Sticker reward. Check the current invitation for the reward and conditions of that particular survey.'],
  ], { review: true }),
  guide('survey-results', 'content', 'What happens to survey feedback?', '설문 결과', 'Feedback is reviewed to help improve the experience.', [
    ['How it is used', 'Soonshot reviews survey answers to learn what viewers enjoy. Written responses may be translated before review. Public results may not be available.'],
  ]),
  guide('ai-chat', 'payments', 'How does AI character chat use Stickers?', 'AI 캐릭터 정책', 'Try a character conversation, then see the cost before you send.', [
    ['Free trial and cost', 'New AI chat users may receive five free messages. After that, each message costs one Sticker. Check your balance and the cost before sending.'],
    ['If a reply fails', 'A system failure should not leave you charged for a reply you did not receive. A published maintenance period should not deduct a Sticker. Availability and final terms should be checked in the app.'],
  ], { review: true }),
  guide('unlock-episodes', 'payments', 'How do I unlock an episode?', '에피소드 잠금 해제', 'Choose a single unlock or turn on automatic purchasing.', [
    ['One at a time', 'A single unlock opens one episode and deducts the Sticker price shown for that episode.'],
    ['Automatic purchasing', 'On the first automatic purchase, the current and next episodes are unlocked together, costing two episode unlocks. Later purchases unlock one episode at a time. Review the cost before enabling this option.'],
  ]),
  guide('ways-to-unlock', 'payments', 'How can I unlock dramas?', 'ways to watch dramas', 'Compare free episodes, Stickers, FanPass and Membership in one view.', []),
  guide('fanpass', 'payments', 'What is FanPass?', 'FanPass', 'Rent one eligible story for the length of a monthly FanPass subscription.', [
    ['How it works', 'FanPass provides a rental pass. Use it to select one eligible title and watch that title during your subscription benefit period. The pass and rental last only for that period, whether you use the pass early or late.'],
    ['Which stories qualify?', 'Some titles are excluded due to their licensing terms and will not appear in the FanPass selection. FanPass is separate from a regular Membership, so both can exist on one account.'],
    ['US price', 'The listed US price is $1.99 per month. Check whether FanPass is available in your app and review the final price and renewal terms before subscribing.'],
  ]),
  guide('membership', 'payments', 'What is Membership?', 'Membership', 'A subscription option for eligible paid episodes.', [
    ['US price', 'The listed US monthly price is $9.99. A $35.95 annual promotional price may also appear, but its offer period is not confirmed.'],
    ['Before subscribing', 'Check the Membership screen for the episodes included with your offer and review the final price and renewal terms at checkout.'],
  ]),
  guide('share-stories', 'watching', 'Can I share a story with friends?', '콘텐츠 공유', 'Share a story poster when the sharing option is available.', [
    ['What gets shared', 'When sharing is available, it uses the story poster rather than a video clip. Available sharing destinations can vary.'],
  ], { review: true }),
  guide('earn-rewards', 'payments', 'How can I earn free Stickers?', '리워드 정책', 'Check in and complete eligible tasks for reward Stickers.', [
    ['Everyday opportunities', 'You may earn free Stickers from daily check-ins, eligible ads, and one-time account or notification tasks. Check each task in the app for its current reward.'],
    ['An evolving program', 'Reward amounts and available tasks can change. Review each task before taking part.'],
  ], { review: true }),
  guide('sticker-expiration', 'payments', 'Do free or paid Stickers expire?', '유무료 스티커 정책', 'The expiry depends on how you received the Stickers.', [
    ['Expiry periods', 'New reward Stickers and free Stickers from support expire after 7 days. Bonus Stickers in a paid pack expire after 30 days. Paid Stickers do not expire.'],
    ['Which are spent first?', 'Free Stickers are spent first, starting with those that expire soonest. Paid Stickers are spent afterward. Older Stickers may keep their earlier expiry terms, so check My Stickers for your exact dates.'],
  ]),
  guide('recommendation-popups', 'watching', 'Why did a recommendation or survey appear while watching?', '이탈, 완주 추천 팝업', 'You may occasionally see a suggestion or survey around a viewing session.', [
    ['During a story', 'You may see a survey partway through an episode or a suggestion when you leave. These prompts do not appear every time.'],
  ], { review: true }),

  guide('contact-support', 'account', 'How can I contact support?', 'CS 문의 및 SNS 계정 관리', 'Send a one to one inquiry from the app and follow its status there.', [
    ['What to expect', 'After you send an inquiry, you may get an automatic acknowledgment. A person then reviews your message and should reply within 48 hours.'],
    ['Your answer', 'Replies may arrive by email and appear in your app inquiry. Include the details needed to explain the issue, then check for updates.'],
  ], { review: true }),
  guide('refunds', 'payments', 'What happens after a store refund?', '환불 정책', 'A confirmed refund also changes the benefit attached to that purchase.', [
    ['After the store confirms it', 'A refunded subscription loses access to its paid episodes. A refunded Sticker purchase has its remaining related balance removed. The purchase history keeps a record of the adjustment.'],
    ['Need help?', 'If something looks wrong after a refund, contact support with the purchase details so the team can review the record. Store refund decisions are handled by the relevant app store.'],
  ]),
  guide('promotions', 'payments', 'How do promotional offers work?', '프로모션 캠페인', 'Eligible viewers may see a limited offer on Stickers or a plan.', [
    ['Availability', 'Some Android users may see a Google Play promotion. Availability can depend on country and account activity.'],
    ['At checkout', 'The offer and final price visible in your store checkout are the details to review before buying. Offers can differ between viewers and may change over time.'],
  ]),
  guide('app-updates', 'account', 'How do I update Soonshot?', '업데이트 관리', 'Use the official app store to keep Soonshot working smoothly.', [
    ['Store installations', 'If your version is old, the app may show an update prompt that takes you to Google Play or the App Store.'],
    ['Older APK installations', 'If you installed Soonshot outside an official store, you may need a fresh store installation. Connect your guest account first if possible, because very old guest data may not be recoverable.'],
  ]),
  guide('prices-and-rewards', 'payments', 'Where can I see US prices and reward amounts?', '금액 정책', 'See the listed US prices in USD and the ways to earn free Stickers.', [
    ['US Sticker packs', '500 Stickers + 25 bonus: $4.49. 1,000 + 100 bonus: $8.90. 2,500 + 500 bonus: $19.90. 5,000 + 2,000 bonus: $41.90. The older 100 and 200 Sticker packs are no longer sold.'],
    ['Everyday rewards', 'Daily check-ins offer 10, 15, 20, 25, 30, 40 and 50 free Stickers across a seven-day cycle. Missing a day restarts the cycle. Login and notification tasks can each offer 30 Stickers once, and eligible ads can offer 50 Stickers each for up to four ads daily.'],
    ['US subscriptions', 'The listed monthly prices are $1.99 for FanPass and $9.99 for Membership. A $35.95 annual Membership promotion may appear, but its offer period is not confirmed. Check availability and final renewal terms at checkout.'],
  ]),
  guide('delete-account', 'account', 'What happens if I close my account?', '회원 탈퇴', 'Account closure begins a 30 day period before you can register again.', [
    ['After you request closure', 'Your account is deactivated and a 30 day cooldown begins. Re-registration with the same identity is restricted during that period; it is allowed after the period ends.'],
    ['Before you leave', 'Review your remaining purchases and account details in the app. If you need help with a closure or later access, contact support.'],
  ]),
]

export const popularIds = ['free-episodes', 'stickers', 'fanpass', 'unlock-episodes', 'refunds']

export const categoryFor = id => categories.find(category => category.id === id)
export const articleFor = id => articles.find(article => article.id === id)
