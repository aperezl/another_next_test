const posts = [
  {
    id: '1',
    title: 'Bitters hashtag waistcoat fashion axe chia unicorn',
    category: 'Category 1',
    date: '12 Jun 2019',
    content: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
  },
  {
    id: '2',
    title: 'Meditation bushwick direct trade taxidermy shaman',
    category: 'Category 2',
    date: '12 Jun 2019',
    content: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
  },
  {
    id: '3',
    title: 'Meditation bushwick direct trade taxidermy shaman',
    category: 'Category 2',
    date: '12 Jun 2019',
    content: 'Woke master cleanse drinking vinegar salvia'
  }
]


export default function Posts () {
  return (
    <div className='container text-gray-600 body-font overflow-hidden px-5 py-24 mx-auto'>
      <div className='-my-8 divide-y-2 divide-gray-100'>

        {/* Post Item */}
        {posts.map(post => {
          return (
             <PostItem
              title={post.title}
              category={post.category}
              date={post.date}
              content={post.content}
              />
          )
          })}
        
      </div>
    </div>
  )
}


export function PostItem ({ title, category, date, content }) {
  return (
    <div className='py-8 flex flex-wrap md:flex-nowrap'>
      <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
        <span className='font-semibold title-font text-gray-700'>
          {category}
        </span>
        <span className='mt-1 text-gray-500 text-sm'>
          {date}
        </span>
      </div>
      <div className='md:flex-grow'>
        <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
          {title}
        </h2>
        <p className='leading-relaxed'>
          {content}
        </p>
        <a className='text-indigo-500 inline-flex items-center mt-4' href='#'>
          Learn More
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
        </a>
      </div>
    </div>
  )
}