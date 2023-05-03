import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Movie from '../models/Movie';
import Quote from '../models/Quote';
import { LordOfRingsAPI } from '../services/LordOfRingsAPI';
import { useCharacters } from '../services/useCharacters';

interface Props {
  movie: Movie;
}

const QuoteList: React.FC<Props> = ({ movie }) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [page, setPage] = useState<number>(0);

  // Get the characters data using the useCharacters hook
  const characters = useCharacters();

  const loadMoreQuotes = async () => {
    const response = await LordOfRingsAPI.get(`/movie/${movie._id}/quote`, {
      params: {
        page: page + 1,
        limit: 10,
      },
    });
    const newQuotes = response.data.docs;
    setQuotes([...quotes, ...newQuotes]);
    setPage(page + 1);
  };

  useEffect(() => {
    loadMoreQuotes();
  }, []);

  return (
    <div>
      <h2>Quotes</h2>
      {quotes.length === 0 ? (
        <p>No quotes available</p>
      ) : (
        <InfiniteScroll
          dataLength={quotes.length}
          next={loadMoreQuotes}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          height={200}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {quotes.map((quote) => {
            // Find the character with the matching character id
            const character = characters.find((c) => c._id === quote.character);

            // Get the character name
            const characterName = character?.name ?? 'Unknown';

            return (
              <div key={quote._id} style={{ textAlign: 'left' }}>
                <span style={{ fontWeight: 'bold' }}>{characterName}</span>:{' '}
                {quote.dialog}
              </div>
            );
          })}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default QuoteList;
