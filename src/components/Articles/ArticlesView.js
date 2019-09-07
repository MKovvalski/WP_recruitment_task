import React         from 'react'
import SelectableTag from '../../components/SelectableTag'
import Loader        from '../Loader'

const Article = ({ title, img: { url = null, title: imgTitle }, tags = [], url: articleUrl = null }) => (
  <div className='article'>
    <img
      className='article__image'
      src={url}
      alt={imgTitle}
    />
    <div className='article__content'>
      <a
        href={articleUrl}
        target='_blank'
        rel='noopener noreferrer '
        className='article__link-wrapper'
      >
        <h3 className='article__title'>
          {title}
        </h3>
      </a>
      <div className='article__tags'>
        {tags.map((tag, i) =>
          <SelectableTag
            key={i}
            title={tag}
            modifiers='in-article'
          />,
        )}
      </div>
    </div>

  </div>
)

const HasMoreButton = ({ onClick }) =>
  <div
    onClick={onClick}
    className='articles-container__load-more'
  >
    Więcej
  </div>

const articlesView = ({ data, loadMorePages, hasMore, loadingState }) => {
  const shouldDisplay = state => loadingState === state
  const shouldDisplayLoadMore = hasMore && !shouldDisplay('loading')

  return (
    <div className='articles-container'>
      {shouldDisplay('loading') && <Loader />}
      {shouldDisplay('no-articles') && <div>Brak artykułów!</div>}
      {shouldDisplay('failed') && <div>coś Poszło nie tak!</div>}
      {shouldDisplay('success') && <>
        {data && data.map(article => (
          <Article {...article} key={article.id} />
        ))}
        {shouldDisplayLoadMore && <HasMoreButton onClick={loadMorePages} />}
      </>
      }
    </div>
  )
}

export default articlesView