import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    onChangeSearchInput,
    filterClick,
    ratingClick,
  } = props

  return (
    <div className="filters-group-container">
      <input
        type="search"
        className="search-box"
        placeholder="Search"
        onChange={onChangeSearchInput}
      />
      <h1 className="category-title">Category</h1>
      <ul className="category-list">
        {categoryOptions.map(eachCategory => (
          <li key={eachCategory.categoryId} className="category-item">
            <button
              type="button"
              className="category-button"
              onClick={() => filterClick(eachCategory.categoryId)}
            >
              <p>{eachCategory.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <h1 className="category-title">Rating</h1>
      <ul className="category-list">
        {ratingsList.map(eachRating => (
          <li key={eachRating.ratingId} className="category-item">
            <button
              type="button"
              className="category-button"
              onClick={() => ratingClick(eachRating.ratingId)}
            >
              <img
                src={eachRating.imageUrl}
                alt={`rating ${eachRating.ratingId}`}
                className="rating-img"
              />
            </button>
            <span className="up">& up</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FiltersGroup
