# Information About Design

## Movies Page

- Instead of using a button for each movie, the user can click on the movie item itself.
- Pagination is not implemented since there are only 8 movies.

## Movie Detail Page

- Implemented infinite scrolling to improve performance and provide a non-blocking user reading experience.
- All character data is cached to improve performance because:
  - There is no API endpoint for fetching quotes populated with character information.
  - Character data is not changed frequently.
  - API rate limiting can be avoided by fetching all characters at once.
  - Redux can also be used for state management to store characters.
